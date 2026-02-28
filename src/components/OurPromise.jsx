import { useState } from "react";

const promises = [
  {
    id: 1,
    emoji: "⏱️",
    tag: "We show up",
    title: "Your cab arrives — or we fix it instantly",
    pain: "Tired of booking a cab and waiting endlessly?",
    solution:
      "If your cab doesn't show due to any issue, we dispatch a replacement immediately. No calls, no explanations needed.",
    highlight: "0 stranded customers",
    color: "bg-amber-50 border-amber-200",
    tagColor: "bg-amber-100 text-amber-700",
    highlightColor: "text-amber-600",
  },
  {
    id: 2,
    emoji: "💸",
    tag: "No surprises",
    title: "The price you see is the price you pay",
    pain: "Ever had a driver demand extra cash at the end?",
    solution:
      "Our fare is locked in at booking — no fuel surcharge, no driver charge, no 'toll adjustment'. What's on your screen is your final bill.",
    highlight: "100% fixed fare",
    color: "bg-green-50 border-green-200",
    tagColor: "bg-green-100 text-green-700",
    highlightColor: "text-green-600",
  },
  {
    id: 3,
    emoji: "🚗",
    tag: "Clean & safe",
    title: "Every car passes a 20-point check before it reaches you",
    pain: "Worried about getting into a beaten-up, dirty cab?",
    solution:
      "AC cooling, tyre condition, cleanliness, seat comfort — we check it all. If we wouldn't sit in it, we won't send it to you.",
    highlight: "20-point inspection",
    color: "bg-blue-50 border-blue-200",
    tagColor: "bg-blue-100 text-blue-700",
    highlightColor: "text-blue-600",
  },
  {
    id: 4,
    emoji: "📞",
    tag: "Always here",
    title: "A real Hubli person picks up your call — any time",
    pain: "Booked a 3 AM flight but nobody to talk to?",
    solution:
      "We are a local Hubli team, not a call center. Day or night, whether it's an airport drop or a Dandeli trip, we're just one call away.",
    highlight: "24/7 local support",
    color: "bg-purple-50 border-purple-200",
    tagColor: "bg-purple-100 text-purple-700",
    highlightColor: "text-purple-600",
  },
];

export default function OurPromise() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-10 px- bg-gray-50" id="promise">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full mb-4">
          Our Promise
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
          We know what frustrates you.<br />
          <span className="text-yellow-500">Here's how we fix it.</span>
        </h2>
        <p className="mt-4 text-gray-500 text-base">
          Every promise below comes from a real complaint we heard from real customers in Hubli.
        </p>
      </div>

      {/* Promise Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        {promises.map((p) => (
          <div
            key={p.id}
            onClick={() => setActive(active === p.id ? null : p.id)}
            className={`cursor-pointer border rounded-2xl p-6 transition-all duration-300 ${p.color} ${
              active === p.id ? "shadow-lg scale-[1.02]" : "hover:shadow-md"
            }`}
          >
            {/* Top Row */}
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{p.emoji}</span>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${p.tagColor}`}>
                {p.tag}
              </span>
            </div>

            {/* Pain Point */}
            <p className="text-xs text-gray-400 italic mb-1">"{p.pain}"</p>

            {/* Title */}
            <h3 className="text-base font-bold text-gray-800 mb-2 leading-snug">
              {p.title}
            </h3>

            {/* Highlight Badge */}
            <p className={`text-sm font-extrabold mb-3 ${p.highlightColor}`}>
              ✓ {p.highlight}
            </p>

            {/* Expandable solution */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                active === p.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-3">
                {p.solution}
              </p>
            </div>

            <p className="text-xs text-gray-400 mt-3">
              {active === p.id ? "▲ Show less" : "▼ Read more"}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom trust bar */}
      <div className="max-w-4xl mx-auto mt-10 bg-white border border-gray-200 rounded-2xl p-5 flex flex-wrap justify-around gap-4 text-center shadow-sm">
        <div>
          <p className="text-2xl font-extrabold text-gray-900">5,000+</p>
          <p className="text-xs text-gray-500 mt-1">Happy rides in Hubli</p>
        </div>
        <div className="w-px bg-gray-200 hidden sm:block" />
        <div>
          <p className="text-2xl font-extrabold text-gray-900">4.9 ⭐</p>
          <p className="text-xs text-gray-500 mt-1">Average customer rating</p>
        </div>
        <div className="w-px bg-gray-200 hidden sm:block" />
        <div>
          <p className="text-2xl font-extrabold text-gray-900">3 min</p>
          <p className="text-xs text-gray-500 mt-1">Avg. response time</p>
        </div>
        <div className="w-px bg-gray-200 hidden sm:block" />
        <div>
          <p className="text-2xl font-extrabold text-gray-900">24/7</p>
          <p className="text-xs text-gray-500 mt-1">Local support always on</p>
        </div>
      </div>

      {/* Customer Happiness Strip */}
<div className="max-w-4xl mx-auto mt-10 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm" id="happiness">
  
  {/* Top label */}
  <div className="bg-yellow-400 text-yellow-900 text-xs font-bold uppercase tracking-widest text-center py-2">
    📊 What our ride data says
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-100">
    
    <div className="p-5 text-center">
      <p className="text-3xl font-extrabold text-gray-900">78%</p>
      <p className="text-xs text-gray-500 mt-1 leading-snug">customers book us again within 30 days</p>
    </div>

    <div className="p-5 text-center">
      <p className="text-3xl font-extrabold text-gray-900">6 in 10</p>
      <p className="text-xs text-gray-500 mt-1 leading-snug">riders referred us to a friend or family</p>
    </div>

    <div className="p-5 text-center">
      <p className="text-3xl font-extrabold text-gray-900">&lt; 2%</p>
      <p className="text-xs text-gray-500 mt-1 leading-snug">of rides ever receive a complaint</p>
    </div>

    <div className="p-5 text-center">
      <p className="text-3xl font-extrabold text-gray-900">9 / 10</p>
      <p className="text-xs text-gray-500 mt-1 leading-snug">passengers rate their ride 5 stars</p>
    </div>

  </div>

  <p className="text-center text-xs text-gray-400 py-3 border-t border-gray-100">
    Based on 5,000+ rides across Hubli — Dharwad
  </p>
</div>
    </section>
  );
}
