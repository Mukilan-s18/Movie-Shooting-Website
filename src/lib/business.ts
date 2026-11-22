export const business = {
  name: "Cinewood Film Shooting Villa",
  shortName: "Cinewood Villa",
  owner: "R. Balaji (Location Manager)",
  tagline: "Exclusive Private Bungalow & Shooting Villa in Chennai for Feature Films, OTT & Ad Shoots",
  phonePrimary: "9840154321",
  phonePrimaryDisplay: "98401 54321",
  phoneSecondary: "9444467890",
  phoneSecondaryDisplay: "94444 67890",
  email: "cinewoodvilla.chennai@gmail.com",
  addressLines: [
    "Plot No. 18, Golden Beach Road,",
    "Injambakkam, ECR, Chennai - 600 115.",
  ],
  city: "Chennai",
  state: "Tamil Nadu",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Golden+Beach+Road+Injambakkam+ECR+Chennai+600115",
  videoTour: {
    // Local video placed at public/video/tour.mp4
    localSrc: "/video/tour.mp4",
    // Optional external YouTube/Vimeo embed URL
    youtubeUrl: "",
    duration: "Property Walkthrough Video",
  },
  propertySpecs: {
    plotArea: "7,500 sq.ft.",
    builtUpArea: "5,800 sq.ft.",
    floors: "Ground + 1st Floor + Open Terrace",
    powerBackup: "100 KVA Silent Genset",
    parking: "15+ Production Vans & Cars",
    sound: "Sync-Sound Acoustic Insulated",
    acUnits: "100% Air-Conditioned Interiors",
  },
} as const;

export const whatsappUrl = `https://wa.me/91${business.phonePrimary}?text=${encodeURIComponent(
  "Hello Cinewood Villa, I would like to enquire about shooting availability and book a location recce for our upcoming film project.",
)}`;

export type PropertySpace = {
  id: string;
  title: string;
  area: string;
  ceiling: string;
  description: string;
  image: string;
  suitableScenes: string;
  features: string[];
};

