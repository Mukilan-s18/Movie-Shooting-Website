export const business = {
  name: "Movie Shooting House",
  shortName: "Shooting House",
  owner: "Location Manager",
  tagline: "Private House & Property for Movie, TV Serial, Web Series & Commercial Shoots",
  phonePrimary: "9840154321",
  phonePrimaryDisplay: "98401 54321",
  phoneSecondary: "9444467890",
  phoneSecondaryDisplay: "94444 67890",
  email: "shootinghouse.chennai@gmail.com",
  addressLines: [
    "Chennai, Tamil Nadu",
  ],
  city: "Chennai",
  state: "Tamil Nadu",
  mapsUrl:
    "https://www.google.com/maps",
  videoTour: {
    localSrc: "/video/tour.mp4",
    youtubeUrl: "",
    duration: "Property Walkthrough Video",
  },
} as const;

export const whatsappUrl = `https://wa.me/91${business.phonePrimary}?text=${encodeURIComponent(
  "Hello, I would like to enquire about movie shooting availability and location recce for this property.",
)}`;

export type PropertySpace = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const propertySpaces: PropertySpace[] = [
  {
    id: "exterior-facade",
    title: "Exterior Facade",
    description: "Front exterior view of the house and entrance gate, suitable for arrival shots and outdoor sequences.",
    image: "/property/exterior-facade.jpeg",
  },
  {
    id: "living-hall",
    title: "Living Hall",
    description: "Spacious interior living hall with tiled flooring, ample space for camera setup, lighting, and cast movements.",
    image: "/property/living-hall.jpeg",
  },
  {
    id: "dining-hall",
    title: "Dining Hall",
    description: "Dedicated dining space connecting the living and kitchen areas, ideal for family and conversational scenes.",
    image: "/property/dining-hall.jpeg",
  },
  {
    id: "kitchen",
    title: "Kitchen",
    description: "Complete kitchen area with cooking counters, storage cupboards, and natural lighting.",
    image: "/property/kitchen.jpeg",
  },
];

export const propertyGallery = [
  {
    id: "g-facade",
    title: "Exterior Facade",
    place: "Front Entrance",
    category: "Exterior",
    image: "/property/exterior-facade.jpeg",
  },
  {
    id: "g-living",
    title: "Living Hall",
    place: "Ground Floor",
    category: "Living Hall",
    image: "/property/living-hall.jpeg",
  },
  {
    id: "g-dining",
    title: "Dining Hall",
    place: "Ground Floor",
    category: "Dining Hall",
    image: "/property/dining-hall.jpeg",
  },
  {
    id: "g-kitchen",
    title: "Kitchen",
    place: "Ground Floor",
    category: "Kitchen",
    image: "/property/kitchen.jpeg",
  },
];
