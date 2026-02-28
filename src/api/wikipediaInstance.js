import axios from 'axios';

// 1️⃣ Try Wikipedia search API (more flexible than direct title)
const fetchWikiSearchImage = async (placeName) => {
  try {
    const res = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        titles: placeName,
        prop: 'pageimages',
        format: 'json',
        pithumbsize: 500,
        origin: '*',
      },
    });
    const pages = res.data.query.pages;
    const page = Object.values(pages)[0];
    return page?.thumbnail?.source || null;
  } catch (error) {
    return null;
  }
};

// 2️⃣ Try Wikimedia geo search using coordinates
const fetchWikiGeoImage = async (lat, lng) => {
  try {
    const geoRes = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'geosearch',
        gscoord: `${lat}|${lng}`,
        gsradius: 1000,
        gslimit: 1,
        format: 'json',
        origin: '*',
      },
    });

    const nearbyPage = geoRes.data.query.geosearch[0];
    if (!nearbyPage) return null;

    // get image from that nearby page
    const imgRes = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        pageids: nearbyPage.pageid,
        prop: 'pageimages',
        format: 'json',
        pithumbsize: 500,
        origin: '*',
      },
    });

    const pages = imgRes.data.query.pages;
    const page = Object.values(pages)[0];
    return page?.thumbnail?.source || null;
  } catch (error) {
    return null;
  }
};

// ✅ Main export — tries both, falls back to null
export const fetchWikiImage = async (placeName, lat, lng) => {
  // 1️⃣ Try by name first
//   const nameImage = await fetchWikiSearchImage(placeName);
//   if (nameImage) {
//     console.log('🟢 Image found by name:', placeName);
//     return nameImage;
//   }

  // 2️⃣ Try by coordinates
  const geoImage = await fetchWikiGeoImage(lat, lng);
  if (geoImage) {
    console.log('🟡 Image found by coordinates near:', placeName);
    return geoImage;
  }

  // 3️⃣ Give up — use placeholder
  console.log('🔴 No image found for:', placeName);
  return null;
};