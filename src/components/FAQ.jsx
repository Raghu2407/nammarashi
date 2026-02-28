import { useState } from "react";
import { APP_STRINGS } from "../constants/strings";

const ownerFAQs = [
  {
    q: "How do I book a cab?",
    a: "Just call or WhatsApp us with your pickup location, destination, and time. We confirm your cab within minutes.",
  },
  {
    q: "Can I book for someone else — like my parents or kids?",
    a: "Absolutely. Just share their number when booking. Our driver will coordinate directly with them for pickup.",
  },
  {
    q: "Is the fare fixed or does it change?",
    a: "The fare is 100% fixed at the time of booking. No last-minute additions — not for fuel, toll, or anything else.",
  },
  {
    q: "Can I book for an early morning or late night trip?",
    a: "Yes. We operate 24/7. Airport drops at 3 AM, station pickups at midnight — we're always available.",
  },
  {
    q: "What if I need to cancel or change my booking?",
    a: "Call or WhatsApp us at least 1 hour before your trip. We'll adjust or cancel without any fuss.",
  },
  {
    q: "Do you offer outstation trips — like Goa or Dandeli?",
    a: "Yes! We cover intercity trips regularly. Share your plan and we'll give you a fixed quote upfront.",
  },
];

const driverFAQs = [
  {
    driver: "Raju Anna",
    avatar: "🧔",
    experience: "11 years driving in Hubli",
    q: "Any good places to visit near Hubli?",
    a: `Saar, Hubli has some real gems most people miss! Nrupatunga Betta is perfect for a quiet evening — the view from the top is beautiful, especially around sunset. Unkal Lake is great for a morning walk with family. If you have a little more time, Chandramouleshwara Temple in Unkal is peaceful and not crowded. For a half-day trip, Gudavi Bird Sanctuary near Shimoga side is excellent. I take families there often and they always come back happy!`,
    tip: "🕔 Best time for Nrupatunga Betta: 5:30–6:30 PM",
  },
  {
    driver: "Prakash Bhai",
    avatar: "👨",
    experience: "8 years, Hubli–Dharwad routes",
    q: "Where can we eat something really good and local?",
    a: `Anna, for breakfast nothing beats the Idli-Vada at Shri Sagar near Koppikar Road — crispy vada, soft idli, and chutney that is just different level. For lunch, Kamat Hotel on PB Road gives proper North Karnataka meals — jowar roti, ennegayi, shenga chutney. In the evening, the corn and bhel near Unkal Lake road is very popular with families. If you want to try something Hubli-special, ask me — I'll take you to a small place near the old bus stand where locals eat, not tourist spots.`,
    tip: "🌽 Unkal Lake corn stalls open after 5 PM",
  },
  {
    driver: "Suresh Driver",
    avatar: "🧑",
    experience: "6 years, outstation specialist",
    q: "We're going to Dandeli — what should we not miss?",
    a: `Dandeli is my favourite trip, I go there almost every weekend with customers! First thing — book the river rafting early, slots fill up fast on weekends. Syntheri Rocks is must-visit, the rock formations are like nothing else in Karnataka. Kavala Caves inside the forest is thrilling if you like adventure. For stay, I recommend resorts near the Kali River — you wake up to jungle sounds. One tip from my side: carry cash, network is weak inside the forest area. I'll plan the route so you cover everything in one day if needed.`,
    tip: "🏕️ Weekdays = less crowd, better rafting experience",
  },
  {
    driver: "Imran Chacha",
    avatar: "👴",
    experience: "14 years, senior driver",
    q: "Can we make a stop on the way? Will it cost extra?",
    a: `Bilkul nahi — no extra charge for a small stop! You need chai, ATM, medical shop, petrol — just say it. I always keep time buffer in my trips so small stops don't stress anyone. I even know which petrol bunks have clean washrooms on every route — useful when travelling with children or elderly. One thing I always tell my passengers: this is your trip, not mine. You paid for comfort, so travel comfortably.`,
    tip: "☕ I know the best chai stop on every route out of Hubli",
  },
  {
    driver: "Venkat Saar",
    avatar: "🧑‍🦱",
    experience: "9 years, airport & railway specialist",
    q: "Is it safe to travel late night or early morning?",
    a: `I have done hundreds of 3 AM airport drops and 5 AM station pickups — safety is my first priority. I know every road, every shortcut, and which routes to avoid at odd hours. My car is always well-maintained — I personally check tyres and lights before every night trip. Also, our office team tracks every trip, so your family can always know you are safe. You just sit back and sleep if you want — I'll get you there.`,
    tip: "🌙 Share trip details with family — we support live tracking",
  },
  {
    driver: "Kiran Anna",
    avatar: "👦",
    experience: "5 years, local city expert",
    q: "We're new to Hubli — any tips to make our visit better?",
    a: `Welcome to Hubli! First thing — don't miss the morning market near Durgadbail if you like fresh local produce and street food. The Old Hubli area has beautiful old architecture and is great for a casual walk. If you have kids, Indira Glass House Garden is a nice outing. For shopping, Koppikar Road is the local favourite — better prices than malls. I can suggest a full day plan based on how many days you have — just ask me when you get in the cab. I love showing people the real Hubli!`,
    tip: "🛍️ Koppikar Road shops open by 10 AM",
  },
];

function OwnerFAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer border border-gray-200 rounded-xl px-5 py-4 bg-white hover:shadow-sm transition-all"
    >
      <div className="flex justify-between items-start gap-3">
        <p className="text-sm font-semibold text-gray-800">{q}</p>
        <span className="text-gray-400 text-lg shrink-0">{open ? "−" : "+"}</span>
      </div>
      {open && (
        <p className="text-sm text-gray-500 mt-3 leading-relaxed border-t border-gray-100 pt-3">
          {a}
        </p>
      )}
    </div>
  );
}

function DriverFAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer border border-yellow-100 rounded-xl bg-white hover:shadow-sm transition-all overflow-hidden"
    >
      {/* Question Row */}
      <div className="flex justify-between items-start gap-3 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center text-xl shrink-0">
            {item.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">{item.q}</p>
            <p className="text-xs text-gray-400 mt-0.5">
              {item.driver} · {item.experience}
            </p>
          </div>
        </div>
        <span className="text-gray-400 text-lg shrink-0">{open ? "−" : "+"}</span>
      </div>

      {/* Answer */}
      {open && (
        <div className="px-5 pb-5 border-t border-yellow-100">
          {/* Driver voice bubble */}
          <div className="mt-3 bg-yellow-50 rounded-xl p-4 relative">
            <span className="absolute -top-3 left-4 text-yellow-300 text-4xl leading-none">"</span>
            <p className="text-sm text-gray-700 leading-relaxed pt-3">{item.a}</p>
            <span className="text-yellow-300 text-4xl leading-none float-right -mb-3">"</span>
          </div>

          {/* Driver tip */}
          <div className="mt-3 flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5">
            <p className="text-xs text-gray-600 font-medium">{item.tip}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [tab, setTab] = useState("owner");

  return (
    <section className="py-14 px-4 bg-gray-50" id="faq">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">Ask us anything</h2>
          <p className="text-gray-500 text-sm mt-2">
            Questions before booking? Ask the owner. <br />
            Questions during the ride? Your driver has you covered.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-white border border-gray-200 rounded-xl p-1 mb-6 shadow-sm">
          <button
            onClick={() => setTab("owner")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              tab === "owner"
                ? "bg-yellow-400 text-yellow-900 shadow"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            🧑‍💼 Ask the Owner
          </button>
          <button
            onClick={() => setTab("driver")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              tab === "driver"
                ? "bg-yellow-400 text-yellow-900 shadow"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            🚖 Ask the Driver
          </button>
        </div>

        {/* Context hint */}
        <p className="text-xs text-gray-400 text-center mb-5 italic">
          {tab === "owner"
            ? "Booking, pricing, availability — things to sort before you travel."
            : "Local tips, food spots, attractions — straight from our drivers who live here."}
        </p>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {tab === "owner"
            ? ownerFAQs.map((item, i) => <OwnerFAQItem key={i} {...item} />)
            : driverFAQs.map((item, i) => <DriverFAQItem key={i} item={item} />)}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <p className="text-sm font-semibold text-gray-700 mb-1">Still have a question?</p>
          <p className="text-xs text-gray-400 mb-4">
            We're a local team — just reach out and a real person will reply.
          </p>
          <div className="flex justify-center gap-3">
            <a
              href={`https://wa.me/${APP_STRINGS.OwnerContact.whatsapp}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              💬 WhatsApp Us
            </a>
            <a
              href={`tel:+${APP_STRINGS.OwnerContact.phone}`}
              className="flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              📞 Call Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
