import { useContext } from "react";
import { MdLocationOn } from "react-icons/md";
import { WiCloud, WiDaySunny, WiNightClear, WiUmbrella } from "react-icons/wi";
import { LocationContext, WeatherContext } from "../context/contexts";

const buildWeatherMessages = ({ temp, rainChance, humidity, hour }) => {
  if (temp == null) return ["Checking weather..."];

  let messages = [];

  if (temp <= 18) {
    messages = [
      "Cool weather 🌬️ Nice time for travel.",
      "Fresh breeze outside 🌿 Enjoy the ride.",
      "Cold weather ❄️ Comfortable for outing.",
    ];
  } else if (temp <= 28) {
    messages = [
      "Pleasant travel weather ☀️",
      "Good time to move around 🚗",
      "Comfortable journey expected 🌤️",
    ];
  } else if (temp <= 35) {
    messages = [
      "Warm outside 🌡️ Stay hydrated.",
      "Hot weather 🔥 Travel in cooler hours.",
      "Sunny day 🌞 Keep water with you.",
    ];
  } else {
    messages = [
      "Extreme heat 🔥 Prefer AC rides.",
      "Very hot outside ☀️ Avoid peak afternoon travel.",
      "High temperature 🌵 Travel comfortably.",
    ];
  }

  if (rainChance > 60) messages.push("Heavy rain chance 🌧️ Consider delaying travel.");
  else if (rainChance > 30) messages.push("Chance of rain 🌦️ Carry umbrella.");

  if (humidity > 75) messages.push("High humidity 😓 Feels hotter outside.");

  if (hour >= 18 || hour <= 6) messages.push("Good time for evening/night travel 🌇");

  return messages;
};

const TripSelector = () => {
  const { address } = useContext(LocationContext);
  const { weather } = useContext(WeatherContext);

  const temp = weather?.current_weather?.temperature;
  const rainChance = weather?.current_weather?.rainProbability ?? 0;
  const humidity = weather?.current_weather?.humidity ?? 0;

  const messages = buildWeatherMessages({
    temp,
    rainChance,
    humidity,
    hour: new Date().getHours(),
  });

  const weatherMessage =
    temp == null
      ? "Checking weather..."
      : `${messages[0]} (${temp}°C)`;

  return (
    <div>
      <div className="flex items-center px-4 py-3 gap-3 justify-center">
        <MdLocationOn className="text-red-500 text-2xl" />
        <p className="text-white font-bold text-base">{address || "Getting address..."}</p>
      </div>

      <div className="flex items-center justify-center gap-2 mb-4">
        <p className="text-lg font-bold text-white">{weatherMessage}</p>

        {weatherMessage === "Checking weather..." && (
          <div className="flex gap-2 text-2xl">
            <WiDaySunny className="text-yellow-400 animate-bounce" />
            <WiNightClear className="text-indigo-700 animate-bounce delay-150" />
            <WiCloud className="text-gray-400 animate-bounce delay-300" />
            <WiUmbrella className="text-blue-500 animate-bounce delay-500" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TripSelector;
