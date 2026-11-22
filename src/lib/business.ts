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

export const movieReferences = [
  {
    id: "m-parimala-banner",
    title: "Parimala & Co",
    place: "Popular OTT Web Series",
    category: "Movies & Series",
    image: "/references/parimala.jpg",
    note: "Featured On-Screen House",
  },
  {
    id: "m-parimala-still",
    title: "Parimala & Co Scene Still",
    place: "Web Series Shoot",
    category: "Movies & Series",
    image: "/references/parimala-and-co.jpg",
    note: "House Interior Sequence",
  },
  {
    id: "m-scene-hd",
    title: "Feature Film Scene",
    place: "Tamil Feature Production",
    category: "Movies & Series",
    image: "/references/1780038231503-i.jpg",
    note: "Living Room Scene Setup",
  },
  {
    id: "m-scene-still-2",
    title: "Movie Scene Capture",
    place: "Cinema Shoot Reference",
    category: "Movies & Series",
    image: "/references/120755032.jpg",
    note: "Interior Shooting Still",
  },
  {
    id: "m-still-2",
    title: "Film Production Still",
    place: "On-Location Shoot",
    category: "Movies & Series",
    image: "/references/images-2.jpg",
    note: "Domestic Scene Setting",
  },
  {
    id: "m-poster-3",
    title: "Film Production Reference",
    place: "Tamil Cinema Project",
    category: "Movies & Series",
    image: "/references/images-3.jpg",
    note: "House Sequence",
  },
  {
    id: "m-poster-4",
    title: "Film Scene Reference",
    place: "Feature Film Production",
    category: "Movies & Series",
    image: "/references/images-4.jpg",
    note: "Character Sequence Setup",
  },
  {
    id: "m-poster-5",
    title: "Production Reference Still",
    place: "Movie & Series Setup",
    category: "Movies & Series",
    image: "/references/images-5.jpg",
    note: "Shot on Location",
  },
  {
    id: "m-poster-1",
    title: "Screen Appearance Reference",
    place: "Web Series & Film Shoot",
    category: "Movies & Series",
    image: "/references/images.jpg",
    note: "4/5 Varghese Ave House",
  },
];

export const allGalleryMedia = [...propertyGallery, ...movieReferences];
