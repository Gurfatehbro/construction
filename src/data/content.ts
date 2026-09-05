export const WHATSAPP_NUMBER = '917506492611';

export const CONTACT = {
  office: '3rd Floor, The Hub, Near Regent Cinema, Gandhi Maidan, Dujra Diara, Patna, Bihar – 800001',
  phone: '7506492611',
  phoneDisplay: '+91 75064 92611',
  phoneHref: '+917506492611',
  email: 'info@globalinfraspace.com',
  workingHours: 'Mon – Sat: 10:00 AM – 7:00 PM',
};

export const IMAGES = {
  // Architectural high-resolution curated photography matching globalinfraspace.com
  heroBuilding: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
  service3D: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  serviceConstruction: '/images/building-construction.jpg',
  serviceInterior: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  servicePool: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
  serviceTheater: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80',
  aboutTeam: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  projectVilla: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
  projectCommercial: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  projectLiving: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
};

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  fullDetails: string;
  keyFeatures: string[];
  image: string;
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: '3d-architectural-design',
    title: '3D Architectural Design',
    slug: '3d-architectural-design',
    category: 'Architecture & Visualisation',
    description: 'Photoreal 3D visualisation, elevations and walkthroughs so you can approve the design before a single brick is laid.',
    fullDetails: 'We create photorealistic 3D architectural renders, exterior facade designs, structural blueprints, and animated walkthroughs that allow homeowners and developers to visualize spatial proportions, sunlight angles, lighting, and textures prior to construction.',
    keyFeatures: ['Exterior 3D Facades & Elevations', 'Photoreal Interior Renders', 'Cinematic 3D Video Walkthroughs', 'Accurate Sun & Shadow Analysis'],
    image: IMAGES.service3D,
  },
  {
    id: 'building-construction',
    title: 'Building Construction',
    slug: 'building-construction',
    category: 'Civil & Turnkey',
    description: 'End-to-end residential and commercial construction in Patna, from foundation and RCC to finishing and handover.',
    fullDetails: 'Complete civil contracting and turnkey building construction across Patna and Bihar. We manage soil testing, RCC framework, brickwork, plastering, plumbing, electrical, and premium finishing under direct on-site civil engineering supervision.',
    keyFeatures: ['Turnkey Residential & Villa Construction', 'Commercial Complex & Office Buildings', 'Soil Testing & Structural RCC Works', 'Rigorous Material Testing & On-Site Quality Control'],
    image: IMAGES.serviceConstruction,
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    slug: 'interior-design',
    category: 'Interiors',
    description: 'Residential and commercial interiors — layout, joinery, lighting, finishes and execution under one team.',
    fullDetails: 'Bespoke interior architecture and turnkey execution. From space planning, modular kitchen design, custom woodwork, and lighting schemes to Italian marble flooring and custom furniture procurement.',
    keyFeatures: ['Luxury Residential & Penthouse Interiors', 'Corporate Office & Retail Spaces', 'Custom Joinery & Modular Systems', 'Architectural Lighting & Acoustic Treatments'],
    image: IMAGES.serviceInterior,
  },
  {
    id: 'swimming-pool-construction',
    title: 'Swimming Pool Construction',
    slug: 'swimming-pool-construction',
    category: 'Specialised Construction',
    description: 'Private and commercial swimming pools — structure, waterproofing, filtration, finishes and maintenance.',
    fullDetails: 'Design, engineering, and turnkey construction of infinity pools, rooftop swimming pools, indoor wellness pools, and club pools with multi-layer waterproofing, automated filtration, glass mosaic finishes, and LED lighting.',
    keyFeatures: ['RCC Multi-Layer Waterproofed Structures', 'Advanced Automated Filtration Systems', 'Glass Mosaic & Non-Slip Coping Finishes', 'Underwater Lighting & Temperature Control'],
    image: IMAGES.servicePool,
  },
  {
    id: 'home-theater-interiors',
    title: 'Home Theater Interiors',
    slug: 'home-theater-interiors',
    category: 'Specialised Interiors',
    description: 'Acoustically treated theater and media rooms with seating, lighting and screen planning.',
    fullDetails: 'Private cinema room design with calibrated acoustic wall paneling, soundproofing membranes, multi-tiered recliner seating, ambient cove lighting, and audio-visual equipment integration.',
    keyFeatures: ['Calibrated Acoustic Wall & Ceiling Treatment', 'Soundproofing Isolation Membranes', 'Tiered Custom Recliner Seating Layouts', 'Cove Lighting & Starlight Fiber Ceiling Effects'],
    image: IMAGES.serviceTheater,
  },
  {
    id: 'false-ceiling',
    title: 'False Ceiling & Architectural Lighting',
    slug: 'false-ceiling',
    category: 'Interiors',
    description: 'POP, gypsum, acoustic and custom false ceiling designs with integrated cove lighting and linear diffusers.',
    fullDetails: 'Precision installation of Saint-Gobain gypsum false ceilings, POP carved designs, acoustic grid tiles, wooden rafters, and magnetic track light integration.',
    keyFeatures: ['Moisture-Resistant Gypsum & POP Ceilings', 'Concealed LED Cove & Profile Lighting Channels', 'Acoustic Panels for Boardrooms & Theaters', 'Seamless Surface Finish with Zero Sagging'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'painting',
    title: 'Painting & Luxury Textures',
    slug: 'painting',
    category: 'Finishing',
    description: 'Interior and exterior painting, weather-proof coatings, luxury PU/duco finishes and Italian texture applications.',
    fullDetails: 'Professional surface preparation with moisture testing, putty leveling, primer coats, washable luxury emulsions, duco/PU polish for woodwork, and weather-proof exterior coatings.',
    keyFeatures: ['Royal Emulsions & Washable Paints', 'Italian Stucco & Metallic Wall Textures', 'Anti-Fungal Weatherproof Exterior Coatings', 'Machine Sanding & Dust-Free Application'],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'plumbing',
    title: 'Plumbing & Sanitation Engineering',
    slug: 'plumbing',
    category: 'MEP Services',
    description: 'Concealed and surface plumbing with quality fittings, pressure pumps, and leak-proof execution.',
    fullDetails: 'Complete sanitary engineering including CPVC/UPVC water supply piping, SWR drainage lines, overhead & underground tank systems, pressure boosting pumps, and luxury CP bathroom fittings.',
    keyFeatures: ['Pressure-Tested Concealed Water Supply Pipelines', 'Noise-Free Acoustic Drainage Systems', 'Hydro-Pneumatic Pressure Pump Setup', 'Luxury Fixture Installation (Grohe, Kohler, Jaquar)'],
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'flooring-tiling',
    title: 'Flooring & Italian Marble Laying',
    slug: 'flooring-tiling',
    category: 'Finishing',
    description: 'Italian marble laying, vitrified tiling, wooden parquet, terrazzo and precision epoxy grouting.',
    fullDetails: 'Master craftsmanship in Italian marble laying with mirror polishing, large-format glazed vitrified tiles (GVT/PGVT), anti-skid bathroom tiles, and wooden composite flooring.',
    keyFeatures: ['Italian Marble Book-Matching & Diamond Polishing', 'Large-Format 1200x2400mm Slim Tile Laying', 'Anti-Stain Epoxy Tile Grouting', 'Laser Leveling for Flawless Even Floors'],
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'waterproofing',
    title: 'Waterproofing & Damp Treatment',
    slug: 'waterproofing',
    category: 'Specialised Construction',
    description: 'Terrace waterproofing, basement tanking, podium membranes, injection grouting and damp-proofing warranties.',
    fullDetails: 'Specialized chemical and membrane waterproofing solutions for new construction and existing leakages in terraces, sunken slabs, basements, swimming pools, and exterior walls.',
    keyFeatures: ['Polyurethane & Elastomeric Terrace Coatings', 'Basement Box Type Waterproofing', 'Pressure Injection Grouting for Active Leaks', 'Written Workmanship Warranty'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kitchen-remodeling',
    title: 'Modular Kitchen & Remodeling',
    slug: 'kitchen-remodeling',
    category: 'Interiors',
    description: 'Modular kitchen design, ergonomic cabinetry, quartz/granite countertops, and built-in appliance integration.',
    fullDetails: 'Modern modular kitchens crafted with marine-grade waterproof ply (BWP), soft-close hardware (Blum/Hettich), quartz countertops, and dedicated pantry zones.',
    keyFeatures: ['BWP Grade Marine Plywood & Acrylic Finishes', 'Premium Blum / Hettich Soft-Close Hardware', 'Seamless Quartz & Granite Countertops', 'Custom Island & Breakfast Counter Planning'],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bathroom-remodeling',
    title: 'Luxury Bathroom Remodeling',
    slug: 'bathroom-remodeling',
    category: 'Interiors',
    description: 'Complete luxury bathroom makeovers, shower enclosures, concealed plumbing, vanity counters and dry-wet zone planning.',
    fullDetails: 'Complete overhaul of residential and commercial bathrooms with modern ergonomics, toughened glass shower partitions, concealed cisterns, vanity basins, and ambient lighting.',
    keyFeatures: ['Wet & Dry Zone Segregation', 'Frameless Toughened Glass Shower Partitions', 'Designer Quartz Vanity Counters', 'Concealed Wall-Hung WC with Sensor Flush'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'structural-repairs',
    title: 'Structural Repair & Retrofitting',
    slug: 'structural-repairs',
    category: 'Civil & Engineering',
    description: 'Micro-concreting, carbon-fiber wrapping, structural crack stitching, column strengthening and rehabilitation.',
    fullDetails: 'Engineering diagnosis and restorative treatments for distressed RCC columns, beams, foundation settlements, and aging building structures.',
    keyFeatures: ['Polymer Modified Mortar & Micro-Concreting', 'Carbon Fiber Reinforced Polymer (CFRP) Wrapping', 'Structural Rebar Rust Treatment & Passivation', 'Non-Destructive Rebound Hammer Testing'],
    image: '/images/structural-repairs.jpg',
  },
  {
    id: 'metal-buildings',
    title: 'Pre-Engineered Metal Buildings (PEB)',
    slug: 'metal-buildings',
    category: 'Civil & Turnkey',
    description: 'Heavy steel structural fabrication, industrial sheds, commercial PEB warehouses and mezzanine floors.',
    fullDetails: 'Turnkey pre-engineered steel buildings, warehouse sheds, industrial structures, and rooftop extensions fabricated with high-tensile steel and insulated sandwich panel roofing.',
    keyFeatures: ['Fast-Track Steel Fabrication & Erection', 'Clear-Span Warehouse & Industrial Sheds', 'Rooftop Mezzanine Floors & Extensions', 'Weatherproof Insulated Roofing Panels'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'electrical-automation',
    title: 'Electrical & Smart Home Automation',
    slug: 'electrical-automation',
    category: 'MEP Services',
    description: 'Concealed conduit wiring, switchgear installation, architectural lighting control, and smart automation systems.',
    fullDetails: 'Complete electrical contracting including fire-retardant wiring (FRLS), distribution panels, earthing systems, surge protection, smart touch switches, and smartphone-controlled automation.',
    keyFeatures: ['FRLS Fire-Retardant Copper Wiring', 'Smart Lighting, Fan & AC Automation', 'Dedicated MCB / RCCB Protection Panels', 'EV Charging Station Provisioning'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Outdoor Spaces',
    slug: 'landscaping',
    category: 'Specialised Construction',
    description: 'Terrace gardens, courtyard landscaping, vertical green walls, pavers, gazebos and outdoor water features.',
    fullDetails: 'Transforming outdoor plots, terrace rooftops, and courtyards into lush landscape environments with automated drip irrigation, paving stones, pergolas, and mood lighting.',
    keyFeatures: ['Terrace Garden Waterproofing & Soil Mixtures', 'Automated Micro-Drip Irrigation Systems', 'Natural Stone Cobblestone & Paver Patios', 'Architectural Water Fountains & Pergolas'],
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'maintenance-amc',
    title: 'Building Maintenance & AMC',
    slug: 'maintenance-amc',
    category: 'Civil & Engineering',
    description: 'Annual maintenance contracts for residential societies, commercial buildings, plumbing, electrical and structural upkeep.',
    fullDetails: 'Proactive and on-demand maintenance packages for residential apartments, corporate offices, and institutions covering plumbing checks, electrical audits, waterproofing inspections, and paint touchups.',
    keyFeatures: ['Scheduled Preventative Site Inspections', 'Emergency Plumbing & Electrical Support', 'Annual Water Tank Cleaning & Pipe Descaling', 'Documented Maintenance Health Reports'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'civil-consultation',
    title: 'Civil Engineering & Technical Consultation',
    slug: 'civil-consultation',
    category: 'Civil & Engineering',
    description: 'Independent civil engineering advice, BOQ validation, site feasibility audits, and construction inspection.',
    fullDetails: 'Objective, independent engineering advisory for clients who require site inspections, structural vetting of architectural drawings, bill of quantities (BOQ) cross-checking, or contractor cost audits.',
    keyFeatures: ['Unbiased Structural Drawing & Soil Report Review', 'Detailed Bill of Quantities (BOQ) Preparation & Vetting', 'Stage-Wise Third-Party Quality Audits', 'Building Bylaws & Patna Municipal Clearance Guidance'],
    image: '/images/civil-consultation.jpg',
  },
];

export const GALLERY_ITEMS = [
  {
    title: '3D Architectural Facade Design',
    category: '3D Design',
    location: 'Patna, Bihar',
    image: IMAGES.service3D,
  },
  {
    title: 'Reinforced Concrete Structure & Site Execution',
    category: 'Construction',
    location: 'Gandhi Maidan, Patna',
    image: IMAGES.serviceConstruction,
  },
  {
    title: 'Contemporary Luxury Living Room',
    category: 'Interiors',
    location: 'Boring Road, Patna',
    image: IMAGES.serviceInterior,
  },
  {
    title: 'Private Residence Infinity Swimming Pool',
    category: 'Swimming Pool',
    location: 'Patna, Bihar',
    image: IMAGES.servicePool,
  },
  {
    title: 'Acoustically Treated Private Cinema',
    category: 'Home Theater',
    location: 'Patna, Bihar',
    image: IMAGES.serviceTheater,
  },
  {
    title: 'Modern Turnkey Villa Construction',
    category: 'Construction',
    location: 'Saguna More, Patna',
    image: IMAGES.projectVilla,
  },
  {
    title: 'Corporate Office Interior & Glass Partitions',
    category: 'Commercial',
    location: 'The Hub, Gandhi Maidan',
    image: IMAGES.projectCommercial,
  },
  {
    title: 'Minimalist Modular Kitchen & Dining',
    category: 'Interiors',
    location: 'Patna, Bihar',
    image: IMAGES.projectLiving,
  },
];

export const BLOG_ARTICLES = [
  {
    id: 'patna-construction-cost-2026',
    title: 'Building Construction Cost in Patna (2026 Breakdown & Material Guide)',
    date: 'February 2026',
    category: 'Construction Guide',
    excerpt: 'A clear, transparent breakdown of foundation, RCC, brickwork, and finishing costs per square foot for residential construction in Patna, Bihar.',
    content: `When planning residential or commercial construction in Patna, understanding true cost components prevents mid-project budget surprises.
    
1. Structural Civil Cost: Includes soil excavation, RCC foundation, steel reinforcement (TMT Fe550D), fly ash/red bricks, and high-grade cement.
2. Finishing & Flooring: Includes vitrified tiling, Italian marble, teak/flush doors, UPVC windows, and primer-paint coats.
3. MEP Engineering: Electrical conduit piping, distribution boxes, plumbing pipelines, and sanitary installations.
4. Supervision & Architecture: Dedicated site engineers, 3D visualization, and structural stability certification.

At Global Infraspace, every quotation includes line-item material specifications and fixed milestones so you never face hidden cost escalations.`,
  },
  {
    id: '3d-architectural-visualisation-benefits',
    title: 'Why 3D Architectural Visualisation is Essential Before Starting Construction',
    date: 'January 2026',
    category: 'Architecture',
    excerpt: 'How photorealistic 3D elevations and interior renders save up to 15% in reconstruction costs and help you make flawless design decisions on screen.',
    content: `Making structural changes on site during construction is expensive, messy, and slows down timelines. 3D architectural rendering changes this equation completely:

- Visualise Scale & Proportion: See your building's exterior elevations with exact heights, balcony depths, and window placements.
- Material & Lighting Accuracy: Test natural sunlight at different hours of the day, choose paint schemes, textures, and facade materials before procurement.
- One-Time Approval: Align your family or business stakeholders on screen, where changes are completely free.`,
  },
  {
    id: 'swimming-pool-construction-patna-climate',
    title: 'Engineering Swimming Pools in Bihar: Waterproofing & Climate Factors',
    date: 'December 2025',
    category: 'Specialised Engineering',
    excerpt: 'Key civil considerations for rooftop and ground swimming pools in Bihar, focusing on groundwater pressure, concrete grades, and multi-layer waterproofing.',
    content: `Constructing a durable swimming pool in Patna requires rigorous civil waterproofing standards.

1. Double-Layer RCC Tanking: Engineered concrete with integral waterproofing compounds to resist hydrostatic pressure.
2. Polyurethane & Elastomeric Membranes: Continuous elastic barriers that withstand thermal expansion and contraction.
3. Glass Mosaic Tiling: Non-porous and chemical-resistant tiles with anti-stain epoxy grouting.
4. Automated Sand Filtration: Maintaining crystal clear water quality with low chemical consumption and minimal maintenance.`,
  },
];

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildConsultationMessage(details: {
  name: string;
  phone: string;
  discipline: string;
  location?: string;
  notes?: string;
}): string {
  return (
    `Hello Global Infraspace,\n\n` +
    `I would like to book a consultation for my project.\n\n` +
    `• Name: ${details.name}\n` +
    `• Phone: ${details.phone}\n` +
    `• Project Service: ${details.discipline}\n` +
    (details.location ? `• Site Location: ${details.location}\n` : '') +
    (details.notes ? `• Details/Requirements: ${details.notes}\n` : '') +
    `\nPlease let me know a suitable time for discussion.`
  );
}
