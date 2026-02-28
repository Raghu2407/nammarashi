import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';
import { fetchWikiImage } from '../../api/wikipediaInstance';
import { getDistance } from '../../utils/getDistance';

const FALLBACK = { lat: 15.3647, lng: 75.1231 };

export const fetchAttractions = createAsyncThunk(
  'attractions/fetchAll',
  async (userLocation, { rejectWithValue }) => {
    const lat = userLocation?.lat ?? FALLBACK.lat;
    const lng = userLocation?.lng ?? FALLBACK.lng;

    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        console.log(`🟡 Attempt ${attempt}...`);

        const res = await axiosInstance.get('/places', {
          params: {
            categories: 'tourism',
            filter: `circle:${lng},${lat},5000`,
            limit: 10,
            apiKey: import.meta.env.VITE_GEOAPIFY_API_KEY, // ✅ Vite env
          },
          timeout: 30000,
        });

        console.log('🟢 Places found:', res.data.features.length);

        const places = await Promise.all(
          res.data.features.map(async (feature) => {
            const name = feature.properties.name || 'Unknown';
            const attractionLat = feature.geometry.coordinates[1];
            const attractionLng = feature.geometry.coordinates[0];
            const image = await fetchWikiImage(name, attractionLat, attractionLng);

            return {
              id: feature.properties.place_id,
              name,
              type: feature.properties.categories?.[0]?.split('.')[1] || 'Attraction',
              lat: attractionLat,
              lng: attractionLng,
              image,
              distance: getDistance(lat, lng, attractionLat, attractionLng),
            };
          })
        );

        return places;

      } catch (error) {
        console.log(`🔴 Attempt ${attempt} failed:`, error.message);
        if (attempt === 2) {
          return rejectWithValue('Server is busy, please try again later');
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }
);

const attractionsSlice = createSlice({
  name: 'attractions',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttractions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAttractions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAttractions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default attractionsSlice.reducer;