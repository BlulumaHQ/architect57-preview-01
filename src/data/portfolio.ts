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

// Real uploaded project images
import austinHighRise01 from "@/assets/austin_high-rise-01.jpg";
import austinHighRise02 from "@/assets/austin_high-rise-02.jpg";
import bridgeportOffice01 from "@/assets/bridgeport_office_building-01.jpg";
import bridgeportOffice02 from "@/assets/bridgeport_office_building-02.jpg";
import bridgeportOffice03 from "@/assets/bridgeport_office_building-03.jpg";
import fletcherTownhouses01 from "@/assets/fletcher_townhouses-01.jpg";
import wellingtonMixUse01 from "@/assets/wellington_mix-use-01.jpg";
import fiftyFourthAveCondo01 from "@/assets/54th_ave_condo-01.jpg";
import fiftyFourthAveCondo02 from "@/assets/54th_ave_condo-02.jpg";
import fiftyFourthAveCondo03 from "@/assets/54th_ave_condo-03.jpg";

// New batch uploaded project images
import collingwood01 from "@/assets/collingwood-01.webp";
import fletcherTownhouses01webp from "@/assets/fletcher_townhouses-01.webp";
import royalOak01 from "@/assets/royal-oak-01.webp";
import west3901 from "@/assets/west-39-01.webp";
import seavale01 from "@/assets/seavale-01.webp";
import wellingtonMixUse01webp from "@/assets/wellington_mix-use-01.webp";
import fiftyFourthAveCondo01webp from "@/assets/54th_ave_condo-01.webp";
import zone5UnionBay01 from "@/assets/zone_5_union_bay_estate-01.webp";
import newUniversityHospital01 from "@/assets/new_university_hospital-01.webp";
import dubaiHouseOfFuture01 from "@/assets/dubai_house_of_the_future-01.webp";

// Batch 3 uploaded project images
import vanguardFitness01 from "@/assets/vanguard_fitness-01.webp";
import aceEsports01 from "@/assets/ace_e-sports-01.webp";
import atomicFitness01 from "@/assets/atomic_fitness-01.webp";
import katalinCareHomes01 from "@/assets/katalin_care_homes-01.webp";
import mariposaGardensRetirement01 from "@/assets/mariposa_gardens_retirement-01.webp";
import morganPlay01 from "@/assets/morgan_play-01.webp";
import okanaganChateauRetirement01 from "@/assets/okanagan_chateau_retirement-01.webp";
import siennaRideauRetirement01 from "@/assets/sienna_rideau_retirement-01.webp";

// Batch 4 uploaded project images
import chenResidence01 from "@/assets/chen-residence-01.webp";
import hanResidence01 from "@/assets/han-residence-01.webp";
import severnResidence01 from "@/assets/severn-residence-01.webp";
import xuResidence01 from "@/assets/xu-residence-01.webp";
import no6Residence01 from "@/assets/no6-residence-01.webp";
import vinsonCreekResidence01 from "@/assets/vinson-creek-residence-01.webp";
import wuResidence01 from "@/assets/wu-residence-01.webp";
import cartierResidence01 from "@/assets/cartier-residence-01.webp";
import laurelResidence01 from "@/assets/laurel-residence-01.webp";
import treasureCoveCasino01 from "@/assets/treasure_cove_casino-01.webp";

// Batch 5 uploaded project images
import luResidence01 from "@/assets/lu-residence-01.webp";
import poLamTemple01 from "@/assets/po_lam_temple-01.webp";
import goldBuddhaMonastery01 from "@/assets/gold_buddha_monastery-01.webp";
import iglesiaNiCristoLocale01 from "@/assets/iglesia_ni_cristo_locale-01.webp";
import lutheranCommunityChurch01 from "@/assets/lutheran_community_church-01.webp";
import ontarioStorageWarehouse01 from "@/assets/ontario_storage_warehouse-01.webp";
import rayacomPremiumPrint01 from "@/assets/rayacom_premium_print-01.webp";
import rayacomSuperPrintFactory01 from "@/assets/rayacom_super_print_factory-01.webp";
import sunwinsSurgicalMask01 from "@/assets/sunwins_surgical_mask-01.webp";
import trouwFrankieFeedMill01 from "@/assets/trouw_frankie_feed_mill-01.webp";

