// Source project images from architect57.com
import srcProject1 from "@/assets/src-project-1.jpg";
import srcProject2 from "@/assets/src-project-2.jpg";
import srcProject3 from "@/assets/src-project-3.jpg";
import srcProject4 from "@/assets/src-project-4.jpg";
import srcProject5 from "@/assets/src-project-5.jpg";
import srcProject6 from "@/assets/src-project-6.jpg";
import srcProject7 from "@/assets/src-project-7.jpg";
import srcProject8 from "@/assets/src-project-8.jpg";
import srcProject9 from "@/assets/src-project-9.jpg";
import srcProject10 from "@/assets/src-project-10.jpg";
import srcProject11 from "@/assets/src-project-11.jpg";
import srcProject12 from "@/assets/src-project-12.jpg";

export interface FeaturedProject {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  heroImage: string;
  images: string[];
  details: { label: string; value: string }[];
}

export interface CollectionItem {
  image: string;
  title: string;
  location?: string;
}

export interface Collection {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  items: CollectionItem[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "glass-pavilion",
    title: "Glass Pavilion",
    category: "Commercial",
    location: "Richmond, BC",
    year: "2023",
    description:
      "A striking commercial pavilion defined by its transparent glass envelope, inviting natural light deep into the workspace. The design balances openness with thermal performance through a high-efficiency curtain wall system and passive ventilation strategy.",
    heroImage: srcProject1,
    images: [srcProject1, srcProject2, srcProject3],
    details: [
      { label: "Typology", value: "Commercial Office" },
      { label: "Area", value: "18,400 sq ft" },
      { label: "Status", value: "Completed" },
      { label: "Services", value: "Integrated Design, BIM, Code Consultation" },
    ],
  },
  {
    slug: "harbour-tower",
    title: "Harbour Tower",
    category: "High-Rise Residential",
    location: "Vancouver, BC",
    year: "2022",
    description:
      "A 32-storey residential tower featuring floor-to-ceiling glazing, panoramic city and harbour views, and a refined material palette of concrete, glass, and warm timber accents. The design prioritizes vertical community with shared amenity spaces on every eighth floor.",
    heroImage: srcProject4,
    images: [srcProject4, srcProject5, srcProject6],
    details: [
      { label: "Typology", value: "High-Rise Residential" },
      { label: "Area", value: "285,000 sq ft" },
      { label: "Status", value: "Completed" },
      { label: "Services", value: "IPD, BIM, Project Management" },
    ],
  },
  {
    slug: "union-square",
    title: "Union Square",
    category: "Mixed-Use Development",
    location: "Richmond, BC",
    year: "2024",
    description:
      "A mixed-use development integrating ground-floor retail with six storeys of residential living above. The project features a landscaped interior courtyard connecting commercial and residential communities through a shared, pedestrian-friendly environment.",
    heroImage: srcProject7,
    images: [srcProject7, srcProject8, srcProject9],
    details: [
      { label: "Typology", value: "Mixed-Use" },
      { label: "Area", value: "142,000 sq ft" },
      { label: "Status", value: "In Progress" },
      { label: "Services", value: "Integrated Design, Code Consultation, Project Management" },
    ],
  },
];

export const collections: Collection[] = [
  {
    slug: "single-family",
    title: "Single Family",
    description:
      "A curated selection of custom single-family residences designed with contemporary sensibility and sensitivity to site context.",
    coverImage: srcProject10,
    items: [
      { image: srcProject10, title: "Cedar Ridge Residence", location: "Richmond, BC" },
      { image: srcProject11, title: "Stone House", location: "West Vancouver, BC" },
      { image: srcProject12, title: "Desert Court Home", location: "Richmond, BC" },
    ],
  },
  {
    slug: "daycare-education",
    title: "Daycare & Education",
    description:
      "Purpose-built learning environments that nurture development through thoughtful spatial design, natural light, and safe, welcoming materials.",
    coverImage: collDc1,
    items: [
      { image: collDc1, title: "Sunrise Daycare Centre", location: "Richmond, BC" },
      { image: collDc2, title: "Maple Learning Commons", location: "Burnaby, BC" },
      { image: collDc3, title: "Cedar Creek Early Learning", location: "Richmond, BC" },
    ],
  },
  {
    slug: "multiplex",
    title: "Multiplex",
    description:
      "Contemporary multiplex and townhouse developments that contribute to urban density while maintaining livability, privacy, and architectural character.",
    coverImage: collMp1,
    items: [
      { image: collMp1, title: "Granville Terrace", location: "Vancouver, BC" },
      { image: collMp2, title: "Cambie Row", location: "Vancouver, BC" },
      { image: collMp3, title: "Oak Street Duplex", location: "Richmond, BC" },
    ],
  },
];
