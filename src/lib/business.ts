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
    // Or paste a YouTube / Vimeo embed URL here (e.g. "https://www.youtube.com/embed/dQw4w9WgXcQ")
    youtubeUrl: "",
    duration: "3:45 mins Walkthrough",
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
    id: "living-hall",
    title: "Grand Double-Height Living Hall",
    area: "1,600 sq.ft.",
    ceiling: "16 ft clearance",
    description:
      "Expansive central hall featuring 16-foot high ceilings, designer chandelier, floating wooden staircase, polished marble flooring, and floor-to-ceiling glass walls providing rich natural fill light.",
    image: "/property/living-hall.jpg",
    suitableScenes: "Family drama, rich protagonist home, confrontation scenes, party sequences",
    features: [
      "16 ft high ceiling for overhead light grids",
      "Large double doors for dolly tracks & jibs",
      "Silent inverter AC units for sync-sound recording",
      "Multiple 32A power drop sockets",
    ],
  },
  {
    id: "master-bedroom",
    title: "Master Bedroom Suite & Balcony",
    area: "650 sq.ft.",
    ceiling: "11 ft clearance",
    description:
      "Spacious master bedroom with modern king-size wooden bed, warm ambient cove lighting, wooden paneling, private dressing closet, and wide sliding doors opening to an airy private balcony.",
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
    id: "kitchen-dining",
    title: "Open Island Kitchen & Dining Space",
    area: "550 sq.ft.",
    ceiling: "11 ft clearance",
    description:
      "Contemporary open-plan kitchen with granite central island, designer bar stools, chimney, modern cabinetry, and an adjoining 8-seater wooden dining table setup.",
    image: "/property/kitchen-dining.jpg",
    suitableScenes: "Breakfast conversations, mother-child dialogues, cooking scenes, casual arguments",
    features: [
      "Functional cooking island with clean countertops",
      "Wide camera turnaround space around the dining table",
      "Soft down-lighting with dimmer controls",
      "Pantry storage area for props",
    ],
  },
  {
    id: "lawn-garden",
    title: "Lawn, Verandah & Front Porch",
    area: "2,500 sq.ft.",
    ceiling: "Open Sky",
    description:
      "Beautifully manicured lush green lawn bordered by tropical palms, stone walkways, wide covered car porch for hero/heroine vehicle arrival shots, and a relaxed sitting verandah.",
    image: "/property/lawn-garden.jpg",
    suitableScenes: "Car arrival shots, walking conversations, garden fights, outdoor party setups",
    features: [
      "Wide porch accommodating luxury cars for drive-in shots",
      "Direct power drops for outdoor HMI daylight fixtures",
      "Privacy compound wall preventing bystander interference",
      "Clean stone paved walkways for track & dolly",
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
    id: "g-hero",
    title: "Villa Front View & Private Compound",
    place: "Exterior Facade",
    category: "Exterior & Lawn",
    image: "/property/hero.jpg",
  },
  {
    id: "g-living",
    title: "Double-Height Living Room",
    place: "Ground Floor",
    category: "Living Hall",
    image: "/property/living-hall.jpg",
  },
  {
    id: "g-bed",
    title: "Master Suite & Private Balcony",
    place: "First Floor",
    category: "Bedrooms",
    image: "/property/master-bedroom.jpg",
  },
  {
    id: "g-kitchen",
    title: "Modern Island Kitchen & Dining",
    place: "Ground Floor",
    category: "Kitchen & Dining",
    image: "/property/kitchen-dining.jpg",
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
