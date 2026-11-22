import villaExterior from "@/assets/villa-exterior.jpg";
import chettinadCourtyard from "@/assets/chettinad-courtyard.jpg";
import modernLiving from "@/assets/modern-living.jpg";
import policeStation from "@/assets/police-station.jpg";
import courtroomSet from "@/assets/courtroom-set.jpg";
import corporateBoardroom from "@/assets/corporate-boardroom.jpg";
import hospitalSet from "@/assets/hospital-set.jpg";
import terraceSkyline from "@/assets/terrace-skyline.jpg";
import makeupSuite from "@/assets/makeup-suite.jpg";
import rusticFarmhouse from "@/assets/rustic-farmhouse.jpg";

export const business = {
  name: "Cinewood Film Studios & Shooting House",
  shortName: "Cinewood Studios",
  owner: "R. Balaji (Location Manager & Production Coordinator)",
  tagline: "Premium Movie Shooting House, Heritage Villa & Multi-Set Studios in Chennai",
  phonePrimary: "9840154321",
  phonePrimaryDisplay: "98401 54321",
  phoneSecondary: "9444467890",
  phoneSecondaryDisplay: "94444 67890",
  email: "cinewoodstudios.chennai@gmail.com",
  addressLines: [
    "Plot No. 18 & 20, Golden Beach Road,",
    "Injambakkam, ECR, Chennai - 600 115.",
  ],
  city: "Chennai",
  state: "Tamil Nadu",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Golden+Beach+Road+Injambakkam+ECR+Chennai+600115",
  stats: {
    filmsShot: "65+",
    uniqueSets: "8+",
    generatorCapacity: "100 KVA",
    parkingCapacity: "50+ Vans",
    totalFootprint: "15,000+ sq.ft.",
  },
} as const;

export const whatsappUrl = `https://wa.me/91${business.phonePrimary}?text=${encodeURIComponent(
  "Hello Cinewood Studios, I would like to enquire about shooting house availability and book a location recce for our upcoming film project.",
)}`;

export const images = {
  villaExterior,
  chettinadCourtyard,
  modernLiving,
  policeStation,
  courtroomSet,
  corporateBoardroom,
  hospitalSet,
  terraceSkyline,
  makeupSuite,
  rusticFarmhouse,
};

export type Service = {
  title: string;
  description: string;
  image: string;
  category: string;
  specs: {
    area: string;
    ceiling: string;
    power: string;
    sound: string;
  };
  suitableFor: string;
};

