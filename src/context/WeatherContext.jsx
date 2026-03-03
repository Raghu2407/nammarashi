import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LocationContext, WeatherContext } from "./contexts";

export const WeatherContextProvider = ({ children }) => {
    const { location } = useContext(LocationContext);



    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const latitude = location?.latitude;
    const longitude = location?.longitude;

    useEffect(() => {
        if (!latitude || !longitude) return;

        const fetchWeather = async () => {
            try {
                setLoading(true);
                setError(null);

                const { data } = await axios.get(
                    "https://api.open-meteo.com/v1/forecast",
                    {
                        params: {
                            latitude,
                            longitude,
                            current_weather: true,
                        },
                        timeout: 5000,
                    }
                );

                setWeather(data);
                console.log("Weather data:", data);
            } catch (err) {
                console.log("Weather error:", err.message);
                setError("Failed to fetch weather");
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [latitude, longitude]);

    return (
        <WeatherContext.Provider value={{ weather, loading, error }}>
            {children}
        </WeatherContext.Provider>
    );
};