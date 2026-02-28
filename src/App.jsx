import { Provider } from 'react-redux';
import { store } from './app/store';
import Navbar from './components/navbar';
import TravelFooter from './components/TravelFooter';
import { LocationProvider } from './context/LocationContext';
import { WeatherContextProvider } from './context/WeatherContext';
import Home from './pages/home';

function App() {
  return (
    <Provider store={store}>
      <LocationProvider>
        <WeatherContextProvider>
          <Navbar />
          <Home />
          <TravelFooter />
        </WeatherContextProvider>
      </LocationProvider>
    </Provider>
  );
}

export default App;