export const services: Service[] = [
  {
    title: "Grand Chettinad Courtyard Mansion",
    description:
      "4,500 sq.ft. authentic heritage mansion with Burma teak pillars, Athangudi floor tiles, open-to-sky central courtyard, and vintage carved wooden doors. Ideal for family dramas, wedding scenes, and period films.",
    image: chettinadCourtyard,
    category: "Mansion & Courtyard",
    specs: {
      area: "4,500 sq.ft.",
      ceiling: "16 ft clearance",
      power: "3-Phase 63A",
      sound: "Sync-sound treated",
    },
    suitableFor: "Feature Films, Family Sequences, Period Dramas, Wedding Scenes",
  },
  {
    title: "Ultra-Modern Luxury Villa",
    description:
      "Architecturally designed two-storey contemporary villa featuring expansive double-height glass walls, private swimming pool, floating wooden staircase, and open Italian kitchen.",
    image: villaExterior,
    category: "Modern Luxury Villa",
    specs: {
      area: "3,800 sq.ft.",
      ceiling: "14 ft clearance",
      power: "3-Phase 63A",
      sound: "Acoustic insulated",
    },
    suitableFor: "OTT Web Series, Corporate Thrillers, High-End Commercials, Celebrity Shoots",
  },
  {
    title: "Pre-Erected Police Station & Lockup Set",
    description:
      "Permanent, ready-to-shoot police station featuring an Inspector's chamber, iron-bar lockup cells, interrogation room with focused overhead lighting, and vintage case register archives.",
    image: policeStation,
    category: "Police & Court Sets",
    specs: {
      area: "2,200 sq.ft.",
      ceiling: "12 ft clearance",
      power: "32A Single & 3-Phase",
      sound: "Zero external noise",
    },
    suitableFor: "Action Movies, Crime Thrillers, Interrogation Climax, OTT Series",
  },
  {
    title: "Judicial Courtroom & Judge Chamber",
    description:
      "Full-scale courtroom set fitted with teak judge's bench, witness box, advocate stations, legal book racks, and spectator seating. Configurable for civil or criminal trials.",
    image: courtroomSet,
    category: "Police & Court Sets",
    specs: {
      area: "2,500 sq.ft.",
      ceiling: "15 ft clearance",
      power: "3-Phase 63A",
      sound: "Echo-damped acoustic walls",
    },
    suitableFor: "Courtroom Dramas, Climax Arguments, Web Series Episodes",
  },
  {
    title: "Executive Boardroom & CEO Cabin",
    description:
      "Sleek corporate office set with an 18-seater glass conference table, leather ergonomic seating, presentation wall, and panoramic glass-walled managing director cabin.",
    image: corporateBoardroom,
    category: "Interiors & Hall",
    specs: {
      area: "1,800 sq.ft.",
      ceiling: "11 ft clearance",
      power: "32A Single Phase",
      sound: "Fully silent AC interior",
    },
    suitableFor: "Corporate TVCs, Business Drama, Interview Shoots",
  },
  {
    title: "Hospital Ward & Intensive Care (ICU) Set",
    description:
      "Realistic medical set featuring a multi-bed recovery ward with divider curtains, medical gas lines, authentic monitor props, doctor's consultation desk, and sterile corridor.",
    image: hospitalSet,
    category: "Interiors & Hall",
    specs: {
      area: "2,000 sq.ft.",
      ceiling: "11 ft clearance",
      power: "32A Silent Line",
      sound: "Sync-sound compliant",
    },
    suitableFor: "Hospital Dramas, Emergency Sequences, Emotional Family Scenes",
  },
  {
    title: "Scenic Rooftop & Open-Air Skyline Terrace",
    description:
      "Panoramic open-sky terrace with unobstructed horizons, designer pergola, mood lights, and coastal breeze. Ideal for romantic songs, dialogue tracks, and action setups.",
    image: terraceSkyline,
    category: "Terrace & Outdoor",
    specs: {
      area: "3,200 sq.ft.",
      ceiling: "Open Sky",
      power: "Heavy outdoor power drops",
      sound: "Unobstructed audio line",
    },
    suitableFor: "Song Sequences, Climax Confrontations, Sunset & Night Mood Shoots",
  },
  {
    title: "Rustic Village Farmhouse & Verandah",
    description:
      "Traditional red-clay tiled cottage with mud-wash verandas, carved pillars, cattle shed backdrop, open well, and coconut palms for authentic rural sequences.",
    image: rusticFarmhouse,
    category: "Terrace & Outdoor",
    specs: {
      area: "3,000 sq.ft.",
      ceiling: "12 ft tiled slant",
      power: "32A 3-Phase",
      sound: "Quiet garden ambiance",
    },
    suitableFor: "Rural Cinema, Folk Songs, Native Village Backgrounds",
  },
  {
    title: "Star Vanity Suites & Crew Mess Hall",
    description:
      "4 spacious air-conditioned green rooms equipped with professional daylight vanity mirrors, private changing booths, star lounges, and a 100-crew shaded catering dining hall.",
    image: makeupSuite,
    category: "Makeup & Green Room",
    specs: {
      area: "2,400 sq.ft.",
      ceiling: "10 ft AC suites",
      power: "Continuous generator grid",
      sound: "Private dressing area",
    },
    suitableFor: "Lead Actors, Celebrity Wardrobe, Crew Catering, Production Office",
  },
];

export const galleryItems = [
  {
    image: chettinadCourtyard,
    title: "Chettinad Central Courtyard",
    place: "Main Heritage Floor",
    category: "Mansion & Courtyard",
  },
  {
    image: villaExterior,
    title: "Contemporary Villa & Poolside",
    place: "Modern Wing",
    category: "Modern Luxury Villa",
  },
  {
    image: modernLiving,
    title: "Grand Double-Height Living Room",
    place: "Villa Interior",
    category: "Modern Luxury Villa",
  },
  {
    image: policeStation,
    title: "Police Station & Lockup Cell",
    place: "Floor 2 Standing Set",
    category: "Police & Court Sets",
  },
  {
    image: courtroomSet,
    title: "Judicial Courtroom & Witness Box",
    place: "Studio Floor 1",
    category: "Police & Court Sets",
  },
  {
    image: corporateBoardroom,
    title: "Corporate Boardroom & Cabin",
    place: "Commercial Studio Wing",
    category: "Interiors & Hall",
  },
  {
    image: hospitalSet,
    title: "Hospital Emergency & ICU Ward",
    place: "Medical Standing Set",
    category: "Interiors & Hall",
  },
  {
    image: terraceSkyline,
    title: "360-Degree Skyline Rooftop",
    place: "Terrace Level",
    category: "Terrace & Outdoor",
  },
  {
    image: rusticFarmhouse,
    title: "Village Verandah & Coconut Grove",
    place: "Outdoor Backlot",
    category: "Terrace & Outdoor",
  },
  {
    image: makeupSuite,
    title: "Air-Conditioned Vanity Green Rooms",
    place: "Artist Wing",
    category: "Makeup & Green Room",
  },
];