export const propertySpaces: PropertySpace[] = [
  {
    id: "exterior-facade",
    title: "Exterior Facade & Gated Compound",
    area: "2,500 sq.ft. Frontage",
    ceiling: "Open Sky",
    description:
      "Striking private villa facade with distinct architectural design, private compound gate, driveway for car arrival shots, and spacious clearance for camera cranes, jib arms, and heavy lighting setups.",
    image: "/property/exterior-facade.jpeg",
    suitableScenes: "Hero/Heroine arrival shots, exterior confrontations, compound gate dialogues, luxury estate establishers",
    features: [
      "Wide gated driveway accommodating luxury cars and vans",
      "Direct outdoor 3-phase power drop sockets for HMIs",
      "Private compound walls ensuring complete shoot privacy",
      "Clear exterior sightlines with zero visual distractions",
    ],
  },
  {
    id: "living-hall",
    title: "Grand Living Hall & Lounge",
    area: "1,600 sq.ft.",
    ceiling: "14 ft clearance",
    description:
      "Spacious main hall with clean tiled flooring, wide wall angles, multiple entry/exit points for actor blocking, and expansive space for tracks, dolly movements, and large indoor crews.",
    image: "/property/living-hall.jpeg",
    suitableScenes: "Family conversations, rich home interior dialogues, party sequences, intense confrontation scenes",
    features: [
      "High ceiling clearance suitable for light stands and boom mics",
      "Multiple camera turnaround angles and wide doorways",
      "Silent inverter AC units for sync-sound recording",
      "Clean power distribution sockets across all corners",
    ],
  },
  {
    id: "dining-hall",
    title: "Dining Hall & Gathering Area",
    area: "600 sq.ft.",
    ceiling: "12 ft clearance",
    description:
      "Dedicated dining and gathering hall connecting the living room and kitchen. Perfect for family meal dialogues, formal dinner scenes, or company conference table setups.",
    image: "/property/dining-hall.jpeg",
    suitableScenes: "Breakfast conversations, family dining conflicts, serious discussions, party catering setups",
    features: [
      "Accommodates 8 to 12-seater dining table configurations",
      "Wide 360-degree camera clearance around the table",
      "Direct access to both living room and kitchen for continuous takes",
      "Soft ambient overhead lighting setup",
    ],
  },
  {
    id: "kitchen",
    title: "Contemporary Kitchen Setup",
    area: "450 sq.ft.",
    ceiling: "11 ft clearance",
    description:
      "Functional modern kitchen featuring clean countertops, storage cabinets, sink area, and wide standing space for camera operators, lights, and actors.",
    image: "/property/kitchen.jpeg",
    suitableScenes: "Cooking scenes, mother-child emotional talks, casual breakfast conversations, domestic drama",
    features: [
      "Functional kitchen slab with clean backdrop tiles",
      "Spacious enough for two-camera setups and sound boom",
      "Dedicated ventilation and power outlets",
      "Natural daylight window for warm fill light",
    ],
  },
  {
    id: "master-bedroom",
    title: "Master Bedroom Suite & Balcony",
    area: "650 sq.ft.",
    ceiling: "11 ft clearance",
    description:
      "Spacious master bedroom with modern king-size wooden bed, warm ambient cove lighting, wooden paneling, private dressing area, and wide sliding doors opening to an airy private balcony.",
    image: "/property/master-bedroom.jpg",
    suitableScenes: "Romantic scenes, bedroom conversations, song tracks, emotional moments",
    features: [
      "Attached private balcony overlooking green lawn",
      "Natural morning & evening diffused light",
      "Attached luxury bathroom with modern bathtub",
      "Sound-damped doors and windows",
    ],
  },
  {
    id: "terrace",
    title: "Panoramic Skyline Rooftop Terrace",
    area: "2,000 sq.ft.",
    ceiling: "Open Sky",
    description:
      "Unobstructed open-air terrace with 360-degree skyline views, wooden pergola, coastal breeze, and perimeter parapet walls. Unbeatable for sunset silhouettes and dramatic climax sequences.",
    image: "/property/terrace.jpg",
    suitableScenes: "Romantic song sequences, sunset conversations, night mood tracks, climax action",
    features: [
      "Unobstructed 360-degree horizon with no tall neighboring buildings",
      "Heavy power lines routed up for night balloon lights & skypanels",
      "Pergola seating with warm outdoor string lights",
      "Safe high parapet wall for camera crane positioning",
    ],
  },
  {
    id: "makeup-room",
    title: "Air-Conditioned Star Makeup & Green Room",
    area: "350 sq.ft.",
    ceiling: "10 ft clearance",
    description:
      "Dedicated air-conditioned artist suite equipped with professional 5500K daylight-balanced vanity mirrors, private changing booth, comfortable lounge seating, wardrobe racks, and attached private washroom.",
    image: "/property/makeup-room.jpg",
    suitableScenes: "Lead artist preparation, costume changes, production coordinator base",
    features: [
      "Twin 5500K high-CRI illuminated vanity mirrors",
      "Heavy-duty wardrobe racks & clothes steamer",
      "Private attached clean restroom and shower",
      "Ultra-quiet AC with continuous generator power backup",
    ],
  },
];

export const propertyGallery = [
  {
    id: "g-facade",
    title: "Exterior Facade & Gated Compound",
    place: "Front Entrance",
    category: "Exterior & Lawn",
    image: "/property/exterior-facade.jpeg",
  },
  {
    id: "g-living",
    title: "Main Living Hall & Lounge",
    place: "Ground Floor",
    category: "Living Hall",
    image: "/property/living-hall.jpeg",
  },
  {
    id: "g-dining",
    title: "Dining Hall & Gathering Space",
    place: "Ground Floor",
    category: "Kitchen & Dining",
    image: "/property/dining-hall.jpeg",
  },
  {
    id: "g-kitchen",
    title: "Contemporary Kitchen Setup",
    place: "Ground Floor",
    category: "Kitchen & Dining",
    image: "/property/kitchen.jpeg",
  },
  {
    id: "g-bed",
    title: "Master Suite & Private Balcony",
    place: "First Floor",
    category: "Bedrooms",
    image: "/property/master-bedroom.jpg",
  },
  {
    id: "g-lawn",
    title: "Landscaped Lawn & Car Porch",
    place: "Front Yard",
    category: "Exterior & Lawn",
    image: "/property/lawn-garden.jpg",
  },
  {
    id: "g-terrace",
    title: "Panoramic Skyline Rooftop",
    place: "Terrace Level",
    category: "Terrace & Outdoor",
    image: "/property/terrace.jpg",
  },
  {
    id: "g-makeup",
    title: "AC Artist Green Room & Vanity Mirrors",
    place: "First Floor",
    category: "Makeup & Green Room",
    image: "/property/makeup-room.jpg",
  },
];
