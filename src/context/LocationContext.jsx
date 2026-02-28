import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const LocationContext = createContext();

// Hubli fallback
const FALLBACK_LOCATION = {
  latitude: 15.3647,
  longitude: 75.1231,
};

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(FALLBACK_LOCATION);
  const [address, setAddress] = useState(null);
  const [locationReady, setLocationReady] = useState(false);

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported — using fallback");
      setLocationReady(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("📍 Real GPS location:", position.coords);
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLocationReady(true);
      },
      (error) => {
        console.log("📍 GPS error — using fallback:", error.message);
        setLocationReady(true);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location?.latitude && location?.longitude) {
      getAddressFromCoords(location.latitude, location.longitude);
    }
  }, [location]);

  const getAddressFromCoords = async (lat, lon) => {
    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/reverse",
        {
          params: { format: "json", lat, lon },
          headers: { "User-Agent": "nammarashi-travels" },
        }
      );

      setAddress(response.data.display_name);
    } catch (error) {
      console.log("Address error:", error.message);
    }
  };

  return (
    <LocationContext.Provider
      value={{ location, locationReady, getLocation, address }}
    >
      {children}
    </LocationContext.Provider>
  );
};