export type ProjectCategory =
  | "All"
  | "Residential"
  | "Multi-Unit Housing"
  | "Commercial & Industrial"
  | "Master Planning";

export const projectCategories: ProjectCategory[] = [
  "All",
  "Residential",
  "Multi-Unit Housing",
  "Commercial & Industrial",
  "Master Planning",
];

export interface FeaturedProject {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  description: string;
  heroImage: string;
  images: string[];
  details: { label: string; value: string }[];
}

export interface CollectionItem {
  image: string;
  title: string;
  location?: string;
  meta?: string;
}

export interface Collection {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  coverImage: string;
  items: CollectionItem[];
}

export interface HomepageProject {
  title: string;
  category: string;
  image: string;
  link: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "chen-residence",
    title: "Chen Residence",
    category: "Residential",
    location: "West Vancouver, BC",
    description:
      "A distinguished custom residence set against the dramatic topography of West Vancouver. The design leverages natural grade changes to create layered living spaces with expansive views toward the ocean and mountains. Recognized as a finalist for the CHBA National Awards for Housing Excellence (formerly SAM Awards), the project represents a benchmark of residential design quality.",
    heroImage: chenResidence01,
    images: [chenResidence01],
    details: [
      { label: "Category", value: "Residential" },
      { label: "Location", value: "West Vancouver, BC" },
      { label: "Area", value: "6,729 sq. ft." },
      { label: "Recognition", value: "CHBA National SAM Awards Finalist" },
      { label: "Services", value: "Integrated Design, Code Consultation" },
    ],
  },
  {
    slug: "han-residence",
    title: "Han Residence",
    category: "Residential",
    location: "Delta, BC",
    description:
      "A generously proportioned family residence in Delta, designed in collaboration with interior designer John Han. The home balances contemporary form with warm materiality, creating spaces that feel both refined and inviting. Careful attention to interior-exterior continuity ensures seamless transitions between the living areas and the surrounding landscape.",
    heroImage: hanResidence01,
    images: [hanResidence01],
    details: [
      { label: "Category", value: "Residential" },
      { label: "Location", value: "Delta, BC" },
      { label: "Area", value: "6,078 sq. ft." },
      { label: "Co-Designer", value: "John Han (Interior)" },
      { label: "Services", value: "Integrated Design" },
    ],
  },
  {
    slug: "severn-residence",
    title: "Severn Residence",
    category: "Residential",
    location: "Richmond, BC",
    description:
      "A custom single-family residence in Richmond that embodies clean contemporary lines and thoughtful spatial planning. The design prioritizes natural light and flow between interior living spaces and outdoor areas, creating a home that feels open yet intimate.",
    heroImage: severnResidence01,
    images: [severnResidence01],
    details: [
      { label: "Category", value: "Residential" },
      { label: "Location", value: "Richmond, BC" },
      { label: "Services", value: "Integrated Design" },
    ],
  },
  {
    slug: "xu-residence",
    title: "Xu Residence",
    category: "Residential",
    location: "Richmond, BC",
    description:
      "A refined single-family home in Richmond designed to maximize livable space within a considered footprint. The residence features a clean material palette and efficient spatial organization that reflects the owner's vision for modern, functional living.",
    heroImage: xuResidence01,
    images: [xuResidence01],
    details: [
      { label: "Category", value: "Residential" },
      { label: "Location", value: "Richmond, BC" },
      { label: "Area", value: "3,680 sq. ft." },
      { label: "Services", value: "Integrated Design" },
    ],
  },
  {
    slug: "bridgeport-office",
    title: "Bridgeport Office Building",
    category: "Commercial & Industrial",
    location: "Richmond, BC",
    description:
      "A significant commercial office development in Richmond's Bridgeport district, designed to accommodate modern workplace needs within a refined architectural envelope. The building's massing responds to the urban context while maximizing efficient floor plates and natural light penetration across all levels.",
    heroImage: bridgeportOffice01,
    images: [bridgeportOffice01, bridgeportOffice02, bridgeportOffice03],
    details: [
      { label: "Category", value: "Commercial & Industrial" },
      { label: "Location", value: "Richmond, BC" },
      { label: "Area", value: "28,703 sq. ft." },
      { label: "Budget", value: "$10 million" },
      { label: "Services", value: "Integrated Design, BIM, Code Consultation" },
    ],
  },
  {
    slug: "collingwood",
    title: "Collingwood",
    category: "Multi-Unit Housing",
    location: "Vancouver, BC",
    description:
      "A contemporary multi-unit housing development in Vancouver's Collingwood neighbourhood, contributing thoughtfully to the area's increasing urban density. The design balances privacy between units with shared landscape amenity, creating a cohesive residential community within a compact urban footprint.",
    heroImage: collingwood01,
    images: [collingwood01],
    details: [
      { label: "Category", value: "Multi-Unit Housing" },
      { label: "Location", value: "Vancouver, BC" },
      { label: "Area", value: "10,500 sq. ft." },
      { label: "Budget", value: "$5 million" },
      { label: "Services", value: "Integrated Design, Code Consultation" },
    ],
  },
  {
    slug: "sqn-education",
    title: "SQN Education",
    category: "Commercial & Industrial",
    location: "Richmond, BC",
    description:
      "A purpose-built educational facility in Richmond, designed to create nurturing and stimulating learning environments for young children. The project was developed in collaboration with ID Design Consulting Ltd., with Architect 57 providing code consultation and compliance services.",
    heroImage: srcProject12,
    images: [srcProject12, srcProject3],
    details: [
      { label: "Category", value: "Commercial & Industrial" },
      { label: "Location", value: "Richmond, BC" },
      { label: "Designer", value: "ID Design Consulting Ltd." },
      { label: "Codes", value: "Architect 57 Inc." },
      { label: "Services", value: "Code Consultation" },
    ],
  },
];

