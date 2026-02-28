export const toCardProps = (item) => ({
  image:       item.image                          || null,
  title:       item.title  || item.name,
  subtitle:    item.type                           || null,
  meta:        item.distance ? `${item.distance} km away` : null,
  badge:       item.priceType || (item.price ? `₹${item.price}/km` : null) || item.seats ? `${item.seats} seats` : null,
  description: item.description                    || null,
  whatsapp:    item.distance
    ? `Hi, I need a taxi. I'm ${item.distance} km away from ${item.name}. Can you pick me up?`
    : item.priceType
    ? `Hello! I'd like to enquire about ${item.title} (${item.priceType}). ${item.description}`
    : `Hello! I'd like to book the ${item.name} (${item.type}). Price: ₹${item.price}/km`,
});