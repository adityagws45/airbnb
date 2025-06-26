const sampleListings = [
  {
    title: "Beachfront Villa in Alibaug",
    description:
      "Wake up to the sound of waves at this stunning beachfront villa in Alibaug. Perfect for weekend getaways with family and friends. Features a private beach access, spacious rooms, and traditional Konkani architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Alibaug, Raigad",
    country: "Maharashtra",
  },
  {
    title: "Traditional Konkani Homestay",
    description:
      "Experience authentic Konkani culture in this traditional homestay. Enjoy home-cooked meals, learn about local customs, and explore nearby fishing villages. A perfect cultural immersion experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Ratnagiri",
    country: "Maharashtra",
  },
  {
    title: "Luxury Beach Resort in Kashid",
    description:
      "Indulge in luxury at this premium beach resort in Kashid. Features infinity pool, spa services, water sports, and direct beach access. Perfect for romantic getaways and special celebrations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 8500,
    location: "Kashid, Raigad",
    country: "Maharashtra",
  },
  {
    title: "Eco-Friendly Beach Hut in Tarkarli",
    description:
      "Stay in harmony with nature at this eco-friendly beach hut in Tarkarli. Made from sustainable materials, solar-powered, and just steps away from pristine white sand beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Tarkarli, Sindhudurg",
    country: "Maharashtra",
  },
  {
    title: "Heritage Bungalow in Ganpatipule",
    description:
      "Step back in time at this colonial-era heritage bungalow in Ganpatipule. Rich history, vintage architecture, and close to the famous Ganpati temple. A unique blend of spirituality and heritage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Ganpatipule, Ratnagiri",
    country: "Maharashtra",
  },
  {
    title: "Fisherman's Cottage in Harnai",
    description:
      "Experience the life of a coastal fisherman in this authentic cottage in Harnai. Watch fishing boats return at dawn, enjoy fresh seafood, and learn traditional fishing techniques.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Harnai, Ratnagiri",
    country: "Maharashtra",
  },
  {
    title: "Cliff-top Villa in Murud",
    description:
      "Perched on dramatic cliffs overlooking the Arabian Sea, this villa offers breathtaking sunset views. Modern amenities with traditional Konkani design elements. Perfect for photography enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 6200,
    location: "Murud, Raigad",
    country: "Maharashtra",
  },
  {
    title: "Backwater Homestay in Vengurla",
    description:
      "Discover the serene backwaters of Vengurla in this peaceful homestay. Surrounded by coconut groves, with boat rides available through mangrove forests. A hidden gem of the Konkan coast.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Vengurla, Sindhudurg",
    country: "Maharashtra",
  },
  {
    title: "Beach Camping Experience in Diveagar",
    description:
      "Sleep under the stars with this unique beach camping experience in Diveagar. Includes tents, bonfire setup, barbecue facilities, and guided nature walks. Adventure meets comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Diveagar, Raigad",
    country: "Maharashtra",
  },
  {
    title: "Mango Orchard Stay in Devgad",
    description:
      "Stay amidst famous Alphonso mango orchards in Devgad. Seasonal fruit picking, traditional farming experiences, and authentic Konkani cuisine. Best visited during mango season (March-May).",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Devgad, Sindhudurg",
    country: "Maharashtra",
  },
  {
    title: "Lighthouse Keeper's House in Dapoli",
    description:
      "Unique stay in a converted lighthouse keeper's house in Dapoli. Panoramic ocean views, historical significance, and proximity to multiple beaches. A truly one-of-a-kind experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Dapoli, Ratnagiri",
    country: "Maharashtra",
  },
  {
    title: "Spice Plantation Cottage in Sawantwadi",
    description:
      "Immerse yourself in aromatic spice plantations at this cottage in Sawantwadi. Learn about spice cultivation, enjoy spice-infused meals, and explore the famous Sawantwadi wooden toys market.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Sawantwadi, Sindhudurg",
    country: "Maharashtra",
  },
  {
    title: "Fort View Homestay in Sindhudurg",
    description:
      "Stay with views of the historic Sindhudurg Fort built by Chhatrapati Shivaji. Rich in Maratha history, with guided fort tours and traditional Malvani cuisine. History buffs' paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Malvan, Sindhudurg",
    country: "Maharashtra",
  },
  {
    title: "Coconut Grove Villa in Rajapur",
    description:
      "Relax in this villa surrounded by swaying coconut palms in Rajapur. Traditional architecture, modern amenities, and easy access to pristine beaches. Perfect for digital detox retreats.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Rajapur, Ratnagiri",
    country: "Maharashtra",
  },
  {
    title: "Hilltop Retreat in Mahabaleshwar",
    description:
      "Escape to the cool hills of Mahabaleshwar in this charming hilltop retreat. Strawberry farms, scenic viewpoints, and pleasant weather year-round. A refreshing break from coastal heat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Mahabaleshwar, Satara",
    country: "Maharashtra",
  },
  {
    title: "Beachside Shack in Velas",
    description:
      "Simple yet comfortable beachside shack in Velas, famous for turtle nesting. Witness Olive Ridley turtles during nesting season, enjoy fresh seafood, and experience untouched natural beauty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Velas, Ratnagiri",
    country: "Maharashtra",
  },
  {
    title: "Riverside Cottage in Chiplun",
    description:
      "Peaceful riverside cottage in Chiplun along the Vashishti River. River rafting, fishing, and trekking opportunities. Gateway to the Western Ghats with lush green surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Chiplun, Ratnagiri",
    country: "Maharashtra",
  },
  {
    title: "Beach Resort in Shrivardhan",
    description:
      "Modern beach resort in Shrivardhan with all contemporary amenities. Water sports, beach volleyball, cultural programs, and proximity to Harihareshwar temple. Perfect for family vacations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Shrivardhan, Raigad",
    country: "Maharashtra",
  },
  {
    title: "Traditional Wada in Khed",
    description:
      "Experience royal Maratha architecture in this restored traditional wada in Khed. Intricate woodwork, courtyards, and historical significance. Cultural performances and heritage walks included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4600,
    location: "Khed, Ratnagiri",
    country: "Maharashtra",
  },
  {
    title: "Floating Houseboat in Karli Backwaters",
    description:
      "Unique floating houseboat experience in the serene backwaters near Karli. Fully equipped with modern amenities, offering a different perspective of the Konkan coast. Truly unforgettable.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 7500,
    location: "Karli, Raigad",
    country: "Maharashtra",
  }
];

module.exports = { data: sampleListings };