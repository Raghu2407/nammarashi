import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { APP_STRINGS } from "../constants/strings";
import { fetchAttractions } from "../features/attractions/attractionsSlice";

import hubli from "../assets/hubli.mp4";
import FAQ from "../components/FAQ";
import OurPromise from "../components/OurPromise";
import ServiceCard from "../components/servicesCars";
import TripSelector from "../components/TripSelector";
import { LocationContext } from "../context/LocationContext";
import { toCardProps } from "../utils/toCardProps";

const Home = () => {
  const locationRouter = useLocation();
  const dispatch = useDispatch();

  const { location, locationReady } = useContext(LocationContext);

  const { data, loading, error } = useSelector(
    (state) => state.attractions
  );

  const tripTypeFromRoute = locationRouter.state?.tripType || "Local";
  const [tripType, setTripType] = useState(tripTypeFromRoute);

  useEffect(() => {
    if (locationRouter.state?.tripType) {
      setTripType(locationRouter.state.tripType);
    }
  }, [locationRouter.state]);

  // Fetch when tripType is Local
  useEffect(() => {
    if (tripType === "Local" && locationReady && location?.latitude) {
      dispatch(
        fetchAttractions({
          lat: location.latitude,
          lng: location.longitude,
        })
      );
    }
  }, [tripType, locationReady, location, dispatch]);


  const fleets = [
    // 1. Hatchback - Toyota Glanza
    {
      id: 1,
      name: 'Toyota Glanza',
      type: 'Hatchback',
      seats: 4,
      fuel: 'Petrol',
      price: 12,
      image: `${import.meta.env.BASE_URL}cars/glanza.png`, // Correct: Capital 'C', no 'assets/'
      rating: 4.8
    },
    // 2. Sedan - Swift Dzire (New)
    {
      id: 2,
      name: 'Swift Dzire (New)',
      type: 'Sedan',
      seats: 4,
      fuel: 'Diesel',
      price: 12,
      image: `${import.meta.env.BASE_URL}cars/dzire_new.png`,
      rating: 4.9
    },
    // 3. Sedan - Toyota Etios
    {
      id: 3,
      name: 'Toyota Etios',
      type: 'Sedan',
      seats: 4,
      fuel: 'Diesel',
      price: 12,
      image: `${import.meta.env.BASE_URL}cars/etios.png`,
      rating: 4.7
    },
    // 4. SUV - Maruti Ertiga
    {
      id: 4,
      name: 'Maruti Ertiga',
      type: 'SUV',
      seats: 6,
      fuel: 'CNG/Petrol',
      price: 16,
      image: `${import.meta.env.BASE_URL}cars/ertiga.png`,
      rating: 4.8
    },
    // 5. SUV - Kia Carens
    {
      id: 5,
      name: 'Kia Carens',
      type: 'SUV',
      seats: 6,
      fuel: 'Diesel',
      price: 16,
      image: `${import.meta.env.BASE_URL}cars/carens.png`,
      rating: 4.8
    },
    // 6. SUV - Toyota Innova
    {
      id: 6,
      name: 'Toyota Innova',
      type: 'SUV',
      seats: 7,
      fuel: 'Diesel',
      price: 16,
      image: `${import.meta.env.BASE_URL}cars/innova.png`,
      rating: 4.7
    },
    // 7. SUV - Innova Crysta
    {
      id: 7,
      name: 'Innova Crysta',
      type: 'SUV',
      seats: 7,
      fuel: 'Diesel',
      price: 18,
      image: `${import.meta.env.BASE_URL}cars/innova_crysta.png`,
      rating: 5.0,
      featured: true
    },
    // 8. SUV - Toyota Hycross
    {
      id: 8,
      name: 'Toyota Hycross',
      type: 'SUV',
      seats: 7,
      fuel: 'Hybrid',
      price: 22,
      image: `${import.meta.env.BASE_URL}cars/hycross.png`,
      rating: 5.0
    },
    // 9. Tempo - Tempo Traveller (10S)
    {
      id: 9,
      name: 'Tempo Traveller (10S)',
      type: 'Tempo',
      seats: 10,
      fuel: 'Diesel',
      price: 24,
      image: `${import.meta.env.BASE_URL}cars/tempo10.png`,
      rating: 4.7
    },
    // 10. Tempo - Tempo Traveller (13S)
    {
      id: 10,
      name: 'Tempo Traveller (13S)',
      type: 'Tempo',
      seats: 13,
      fuel: 'Diesel',
      price: 22,
      image: `${import.meta.env.BASE_URL}cars/tempo13.png`,
      rating: 4.9
    },
    // 11. Tempo - Tempo Traveller (18S)
    {
      id: 11,
      name: 'Tempo Traveller (18S)',
      type: 'Tempo',
      seats: 18,
      fuel: 'Diesel',
      price: 32,
      image: `${import.meta.env.BASE_URL}cars/tempo18.png`,
      rating: 4.8
    },
    // 12. Tempo - Force Urbania (12S)
    {
      id: 12,
      name: 'Force Urbania (12S)',
      type: 'Tempo',
      seats: 12,
      fuel: 'Diesel',
      price: 40,
      image: `${import.meta.env.BASE_URL}cars/urbania.png`,
      rating: 5.0
    },
    // 13. Tempo - Force Urbania (17S)
    {
      id: 13,
      name: 'Force Urbania (17S)',
      type: 'Tempo',
      seats: 17,
      fuel: 'Diesel',
      price: 40,
      image: `${import.meta.env.BASE_URL}cars/urbania.png`,
      rating: 5.0
    },
    // 14. Bus - Mini Bus (23S)
    {
      id: 14,
      name: 'Mini Bus (23S)',
      type: 'Bus',
      seats: 23,
      fuel: 'Diesel',
      price: 40,
      image: `${import.meta.env.BASE_URL}cars/mini_bus.png`,
      rating: 4.6
    },
    // 15. Bus - AC Coach Bus (34S)
    {
      id: 15,
      name: 'AC Coach Bus (34S)',
      type: 'Bus',
      seats: 34,
      fuel: 'Diesel',
      price: 52,
      image: `${import.meta.env.BASE_URL}cars/bus_coach.png`,
      rating: 4.8
    },
    // 16. Volvo Bus
    {
      id: 16,
      name: 'Volvo Bus',
      type: 'Bus',
      seats: 45,
      fuel: 'Diesel',
      price: 75,
      image: `${import.meta.env.BASE_URL}cars/volvo.png`,
      rating: 4.6
    }
  ];


  const services = [
    {
      id: 1,
      title: "Customised Tour Package",
      description: "Personalized travel plans designed as per your budget and preferences.",
      priceType: "Custom Quote",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80"
    },
    {
      id: 2,
      title: "Local Trips",
      description: "City rides for shopping, meetings, or daily travel needs.",
      priceType: "Per Hour",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80"
    },
    {
      id: 3,
      title: "Outstation Trips",
      description: "Comfortable long-distance travel with experienced drivers.",
      priceType: "Per Km",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
    },
    {
      id: 4,
      title: "One Way Drop",
      description: "Affordable one-side drop service without return charges.",
      priceType: "Fixed Fare",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
    },
    {
      id: 5,
      title: "Airport Pickup & Drop",
      description: "On-time airport transfers with zero last-minute stress.",
      priceType: "Starts From",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80"
    },
    {
      id: 6,
      title: "Corporate Trips",
      description: "Professional transport solutions for business travel needs.",
      priceType: "Contract Based",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
    },
    {
      id: 7,
      title: "Wedding Car Booking",
      description: "Premium decorated cars for weddings and special occasions.",
      priceType: "Per Day",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80"
    },
    {
      id: 8,
      title: "Holiday Packages",
      description: "Complete travel packages including stay and sightseeing.",
      priceType: "Package Price",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"
    },
    {
      id: 9,
      title: "School & College Trips",
      description: "Safe and reliable transportation for student tours.",
      priceType: "Per Km",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80"
    },
    {
      id: 10,
      title: "Tempo Traveller Rental",
      description: "Spacious group travel with comfortable seating options.",
      priceType: "Per Km",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80"
    }
  ];

  const Rating = ({ rating = 0, max = 5, size = 18, className }) => {
    const percentage = (rating / max) * 100;

    return (
      <div
        className={`relative inline-flex ${className ?? ""}`}
        style={{ width: size * max }}
      >
        {/* Empty stars */}
        <div className="flex">
          {Array.from({ length: max }).map((_, i) => (
            <svg
              key={`empty-${i}`}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ccc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>

        {/* Filled overlay */}
        <div
          className="absolute top-0 left-0 flex overflow-hidden"
          style={{ width: `${percentage}%` }}
        >
          {Array.from({ length: max }).map((_, i) => (
            <svg
              key={`full-${i}`}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="gold"
              stroke="gold"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </div>
    );
  };


  const getSeatingCapacity = (type) => {
    const capacityMap = {
      Sedan: 4,
      SUV: 6,
      MUV: 7,
      "Mini Bus": 12,
      Bus: 40,
      Hatchback: 4,
      Tempo: 9,
      Innova: 7,
    };
    // fallback: check if type string contains keywords
    if (capacityMap[type]) return capacityMap[type];
    if (/bus/i.test(type)) return 40;
    if (/suv|muv|innova/i.test(type)) return 6;
    return 4;
  };

  // const handleWhatsApp = (item) => {
  //   const seats = getSeatingCapacity(item.type);
  //   const phone = `${APP_STRINGS.OwnerContact.whatsapp}`; // replace with your number (no + or spaces)
  //   const message = encodeURIComponent(
  //     `Hello! I'd like to enquire about the following vehicle:\n\n` +
  //     `🚗 *Vehicle:* ${item.name}\n` +
  //     `🏷️ *Type:* ${item.type}\n` +
  //     `💺 *Seating Capacity:* ${seats} Seats\n` +
  //     `💰 *Price:* ₹${item.price}/km\n\n` +
  //     `Please share availability and booking details. Thank you!`
  //   );
  //   window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  // };

  const handleWhatsApp = (item, service = null) => {
    const seats = getSeatingCapacity(item.type);
    const phone = `+91${APP_STRINGS.OwnerContact.whatsapp}`;
    const message = encodeURIComponent(
      `Hello! I'd like to enquire about a booking:\n\n` +
      `🚗 *Vehicle:* ${item.name}\n` +
      `🏷️ *Type:* ${item.type}\n` +
      `💺 *Seating Capacity:* ${seats} Seats\n` +
      `💰 *Price:* ₹${item.price}/km\n` +
      (service
        ? `\n🛎️ *Service:* ${service.title}\n` +
        `📦 *Pricing Type:* ${service.priceType}\n` +
        `📝 *Service Details:* ${service.description}\n`
        : "") +
      `\nPlease share availability and booking details. Thank you!`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const handleCall = (item) => {
    window.location.href = `tel:${APP_STRINGS.OwnerContact.phone}`; // replace with your number
  };


  return (
    <>
      <div className="relative h-[500px] w-full overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={hubli} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        {/* Content On Top */}
        <div className="absolute inset-0 z-10 m-10 flex flex-col items-center justify-center gap-6">
          <TripSelector />
          {/* <Search /> */}
        </div>

      </div>

      <div className="p-10 sm:p-20">
        {tripType === "Local" && (
          <>
            <div className="mb-3" id="nearby">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  Local Attractions
                </h2>
              </div>
            </div>

            {loading && <p className="ml-4">Loading...</p>}
            {error && (
              <p className="ml-4 text-red-500">{error}</p>
            )}

            {!loading && !error && (
              <div className="flex gap-4 overflow-x-auto pb-3">
                {data.map((item) => <ServiceCard key={item.id} {...toCardProps(item)} />)}
              </div>
            )}
          </>
        )}
        {/* Our Fleets */}
        {tripType !== 'Driver' && (
          <>
            <div className="my-2.5 mt-10">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Our Fleets</h2>
                <span className="text-sm text-blue-500 cursor-pointer">View all →</span>
              </div>
            </div>

            <div className="relative">
              <div
                className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
              <div
                className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />
              <div className="flex overflow-x-auto gap-3 pb-2.5 scrollbar-hide">
                {fleets.map((item) => <ServiceCard key={item.id} {...toCardProps(item)} />)}
              </div>
            </div>
          </>
        )}

        {/* Our Services */}
        {tripType !== 'Driver' && (
          <>
            <div className="my-2.5 mt-10">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Our Services</h2>
                <span className="text-sm text-blue-500 cursor-pointer">View all →</span>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />

              <div className="flex overflow-x-auto gap-3 pb-3 px-1 scrollbar-hide">
                {services.map((item) => <ServiceCard key={item.id} {...toCardProps(item)} />)}
              </div>
            </div>
          </>
        )}

        {/* Our Promise */}
        <OurPromise />
        <FAQ />
      </div>
    </>
  );
};

export default Home;