export const collections: Collection[] = [
  {
    slug: "residential",
    title: "Residential",
    category: "Residential",
    description:
      "A curated selection of custom residences designed with contemporary sensibility and sensitivity to site, climate, and client aspiration.",
    coverImage: srcProject4,
    items: [
      { image: no6Residence01, title: "No6 Residence", location: "Richmond, BC" },
      {
        image: vinsonCreekResidence01,
        title: "Vinson Creek Residence",
        location: "West Vancouver, BC",
        meta: "Co-Designer: Angel Wang · 9,343 sq. ft.",
      },
      {
        image: wuResidence01,
        title: "Wu Residence",
        location: "West Vancouver, BC",
        meta: "6,733 sq. ft.",
      },
      {
        image: srcProject6,
        title: "Lu Residence",
        location: "Delta, BC",
        meta: "5,177 sq. ft.",
      },
      { image: cartierResidence01, title: "Cartier Residence", location: "Vancouver, BC" },
      { image: laurelResidence01, title: "Laurel Residence", location: "Vancouver, BC" },
    ],
  },
  {
    slug: "multi-unit-housing",
    title: "Multi-Unit Housing",
    category: "Multi-Unit Housing",
    description:
      "High-rise, mid-rise, and townhouse developments designed for urban density, modern living, and community integration.",
    coverImage: austinHighRise01,
    items: [
      {
        image: austinHighRise01,
        title: "Austin High-Rise",
        location: "Coquitlam, BC",
        meta: "77,527 sq. ft. · Budget: $25 million",
      },
      {
        image: fiftyFourthAveCondo01,
        title: "54th Ave Condo (12-Storey)",
        location: "Langley, BC",
        meta: "12-storey with underground parking",
      },
      {
        image: fiftyFourthAveCondo02,
        title: "54th Ave Condo (4-Storey)",
        location: "Langley, BC",
        meta: "4-storey with underground parking",
      },
      {
        image: wellingtonMixUse01,
        title: "Wellington Mix-Use",
        location: "Chilliwack, BC",
        meta: "90,740 sq. ft. · Budget: $20 million",
      },
      {
        image: fletcherTownhouses01,
        title: "Fletcher Townhouses",
        location: "Maple Ridge, BC",
        meta: "15 units (5 types)",
      },
      {
        image: royalOak01,
        title: "Royal Oak",
        location: "Burnaby, BC",
        meta: "12,627 sq. ft. · Budget: $5.45 million",
      },
      {
        image: west3901,
        title: "West 39 Avenue",
        location: "Vancouver, BC",
        meta: "4,438 sq. ft. · Budget: $1.78 million",
      },
      {
        image: seavale01,
        title: "Seavale",
        location: "Richmond, BC",
        meta: "4,658 sq. ft. · Budget: $1.39 million",
      },
    ],
  },
  {
    slug: "commercial-industrial",
    title: "Commercial & Industrial",
    category: "Commercial & Industrial",
    description:
      "Educational facilities, institutional projects, and commercial developments — designed for function, compliance, and community impact.",
    coverImage: srcProject12,
    items: [
      { image: srcProject12, title: "East 2nd Avenue", location: "Vancouver, BC" },
      { image: srcProject3, title: "Phi Education", location: "Vancouver, BC" },
      {
        image: srcProject6,
        title: "Little Marines Preschool",
        location: "Coquitlam, BC",
        meta: "Designer: Yan Design Studio · Codes: Architect 57 Inc.",
      },
      { image: srcProject9, title: "Happy May IV", location: "Richmond, BC" },
      { image: vanguardFitness01, title: "Vanguard Fitness", location: "BC" },
      { image: aceEsports01, title: "Ace E-Sports", location: "BC" },
      { image: atomicFitness01, title: "Atomic Fitness", location: "BC" },
      { image: katalinCareHomes01, title: "Katalin Care Homes", location: "BC" },
      { image: mariposaGardensRetirement01, title: "Mariposa Gardens Retirement", location: "BC" },
      { image: morganPlay01, title: "Morgan Play", location: "BC" },
      { image: okanaganChateauRetirement01, title: "Okanagan Chateau Retirement", location: "BC" },
      { image: siennaRideauRetirement01, title: "Sienna Rideau Retirement", location: "BC" },
      { image: treasureCoveCasino01, title: "Treasure Cove Casino", location: "BC" },
    ],
  },
  {
    slug: "master-planning",
    title: "Master Planning",
    category: "Master Planning",
    description:
      "Large-scale planning projects encompassing community master plans, institutional campus planning, and international competition entries.",
    coverImage: zone5UnionBay01,
    items: [
      {
        image: zone5UnionBay01,
        title: "Zone 5, Union Bay Estate",
        location: "Union Bay, BC",
        meta: "1,189,000 sq. ft. (27.30 acres)",
      },
      {
        image: newUniversityHospital01,
        title: "New University Hospital of Northern BC",
        location: "Prince George, BC",
        meta: "277,000 sq. ft. · Budget: $700 million",
      },
      {
        image: dubaiHouseOfFuture01,
        title: "Dubai House of the Future Competition",
        meta: "570,000 sq. ft. (13.09 acres)",
      },
    ],
  },
];

// Fixed curated homepage projects: one from each category
export const homepageFeaturedProjects: HomepageProject[] = [
  {
    title: "Chen Residence",
    category: "Residential",
    image: chenResidence01,
    link: "/projects/chen-residence",
  },
  {
    title: "Collingwood",
    category: "Multi-Unit Housing",
    image: collingwood01,
    link: "/projects/collingwood",
  },
  {
    title: "Bridgeport Office Building",
    category: "Commercial & Industrial",
    image: bridgeportOffice01,
    link: "/projects/bridgeport-office",
  },
  {
    title: "Zone 5, Union Bay Estate",
    category: "Master Planning",
    image: zone5UnionBay01,
    link: "/projects/collection/master-planning",
  },
];
