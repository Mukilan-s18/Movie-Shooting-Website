export const business = {
  name: "Movie Shooting House",
  shortName: "Shooting House",
  owner: "Location Coordinator",
  tagline: "2-Floor Independent House with Empty Big Entrance · 2 BHK Each Floor · Suitable for Middle Class to Rich House Setups",
  phonePrimary: "7010833853",
  phonePrimaryDisplay: "70108 33853",
  phoneSecondary: "883504143",
  phoneSecondaryDisplay: "883504143",
  email: "Pranav280806@gmail.com",
  addressLines: [
    "4/5 Varghese Avenue, Ashok Nagar,",
    "Vadapalani, Chennai.",
  ],
  city: "Chennai",
  area: "Ashok Nagar / Vadapalani",
  state: "Tamil Nadu",
  mapsUrl:
    "https://www.google.com/maps?q=13.04668865005922,80.21520652988471",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!4v1795364848659!6m8!1m7!1saPt1k-cXkk-VRvGfh2dYSQ!2m2!1d13.04668865005922!2d80.21520652988471!3f4.329979762354583!4f-1.283103089948952!5f0.7820865974627469",
  videoTour: {
    localSrc: "/video/tour.mp4",
    youtubeUrl: "https://youtu.be/SVpk9h9H6_Y?si=DZF6P2_xCWwfdxNO",
    youtubeEmbedUrl: "https://www.youtube.com/embed/SVpk9h9H6_Y?rel=0&modestbranding=1",
    duration: "Property Walkthrough Video",
  },
  keyHighlights: {
    floors: "2 Floors (Ground + 1st Floor)",
    layout: "2 BHK on Each Floor",
    entrance: "Empty Big Entrance Area",
    suitability: "Middle Class to Rich House Setups",
    location: "Ashok Nagar, Vadapalani (Chennai Cinema Hub)",
  },
} as const;

export const whatsappUrl = `https://wa.me/917010833853?text=${encodeURIComponent(
  "Hello, I would like to enquire about shooting availability and recce for the movie shooting house at 4/5 Varghese Avenue, Ashok Nagar, Vadapalani, Chennai.",
)}`;

export type PropertySpace = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
};

export const propertySpaces: PropertySpace[] = [
  {
    id: "exterior-facade",
    title: "Empty Big Entrance & Facade",
    subtitle: "Spacious Front Entrance",
    description: "Wide empty entrance area providing plenty of clearance for camera positioning, equipment loading, vehicle arrival shots, and exterior scenes.",
    image: "/property/exterior-facade.jpeg",
  },
  {
    id: "living-hall",
    title: "Living Hall",
    subtitle: "Adaptable for Middle Class to Rich Setups",
    description: "Spacious hall on the 2 BHK floor layout. Easily dressable to represent authentic middle-class family homes or upscale rich household interiors.",
    image: "/property/living-hall.jpeg",
  },
  {
    id: "dining-hall",
    title: "Dining Hall",
    subtitle: "Connected Gathering Space",
    description: "Dedicated dining area connecting the hall and kitchen, ideal for conversation scenes, family dining moments, and casual dialogue sequences.",
    image: "/property/dining-hall.jpeg",
  },
  {
    id: "kitchen",
    title: "Kitchen",
    subtitle: "Complete Kitchen Setup",
    description: "Functional kitchen space with cooking countertops, storage cabinets, and natural window lighting for authentic domestic and cooking scenes.",
    image: "/property/kitchen.jpeg",
  },
];

export const propertyGallery = [
  {
    id: "g-facade",
    title: "Empty Big Entrance & Exterior",
    place: "Front Entrance",
    category: "Entrance",
    image: "/property/exterior-facade.jpeg",
  },
  {
    id: "g-living",
    title: "Living Hall",
    place: "2 BHK Floor Layout",
    category: "Living Hall",
    image: "/property/living-hall.jpeg",
  },
  {
    id: "g-dining",
    title: "Dining Hall",
    place: "Dining Space",
    category: "Dining Hall",
    image: "/property/dining-hall.jpeg",
  },
  {
    id: "g-kitchen",
    title: "Kitchen Area",
    place: "Kitchen",
    category: "Kitchen",
    image: "/property/kitchen.jpeg",
  },
];
