export const WHATSAPP_NUMBER = '917506492611';

export const JUSTDIAL_URL = 'https://jsdl.in/DT-47XVP5VVBD4';

export const CONTACT = {
  office: '3rd Floor, The Hub, Near Regent Cinema, Gandhi Maidan – 800001',
  phone: '750-649-2611',
  phoneDisplay: '750-649-2611',
  phoneHref: '+917506492611',
  email: 'info@globalinfraspace.com',
  workingHours: 'Mon – Sat: 10:00 AM – 7:00 PM',
  justdial: JUSTDIAL_URL,
};

export const IMAGES = {
  heroBuilding: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
  service3D: '/images/architectural-elevation.jpg',
  serviceConstruction: '/images/building-construction.jpg',
  serviceInterior: '/images/luxury-living-interior.jpg',
  servicePool: '/images/infinity-pool.jpg',
  serviceTheater: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80',
  serviceCommercial: '/images/commercial-building.jpg',
  serviceEngineering: '/images/civil-consultation.jpg',
  serviceRepair: '/images/structural-repairs.jpg',
  projectVilla: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
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
  // ── 1. ARCHITECTURE & VISUALISATION (6 items) ──
  {
    id: '3d-exterior-elevation',
    title: '3D Exterior Elevation',
    slug: '3d-exterior-elevation',
    category: 'Architecture & Visualisation',
    description: 'Photoreal 3D exterior elevations and facade visualization with accurate daylight and dusk lighting.',
    fullDetails: 'We create photorealistic 3D exterior elevations and facade renderings that allow you to settle materials, proportions, balcony glass, and architectural lighting on screen before construction begins.',
    keyFeatures: ['Day and dusk architectural renders', 'Accurate material textures and stone cladding', 'Multiple color scheme explorations', 'Balcony and terrace railing details'],
    image: '/images/architectural-elevation.jpg',
  },
  {
    id: '3d-walkthrough',
    title: 'Cinematic 3D Video Walkthrough',
    slug: '3d-walkthrough',
    category: 'Architecture & Visualisation',
    description: 'Immersive animated 3D video walkthroughs showcasing exterior and interior spatial flow.',
    fullDetails: 'Experience your future building in motion with cinematic 4K video walkthroughs, showcasing room connections, natural sunlight transitions, and landscape integration.',
    keyFeatures: ['4K resolution video renders', 'Fluid camera paths and realistic scale', 'Ambient lighting and landscape movement', 'Ideal for family alignment & stakeholder approval'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'photoreal-interior-render',
    title: 'Photoreal Interior 3D Rendering',
    slug: 'photoreal-interior-render',
    category: 'Architecture & Visualisation',
    description: 'Hyper-detailed 3D visualisations for living rooms, master bedrooms, kitchens, and bathrooms.',
    fullDetails: 'Visualize every square inch of your interior spaces with photorealistic lighting, marble textures, false ceiling channels, and custom furniture placement before spending money on woodwork.',
    keyFeatures: ['Photorealistic lighting and shadow modeling', 'Custom furniture and false ceiling rendering', 'Accurate Italian marble and fabric textures', 'Saves costly on-site design revisions'],
    image: '/images/luxury-living-interior.jpg',
  },
  {
    id: 'vastu-shastra-planning',
    title: 'Vastu Shastra & Architectural Floor Plans',
    slug: 'vastu-shastra-architectural-plans',
    category: 'Architecture & Visualisation',
    description: 'Vastu Shastra compliant dimensional floor layouts, directional zoning, room placement, and municipal submission drawings.',
    fullDetails: 'Complete Vastu Shastra consultation and architectural drawings. We align your plot orientation, main gate, master bedroom (Nairutya), kitchen (Agneya), pooja room (Ishan), and staircase with classical Vedic Vastu Purusha Mandala principles while ensuring modern architectural aesthetics and optimal circulation.',
    keyFeatures: ['Vedic Vastu Purusha Mandala directional alignment', 'Dimensioned room-by-room CAD floor layouts', 'Main entrance pada calculation & zoning', 'Ready for on-site execution and municipal approval'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'landscape-master-plan',
    title: 'Landscape & Master Site Planning',
    slug: 'landscape-master-plan',
    category: 'Architecture & Visualisation',
    description: 'Site layout planning, driveways, garden zoning, drainage grades, and exterior illumination.',
    fullDetails: 'Complete plot master planning integrating vehicular driveways, courtyard gardens, outdoor seating pergolas, water features, and perimeter security illumination.',
    keyFeatures: ['Vehicular and pedestrian circulation planning', 'Green landscape zoning and tree placements', 'Outdoor lighting layout design', 'Terrace garden and courtyard master plans'],
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'vr-virtual-tour',
    title: 'VR Virtual Reality 360° Tours',
    slug: 'vr-virtual-tour',
    category: 'Architecture & Visualisation',
    description: 'Interactive 360-degree virtual reality exploration of unbuilt residential and commercial projects.',
    fullDetails: 'Put on a VR headset or use your smartphone to walk through your unbuilt home with full 360-degree interactive panoramic views of every room.',
    keyFeatures: ['360° panoramic room tours', 'Smartphone and VR headset compatibility', 'Instant sense of ceiling height and spatial volume', 'Interactive hotspot navigation'],
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1200&q=80',
  },

  // ── 2. CIVIL & TURNKEY (6 items) ──
  {
    id: 'building-construction',
    title: 'Building Construction',
    slug: 'building-construction',
    category: 'Civil & Turnkey',
    description: 'End-to-end residential and commercial construction from foundation and RCC to finishing and handover.',
    fullDetails: 'Complete civil contracting and turnkey building construction. We manage soil testing, RCC framework, brickwork, plastering, plumbing, electrical, and premium finishing under direct on-site civil engineering supervision.',
    keyFeatures: ['Turnkey Residential & Villa Construction', 'Commercial Complex & Office Buildings', 'Soil Testing & Structural RCC Works', 'Rigorous Material Testing & On-Site Quality Control'],
    image: '/images/building-construction.jpg',
  },
  {
    id: 'commercial-complex',
    title: 'Commercial Complex & Office Construction',
    slug: 'commercial-complex',
    category: 'Civil & Turnkey',
    description: 'Multi-storey commercial developments, shopping complexes, and modern corporate office buildings.',
    fullDetails: 'Heavy-duty commercial building execution with high-span column grids, basement parking ramps, fire safety integration, glass curtain walls, and fast-track civil scheduling.',
    keyFeatures: ['Multi-storey reinforced concrete framing', 'Basement parking with heavy-load slabs', 'Glass curtain wall & facade structural support', 'Strict adherence to commercial fire and safety codes'],
    image: '/images/commercial-building.jpg',
  },
  {
    id: 'metal-buildings',
    title: 'Pre-Engineered Metal Buildings (PEB)',
    slug: 'metal-buildings',
    category: 'Civil & Turnkey',
    description: 'Heavy steel structural fabrication, industrial sheds, commercial PEB warehouses and mezzanine floors.',
    fullDetails: 'Turnkey pre-engineered steel buildings, warehouse sheds, industrial structures, and rooftop extensions fabricated with high-tensile steel and insulated sandwich panel roofing.',
    keyFeatures: ['Fast-track steel fabrication & erection', 'Clear-span warehouse & industrial sheds', 'Rooftop mezzanine floors & extensions', 'Weatherproof insulated roofing panels'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'rcc-foundation',
    title: 'RCC Foundation & Structural Framing',
    slug: 'rcc-foundation',
    category: 'Civil & Turnkey',
    description: 'Deep pile foundations, raft footing, heavy reinforcement columns, and seismic-resistant beam design.',
    fullDetails: 'Engineered structural sub-structure and super-structure construction utilizing certified Fe550D TMT bars, ready-mix or on-site monitored M25/M30 concrete, and laser-guided column alignment.',
    keyFeatures: ['Pile, raft, and isolated footing execution', 'Certified TMT rebar bending and binding', 'Cube compressive strength test documentation', 'Anti-earthquake seismic detailing'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'institutional-construction',
    title: 'Institutional & Educational Buildings',
    slug: 'institutional-construction',
    category: 'Civil & Turnkey',
    description: 'School buildings, college campuses, hospital clinics, and community civic centers.',
    fullDetails: 'Large-scale institutional civil works focusing on long-term structural durability, high acoustic standards, wide corridors, and safe campus infrastructure.',
    keyFeatures: ['Spacious classroom and auditorium spans', 'High-traffic durable floor finishes', 'Emergency egress and safety staircases', 'Quality testing at every construction phase'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'rooftop-extensions',
    title: 'Vertical Floor & Rooftop Extensions',
    slug: 'rooftop-extensions',
    category: 'Civil & Turnkey',
    description: 'Adding floors and penthouses on existing structures using lightweight steel and composite slabs.',
    fullDetails: 'Expanding existing buildings vertically with structural load audits, lightweight steel framework, insulated wall panels, and waterproofed composite decking.',
    keyFeatures: ['Existing column load capacity calculation', 'Lightweight structural steel fabrication', 'Minimal disturbance to lower occupied floors', 'Complete roof weatherproofing guarantee'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  },

  // ── 3. INTERIORS (6 items) ──
  {
    id: 'interior-design',
    title: 'Interior Design & Spatial Architecture',
    slug: 'interior-design',
    category: 'Interiors',
    description: 'Residential and commercial interiors — layout, joinery, lighting, finishes and execution under one team.',
    fullDetails: 'Bespoke interior architecture and turnkey execution. From space planning, modular kitchen design, custom woodwork, and lighting schemes to Italian marble flooring and custom furniture procurement.',
    keyFeatures: ['Luxury Residential & Penthouse Interiors', 'Corporate Office & Retail Spaces', 'Custom Joinery & Modular Systems', 'Architectural Lighting & Acoustic Treatments'],
    image: '/images/luxury-living-interior.jpg',
  },
  {
    id: 'kitchen-remodeling',
    title: 'Modular Kitchen & Remodeling',
    slug: 'kitchen-remodeling',
    category: 'Interiors',
    description: 'Modular kitchen design, ergonomic cabinetry, quartz/granite countertops, and built-in appliance integration.',
    fullDetails: 'Modern modular kitchens crafted with marine-grade waterproof ply (BWP), soft-close hardware (Blum/Hettich), quartz countertops, and dedicated pantry zones.',
    keyFeatures: ['BWP Grade Marine Plywood & Acrylic Finishes', 'Premium Blum / Hettich Soft-Close Hardware', 'Seamless Quartz & Granite Countertops', 'Custom Island & Breakfast Counter Planning'],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'master-bedroom-interiors',
    title: 'Master Bedroom & Wardrobe Design',
    slug: 'master-bedroom-interiors',
    category: 'Interiors',
    description: 'Bespoke walk-in closets, upholstered acoustic headboards, integrated dressers, and warm lighting.',
    fullDetails: 'Sanctuary bedroom suites designed with custom fluted paneling, floor-to-ceiling glass wardrobes with sensor LED lighting, and sound-absorbing acoustic elements.',
    keyFeatures: ['Floor-to-ceiling glass and tinted mirror wardrobes', 'Acoustic padded bed backs and fluted paneling', 'Concealed LED strip and cove illumination', 'Integrated dressing vanity tables'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'corporate-office-interiors',
    title: 'Corporate Office & Workspace Interiors',
    slug: 'corporate-office-interiors',
    category: 'Interiors',
    description: 'Executive cabins, glass conference rooms, acoustic ceilings, and ergonomic workstations.',
    fullDetails: 'Inspiring office interiors with frameless glass partitions, soundproof meeting rooms, wire-managed collaborative desking, and reception branding walls.',
    keyFeatures: ['Frameless acoustic glass partitions', 'Modular ergonomic desking systems', 'Concealed cable and data management', 'Executive suite custom wooden joinery'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bathroom-remodeling',
    title: 'Luxury Bathroom Remodeling',
    slug: 'bathroom-remodeling',
    category: 'Interiors',
    description: 'Complete luxury bathroom makeovers, shower enclosures, concealed plumbing, vanity counters and dry-wet zone planning.',
    fullDetails: 'Complete overhaul of bathrooms with modern ergonomics, toughened glass shower partitions, concealed cisterns, vanity basins, and ambient lighting.',
    keyFeatures: ['Wet & dry zone segregation', 'Frameless toughened glass shower partitions', 'Designer quartz vanity counters', 'Concealed wall-hung WC with sensor flush'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bespoke-furniture',
    title: 'Bespoke Furniture & Architectural Woodwork',
    slug: 'bespoke-furniture',
    category: 'Interiors',
    description: 'Custom dining tables, entertainment consoles, fluted louvers, and bespoke cabinetry.',
    fullDetails: 'Handcrafted architectural woodwork made to exact room dimensions using seasoned teak, imported veneers, PU lacquers, and brass hardware.',
    keyFeatures: ['Tailored to exact millimeter room measurements', 'Natural wood veneers with PU matte finish', 'Concealed soft-close drawer runners', 'Integrated cable passages for TV units'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  },

  // ── 4. SPECIALISED CONSTRUCTION (6 items) ──
  {
    id: 'swimming-pool-construction',
    title: 'Swimming Pool Construction',
    slug: 'swimming-pool-construction',
    category: 'Specialised Construction',
    description: 'Private and commercial swimming pools — structure, waterproofing, filtration, finishes and maintenance.',
    fullDetails: 'Design, engineering, and turnkey construction of infinity pools, rooftop swimming pools, indoor wellness pools, and club pools with multi-layer waterproofing, automated filtration, glass mosaic finishes, and LED lighting.',
    keyFeatures: ['RCC multi-layer waterproofed structures', 'Advanced automated filtration systems', 'Glass mosaic & non-slip coping finishes', 'Underwater lighting & temperature control'],
    image: '/images/infinity-pool.jpg',
  },
  {
    id: 'home-theater-interiors',
    title: 'Home Theater Interiors',
    slug: 'home-theater-interiors',
    category: 'Specialised Construction',
    description: 'Acoustically treated theater and media rooms with seating, lighting and screen planning.',
    fullDetails: 'Private cinema room design with calibrated acoustic wall paneling, soundproofing membranes, multi-tiered recliner seating, ambient cove lighting, and audio-visual equipment integration.',
    keyFeatures: ['Calibrated acoustic wall & ceiling treatment', 'Soundproofing isolation membranes', 'Tiered custom recliner seating layouts', 'Cove lighting & starlight fiber ceiling effects'],
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'waterproofing',
    title: 'Waterproofing & Damp Treatment',
    slug: 'waterproofing',
    category: 'Specialised Construction',
    description: 'Terrace waterproofing, basement tanking, podium membranes, injection grouting and damp-proofing warranties.',
    fullDetails: 'Specialized chemical and membrane waterproofing solutions for new construction and existing leakages in terraces, sunken slabs, basements, swimming pools, and exterior walls.',
    keyFeatures: ['Polyurethane & elastomeric terrace coatings', 'Basement box type waterproofing', 'Pressure injection grouting for active leaks', 'Written workmanship warranty'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Outdoor Spaces',
    slug: 'landscaping',
    category: 'Specialised Construction',
    description: 'Terrace gardens, courtyard landscaping, vertical green walls, pavers, gazebos and outdoor water features.',
    fullDetails: 'Transforming outdoor plots, terrace rooftops, and courtyards into lush landscape environments with automated drip irrigation, paving stones, pergolas, and mood lighting.',
    keyFeatures: ['Terrace garden waterproofing & soil mixtures', 'Automated micro-drip irrigation systems', 'Natural stone cobblestone & paver patios', 'Architectural water fountains & pergolas'],
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cold-storage-puf',
    title: 'Cold Storage & Insulated Clean Rooms',
    slug: 'cold-storage-puf',
    category: 'Specialised Construction',
    description: 'PIR/PUF sandwich insulated panel construction with airtight doors and industrial refrigeration.',
    fullDetails: 'Engineering modular cold rooms, pharmaceutical clean rooms, and agricultural storage with high-density polyurethane foam panels and hermetic floor insulation.',
    keyFeatures: ['High-density PUF/PIR insulated wall & roof panels', 'Airtight insulated sliding doors', 'Vapor barrier sub-floor insulation', 'Precision temperature and humidity retention'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sports-amenities',
    title: 'Sports Courts & Pool Decks',
    slug: 'sports-amenities',
    category: 'Specialised Construction',
    description: 'Synthetic turf mini-football courts, badminton courts, composite pool decks, and perimeter fencing.',
    fullDetails: 'Turnkey sports court construction with shock-absorbing sub-base, anti-skid acrylic coatings, weather-resistant composite wood pool decks, and high-mast LED court lighting.',
    keyFeatures: ['Multi-layer acrylic cushioned court surfaces', 'Non-rot composite wood outdoor decking', 'Perimeter safety netting and high fencing', 'Flicker-free high-lumen sports floodlights'],
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
  },

  // ── 5. MEP SERVICES (6 items) ──
  {
    id: 'plumbing',
    title: 'Plumbing & Sanitation Engineering',
    slug: 'plumbing',
    category: 'MEP Services',
    description: 'Concealed and surface plumbing with quality fittings, pressure pumps, and leak-proof execution.',
    fullDetails: 'Complete sanitary engineering including CPVC/UPVC water supply piping, SWR drainage lines, overhead & underground tank systems, pressure boosting pumps, and luxury CP bathroom fittings.',
    keyFeatures: ['Pressure-tested concealed water pipelines', 'Noise-free acoustic drainage systems', 'Hydro-pneumatic pressure pump setup', 'Luxury fixture installation (Grohe, Kohler, Jaquar)'],
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'electrical-systems',
    title: 'Electrical Systems & Fire-Retardant Wiring',
    slug: 'electrical-systems',
    category: 'MEP Services',
    description: 'Concealed conduit wiring, distribution boards, earthing grids, and overload surge protection.',
    fullDetails: 'End-to-end electrical contracting using FRLS copper cables, concealed heavy-duty PVC conduits, certified MCB/RCCB distribution boards, and chemical earthing systems.',
    keyFeatures: ['100% FRLS fire-retardant copper wiring', 'Dedicated phase-balanced distribution boards', 'Chemical gel earthing with low-resistance pits', 'Surge and short-circuit protection circuits'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'smart-automation',
    title: 'Smart Home Automation & Lighting Controls',
    slug: 'smart-automation',
    category: 'MEP Services',
    description: 'Smartphone & voice-controlled architectural lighting, motorized blinds, and smart touch switches.',
    fullDetails: 'Convert any home into an automated smart space with wireless or wired protocol automation controlling lights, mood scenes, AC climate, and security locks from anywhere.',
    keyFeatures: ['Custom mood lighting and dimming scenes', 'Motorized curtains and roller blind control', 'Smart video doorbells and digital door locks', 'Works with mobile app, Alexa & Google Home'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'hvac-ventilation',
    title: 'HVAC Air Conditioning & Ventilation',
    slug: 'hvac-ventilation',
    category: 'MEP Services',
    description: 'VRV/VRF centralized cooling, concealed ducting, basement exhaust, and fresh air ventilation.',
    fullDetails: 'Engineering energy-efficient central air conditioning systems with multi-zone temperature controls, linear slot diffuser ceilings, and carbon monoxide basement exhaust fans.',
    keyFeatures: ['VRV / VRF multi-zone inverter systems', 'Concealed ducting with linear ceiling diffusers', 'Basement mechanical ventilation and smoke exhaust', 'Quiet operation and high energy efficiency'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'fire-safety',
    title: 'Fire Fighting & Suppression Systems',
    slug: 'fire-safety',
    category: 'MEP Services',
    description: 'Automatic water sprinklers, fire hose reels, optical smoke alarms, and hydrant pump networks.',
    fullDetails: 'Complete fire protection engineering compliant with National Building Code (NBC) norms, including automated sprinkler lines, diesel backup fire pumps, and addressable fire alarms.',
    keyFeatures: ['Automatic heat and optical smoke sensors', 'Overhead sprinkler networks with pressure switches', 'Fire hydrant risers and wet riser systems', 'Fire department NOC compliance documentation'],
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'solar-power-systems',
    title: 'Solar Power & Green Energy Setup',
    slug: 'solar-power-systems',
    category: 'MEP Services',
    description: 'On-grid and hybrid rooftop solar panel installations with net metering and inverter backups.',
    fullDetails: 'Cut monthly electricity bills by up to 80% with high-efficiency monocrystalline solar panels, bi-directional net meters, and heavy-duty rooftop mounting structures.',
    keyFeatures: ['High-efficiency tier-1 mono PERC solar modules', 'Grid-tied inverters with real-time app tracking', 'Bi-directional net metering grid approval', 'Rust-proof galvanized steel elevated structures'],
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
  },

  // ── 6. FINISHING (6 items) ──
  {
    id: 'marble-laying',
    title: 'Italian Marble Laying & Diamond Polishing',
    slug: 'marble-laying',
    category: 'Finishing',
    description: 'Book-matched Italian marble, Statuario, Botticino, and mirror polishing with zero lippage.',
    fullDetails: 'Master craftsmanship in Italian marble laying with laser-leveled dry pack beds, epoxy back mesh sealing, book-matching grain alignment, and 7-stage diamond puck mirror polishing.',
    keyFeatures: ['Book-matched slab grain alignment', 'Epoxy crack filling and back mesh protection', 'Laser-guided zero-lippage flat laying', 'Silicate crystallization mirror finish'],
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'vitrified-tiling',
    title: 'Large-Format Vitrified & Porcelain Tiling',
    slug: 'vitrified-tiling',
    category: 'Finishing',
    description: '1200x2400mm slim porcelain slab installation with anti-stain epoxy grouting.',
    fullDetails: 'Precision tile setting using heavy-duty suction lifters, polymer-modified adhesive beds, vibrating beaters, and matching color epoxy grout lines.',
    keyFeatures: ['1200x2400mm and 800x1600mm large formats', 'Polymer adhesive laying with zero hollow sounds', 'Stain-proof, waterproof epoxy tile grouts', 'Beveled 45-degree miter corner edges'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'luxury-textures-paint',
    title: 'Royal Emulsions & Italian Stucco Textures',
    slug: 'luxury-textures-paint',
    category: 'Finishing',
    description: 'Dust-free sanding, washable velvet emulsions, Venetian lime plasters, and metallic wall textures.',
    fullDetails: 'Premium wall finish application with moisture barrier coats, acrylic wall putty, machine sanding, luxury interior emulsions, and artisanal troweled Italian stucco effects.',
    keyFeatures: ['Dustless vacuum machine wall sanding', 'High-sheen washable luxury interior paints', 'Artisanal Venetian stucco and metallic textures', 'Anti-fungal base primers for long life'],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'false-ceiling-finishing',
    title: 'Designer False Ceilings & Lighting Channels',
    slug: 'false-ceiling-finishing',
    category: 'Finishing',
    description: 'Gypsum layered false ceilings, POP moldings, magnetic track lights, and linear AC slot diffusers.',
    fullDetails: 'Custom ceiling architecture using galvanized steel suspension channels, Saint-Gobain gypsum boards, crack-resistant tape joints, and concealed LED cove troughs.',
    keyFeatures: ['Zero-sag galvanized iron framework', 'Concealed LED strip cove lighting pockets', 'Flush magnetic track light rails', 'Smooth seamless painted ceiling surface'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'facade-cladding',
    title: 'Exterior Facade Cladding & Weather Coatings',
    slug: 'facade-cladding',
    category: 'Finishing',
    description: 'HPL louvers, ACP sheets, stone cladding, and UV-resistant weatherproof exterior paints.',
    fullDetails: 'Transform building exteriors with ventilated rainscreen cladding, wooden-finish exterior louvers, natural stone tiles, and silicone weather-shield exterior coatings.',
    keyFeatures: ['High-pressure laminate (HPL) exterior panels', 'Rust-free aluminum substructure framing', 'UV and rainwater resistant exterior sealants', 'Modern architectural street appeal'],
    image: '/images/architectural-elevation.jpg',
  },
  {
    id: 'pu-duco-polishing',
    title: 'Wood Polishing, PU & Duco Finishes',
    slug: 'pu-duco-polishing',
    category: 'Finishing',
    description: 'High-gloss polyurethane coatings, matte melamine polish, and spray duco for doors and furniture.',
    fullDetails: 'Factory-grade spray finishing for doors, frames, and custom cabinets using Italian PU coatings with scratch resistance and deep grain enhancement.',
    keyFeatures: ['High-gloss and matte Italian PU options', 'Spray-applied uniform finish without brush marks', 'Scratch and moisture resistant coating', 'Deep wood grain highlight for teak & veneers'],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
  },

  // ── 7. CIVIL & ENGINEERING (6 items) ──
  {
    id: 'civil-consultation',
    title: 'Civil Engineering Consultation',
    slug: 'civil-consultation',
    category: 'Civil & Engineering',
    description: 'Independent civil engineering advice, BOQ validation, site feasibility audits, and construction inspection.',
    fullDetails: 'Objective, independent engineering advisory for clients who require site inspections, structural vetting of architectural drawings, bill of quantities (BOQ) cross-checking, or contractor cost audits.',
    keyFeatures: ['Unbiased structural drawing & soil report review', 'Detailed bill of quantities (BOQ) preparation & vetting', 'Stage-wise third-party quality audits', 'Municipal clearance and code guidance'],
    image: '/images/civil-consultation.jpg',
  },
  {
    id: 'structural-repairs',
    title: 'Structural Repair & Column Retrofitting',
    slug: 'structural-repairs',
    category: 'Civil & Engineering',
    description: 'Micro-concreting, carbon-fiber wrapping, structural crack stitching, column strengthening and rehabilitation.',
    fullDetails: 'Engineering diagnosis and restorative treatments for distressed RCC columns, beams, foundation settlements, and aging building structures.',
    keyFeatures: ['Polymer modified mortar & micro-concreting', 'Carbon fiber reinforced polymer (CFRP) wrapping', 'Structural rebar rust treatment & passivation', 'Non-destructive rebound hammer testing'],
    image: '/images/structural-repairs.jpg',
  },
  {
    id: 'structural-stability-audit',
    title: 'Structural Stability & Seismic Audit',
    slug: 'structural-stability-audit',
    category: 'Civil & Engineering',
    description: 'Seismic stability calculations, rebar cross-checking, and foundation load auditing.',
    fullDetails: 'Comprehensive structural safety assessment of existing or planned buildings using STAAD.Pro finite element modeling to verify load paths against earthquake forces.',
    keyFeatures: ['STAAD.Pro computerized structural modeling', 'Rebar placement and spacing verification', 'Earthquake zone compliance certification', 'Foundation settlement risk assessment'],
    image: '/images/civil-consultation.jpg',
  },
  {
    id: 'boq-cost-estimation',
    title: 'Detailed BOQ & Construction Cost Audit',
    slug: 'boq-cost-estimation',
    category: 'Civil & Engineering',
    description: 'Itemized material take-offs, labor cost estimations, and contractor quote vetting.',
    fullDetails: 'Get an accurate, line-item Bill of Quantities (BOQ) covering cement, steel, sand, bricks, plumbing, and finishing quantities before signing contracts with any builder.',
    keyFeatures: ['Comprehensive itemized material take-offs', 'Accurate market labor and material rates', 'Contractor quotation cross-examination', 'Prevents unexpected budget escalations'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'soil-testing',
    title: 'Soil Testing & Geotechnical Survey',
    slug: 'soil-testing',
    category: 'Civil & Engineering',
    description: 'Standard penetration test (SPT), bore-hole sampling, safe bearing capacity (SBC) reports.',
    fullDetails: 'On-site geotechnical drilling and laboratory soil analysis to determine safe bearing capacity (SBC) and recommended foundation depth for secure building construction.',
    keyFeatures: ['Borehole sample extraction at site', 'Standard penetration test (SPT) N-values', 'Water table depth and soil classification', 'Engineered foundation depth recommendation'],
    image: '/images/building-construction.jpg',
  },
  {
    id: 'building-maintenance-amc',
    title: 'Annual Building Maintenance Contracts (AMC)',
    slug: 'building-maintenance-amc',
    category: 'Civil & Engineering',
    description: 'Comprehensive preventative health checkups for residential and commercial complexes.',
    fullDetails: 'Proactive and on-demand maintenance packages for residential apartments, corporate offices, and institutions covering plumbing checks, electrical audits, waterproofing inspections, and paint touchups.',
    keyFeatures: ['Scheduled preventative site inspections', 'Emergency plumbing & electrical support', 'Annual water tank cleaning & pipe descaling', 'Documented maintenance health reports'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'ai-luxury-villa-facade-dusk',
    title: 'Ultra-Luxury 3-Storey Architectural Villa Facade at Dusk',
    category: '3D Design',
    location: 'Executive Villa Concept',
    image: '/images/gallery-ai-luxury-villa-facade.jpg',
  },
  {
    id: 'ai-rooftop-infinity-pool-deck',
    title: 'Skyline Glass-Edge Rooftop Infinity Pool & Lounge Deck',
    category: 'Swimming Pool',
    location: 'Rooftop Luxury Suite',
    image: '/images/gallery-ai-rooftop-infinity-pool.jpg',
  },
  {
    id: 'ai-luxury-home-theater-cinema',
    title: 'Private Luxury Cinema Suite with Starlight Ceiling & Acoustic Paneling',
    category: 'Home Theater',
    location: 'Custom Acoustic Screening Room',
    image: '/images/gallery-ai-luxury-home-theater.jpg',
  },
  {
    id: 'ai-double-height-living-room',
    title: 'Double-Height Grand Living Room with Statuario Marble & Floating Staircase',
    category: 'Interiors',
    location: 'Private Villa Interior',
    image: '/images/gallery-ai-luxury-living-interior.jpg',
  },
  {
    id: 'arch-dream-house-elevation-palette',
    title: 'Arch Dream House Multi-Tier Elevation & Asian Paints Palette',
    category: '3D Design',
    location: 'Color & Dimensional Elevation Plan',
    image: '/images/gallery-arch-dream-house-elevation.png',
  },
  {
    id: 'site-pool-raft-curing-execution',
    title: 'On-Site Raft Slab Casting & Foundation Water Curing',
    category: 'Construction',
    location: 'Civil Project Site Execution',
    image: '/images/gallery-site-pool-raft-curing.jpg',
  },
  {
    id: 'classical-ganesha-brick-facade-drawing',
    title: 'Classical Hand-Rendered Brick Villa Elevation with Ganesha Jali',
    category: '3D Design',
    location: 'Architectural Concept Drafting',
    image: '/images/gallery-ganesha-brick-facade-drawing.jpg',
  },
  {
    id: '18x35-2bhk-rendered-floor-plan',
    title: "Rendered 18' × 35' 2BHK Space-Optimized Residential Floor Plan",
    category: 'Floor Plans',
    location: 'Interior Layout Blueprint',
    image: '/images/gallery-18x35-2bhk-rendered-plan.png',
  },
  {
    id: 'structural-foundation-plinth-brickwork',
    title: 'Site Foundation & Plinth Level Reinforced Brickwork',
    category: 'Construction',
    location: 'On-Site Civil Execution',
    image: '/images/gallery-foundation-plinth-brickwork.jpg',
  },
  {
    id: 'indoor-mosaic-swimming-pool-wellness',
    title: 'Indoor Mosaic Swimming Pool with Granite Cladding & SS Ladder',
    category: 'Swimming Pool',
    location: 'Private Residence Wellness Suite',
    image: '/images/gallery-indoor-mosaic-swimming-pool.jpg',
  },
  {
    id: 'vastu-compliant-3bhk-cad-floor-plan',
    title: "Vastu-Compliant 27' × 38' 3BHK Architectural CAD Floor Plan",
    category: 'Floor Plans',
    location: 'Architectural CAD Blueprint',
    image: '/images/gallery-vastu-3bhk-cad-floor-plan.png',
  },
  {
    id: 'vedic-vastu-digdarshan-orientation-grid',
    title: 'Classical 16-Zone Vedic Vastu-Digdarshan Cosmic Grid',
    category: '3D Design',
    location: 'Vedic Architectural Planning Matrix',
    image: '/images/gallery-vedic-vastu-digdarshan-grid.png',
  },
  {
    id: 'dimensioned-22x50-villa-cad-layout',
    title: "Precision 22' × 50' Residential Villa Dimensioned CAD Layout",
    category: 'Floor Plans',
    location: 'Architectural Working Drawing',
    image: '/images/gallery-dimensioned-22x50-villa-cad-layout.png',
  },
  {
    id: 'modern-4storey-villa-elevation',
    title: 'Modern 4-Storey Luxury Villa Elevation',
    category: '3D Design',
    location: 'Luxury Private Residence',
    image: '/images/gallery-modern-villa-elevation.jpg',
  },
  {
    id: 'vastu-ganesha-contemporary-villa',
    title: 'Vastu-Aligned Contemporary Villa with Stone Cladding',
    category: 'Construction',
    location: 'Green Avenue Villa',
    image: '/images/gallery-ganesha-luxury-villa.jpg',
  },
  {
    id: 'minimalist-3storey-residence-jali',
    title: 'Minimalist 3-Storey Residence with Laser-Cut Jali Gate',
    category: '3D Design',
    location: 'Urban Executive Residence',
    image: '/images/gallery-contemporary-3storey-house.png',
  },
  {
    id: 'multistorey-elevation-terrace-lounge',
    title: 'Multi-Storey Architectural Facade & Terrace Lounge',
    category: 'Construction',
    location: 'Residential Multi-Storey',
    image: '/images/gallery-multistorey-elevation-jali.png',
  },
  {
    id: 'luxury-heated-pool-spa-patio',
    title: 'Luxury Heated Swimming Pool with Integrated Spa & Bistro Lighting',
    category: 'Swimming Pool',
    location: 'Private Courtyard Villa',
    image: '/images/gallery-luxury-swimming-pool-spa.jpg',
  },
  {
    id: '3d-architectural-facade-design',
    title: '3D Architectural Facade Design',
    category: '3D Design',
    location: 'Modern Villa',
    image: '/images/architectural-elevation.jpg',
  },
  {
    id: 'reinforced-concrete-structure',
    title: 'Reinforced Concrete Structure & Site Execution',
    category: 'Construction',
    location: 'Turnkey Project',
    image: '/images/building-construction.jpg',
  },
  {
    id: 'contemporary-luxury-living-room',
    title: 'Contemporary Luxury Living Room',
    category: 'Interiors',
    location: 'Private Residence',
    image: '/images/luxury-living-interior.jpg',
  },
  {
    id: 'private-residence-infinity-pool',
    title: 'Private Residence Infinity Swimming Pool',
    category: 'Swimming Pool',
    location: 'Luxury Villa',
    image: '/images/infinity-pool.jpg',
  },
  {
    id: 'acoustically-treated-cinema',
    title: 'Acoustically Treated Private Cinema',
    category: 'Home Theater',
    location: 'Acoustic Suite',
    image: IMAGES.serviceTheater,
  },
  {
    id: 'corporate-office-glass-facade',
    title: 'Corporate Office Complex & Glass Facade',
    category: 'Commercial',
    location: 'The Hub Commercial Center',
    image: '/images/commercial-building.jpg',
  },
  {
    id: 'civil-engineering-consultation',
    title: 'Civil Engineering Consultation & Site Review',
    category: 'Civil & Engineering',
    location: 'Site Audit',
    image: '/images/civil-consultation.jpg',
  },
  {
    id: 'structural-column-strengthening',
    title: 'Structural Column Strengthening & Retrofitting',
    category: 'Construction',
    location: 'RCC Rehabilitation',
    image: '/images/structural-repairs.jpg',
  },
];

export const BLOG_ARTICLES = [
  {
    id: 'construction-cost-breakdown-2026',
    title: 'Building Construction Cost Breakdown (2026 Material & Rate Guide)',
    date: 'February 2026',
    category: 'Construction Guide',
    excerpt: 'A clear, transparent breakdown of foundation, RCC, brickwork, and finishing costs per square foot for residential construction.',
    content: `When planning residential or commercial construction, understanding true cost components prevents mid-project budget surprises.
    
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
    id: 'swimming-pool-engineering-climate',
    title: 'Engineering Swimming Pools: Waterproofing & Structural Factors',
    date: 'December 2025',
    category: 'Specialised Engineering',
    excerpt: 'Key civil considerations for rooftop and ground swimming pools, focusing on groundwater pressure, concrete grades, and multi-layer waterproofing.',
    content: `Constructing a durable swimming pool requires rigorous civil waterproofing standards.

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

export interface PricingPackage {
  id: string;
  name: string;
  rate: number;
  unit: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
}

export const PACKAGES: PricingPackage[] = [
  {
    id: 'silver',
    name: 'Silver Package',
    rate: 10,
    unit: '₹10/sqft',
    features: [
      'Floor Plan',
      'Plumbing Design',
      'Electric Design',
      '3D Front Elevation',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Package',
    rate: 15,
    unit: '₹15/sqft',
    badge: 'Most Popular',
    isPopular: true,
    features: [
      'Floor Plan',
      'Plumbing Design',
      'Electric Design',
      '3D Front Elevation',
      'Column Layout Design',
      'Pile/Footing Layout Design',
      'Tie Beam Detail Design',
      'Slab Beam Detail Design',
      'Slab Reinforcement Details Design',
      'Staircase Section Details',
      'Septic Tank & Borewell Position',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    rate: 30,
    unit: '₹30/sqft',
    features: [
      'Floor Plan',
      'Plumbing Design',
      'Electric Design',
      '3D Front Elevation',
      'Column Layout Design',
      'Pile/Footing Layout Design',
      'Tie Beam Detail Design',
      'Slab Beam Detail Design',
      'Slab Reinforcement Details Design',
      'Staircase Section Details',
      'Septic Tank & Borewell Position',
      '3D Interior Design',
    ],
  },
];

export function buildPackageWhatsAppLink(packageName: string, rate: number, areaSqft?: number): string {
  let msg = `Hello Global Infraspace,\n\nI am interested in choosing the *${packageName}* (₹${rate}/sqft) for my project.`;
  if (areaSqft && areaSqft > 0) {
    const total = areaSqft * rate;
    msg += `\n\n• Estimated Built-up Area: ${areaSqft.toLocaleString('en-IN')} sq.ft\n• Estimated Planning Cost: ₹${total.toLocaleString('en-IN')}`;
  }
  msg += `\n\nPlease let me know the process to begin the architectural & engineering design.`;
  return buildWhatsAppLink(msg);
}

export interface ConstructionPackageItem {
  id: string;
  name: string;
  rate: number;
  unit: string;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  highlights: string[];
}

export const CONSTRUCTION_PACKAGES: ConstructionPackageItem[] = [
  {
    id: 'silver-construction',
    name: 'Silver',
    rate: 1800,
    unit: '₹1,800/ sq.ft',
    tagline: 'Standard Quality Turnkey Construction',
    highlights: [
      'Kamdhenu / SAIL certified TMT Steel',
      'Ultratech Cement & M20 RCC Mix',
      'Iron Main Door upto ₹30,000',
      'Varmora / Kajaria Flooring upto ₹60/sqft',
      'Free 2D Floor Plan & 3D Elevation',
    ],
  },
  {
    id: 'gold-construction',
    name: 'Gold',
    rate: 2000,
    unit: '₹2,000/ sq.ft',
    badge: 'Most Popular',
    isPopular: true,
    tagline: 'Premium Turnkey Construction',
    highlights: [
      'Jindal / JSW certified TMT Steel',
      'ACC / Ultratech Cement & M20 RCC Mix',
      'Stainless Steel Main Door upto ₹40,000',
      'UPVC Windows & Window Grills included',
      'SS 304 Grade Staircase Railing',
      'Kajaria / Johnson Flooring upto ₹80/sqft',
    ],
  },
  {
    id: 'platinum-construction',
    name: 'Platinum',
    rate: 2300,
    unit: '₹2,300/ sq.ft',
    badge: 'Luxury Finish',
    tagline: 'Luxury Turnkey Construction',
    highlights: [
      'TATA Tiscon / Jindal premium TMT Steel',
      'ACC / Ultratech / Concreto Cement',
      'Teak Wood / Stainless Steel Door upto ₹50,000',
      'Royale Luxury Emulsion & Apex Ultima',
      'SS 304 Grade Railing with Glass',
      'Kajaria / Johnson / Somany Flooring upto ₹100/sqft',
    ],
  },
];

export interface ConstructionSpecSection {
  category: string;
  subtext?: string;
  features: {
    name: string;
    silver: string;
    gold: string;
    platinum: string;
  }[];
}

export const CONSTRUCTION_SPEC_SECTIONS: ConstructionSpecSection[] = [
  {
    category: 'Design & Planning',
    features: [
      {
        name: 'Design & Consultation',
        silver: 'Free',
        gold: 'Free',
        platinum: 'Free',
      },
      {
        name: 'Drawings',
        silver: '2D Floor Plan & 3D Elevation',
        gold: '2D Floor Plan & 3D Elevation',
        platinum: '2D Floor Plan & 3D Elevation',
      },
      {
        name: 'Structural Design',
        silver: 'Included (Engineered)',
        gold: 'Included (Engineered)',
        platinum: 'Included (Engineered)',
      },
    ],
  },
  {
    category: 'Structure',
    features: [
      {
        name: 'Steel',
        silver: 'Kamdhenu / Sail',
        gold: 'Jindal / JSW',
        platinum: 'TATA Tiscon / Jindal',
      },
      {
        name: 'Cement',
        silver: 'Ultratech',
        gold: 'ACC / Ultratech',
        platinum: 'ACC / Ultratech / Concreto',
      },
      {
        name: '20mm Aggregate',
        silver: 'Gaya / Koderma',
        gold: 'Gaya / Koderma',
        platinum: 'Gaya / Koderma',
      },
      {
        name: 'Bricks',
        silver: 'A1 Quality',
        gold: 'A1 Quality',
        platinum: 'A1 Quality',
      },
      {
        name: 'RCC Mix',
        silver: 'M20 Grade',
        gold: 'M20 Grade',
        platinum: 'M20 Grade',
      },
      {
        name: 'Ceiling Height',
        silver: 'Standard 10 Feet',
        gold: 'Standard 10.5 Feet',
        platinum: 'Standard 11 Feet',
      },
    ],
  },
  {
    category: 'Kitchen (All fittings can be customised at cost)',
    features: [
      {
        name: 'Ceramic Wall Dado',
        silver: 'Upto ₹40 per sqft',
        gold: 'Upto ₹60 per sqft',
        platinum: 'Upto ₹80 per sqft',
      },
      {
        name: 'Sink',
        silver: 'Upto ₹3,000 (Futura, Carysil)',
        gold: 'Upto ₹6,000 (Futura, Carysil)',
        platinum: 'Upto ₹6,000 (Futura, Carysil)',
      },
      {
        name: 'Sink Faucet',
        silver: 'Upto ₹1,000',
        gold: 'Upto ₹2,000',
        platinum: 'Upto ₹2,000',
      },
      {
        name: 'Sink Accessories',
        silver: 'Parryware',
        gold: 'Parryware / Hindware',
        platinum: 'Parryware / Hindware / Jaquar',
      },
    ],
  },
  {
    category: 'Bathroom (All fittings can be customised at cost)',
    features: [
      {
        name: 'Ceramic Wall Dado',
        silver: 'Upto ₹30 per sqft',
        gold: 'Upto ₹40 per sqft',
        platinum: 'Upto ₹50 per sqft',
      },
      {
        name: 'Sanitary & CP fittings',
        silver: 'Upto ₹30,000 per 1000 sqft (Parryware)',
        gold: 'Upto ₹40,000 per 1000 sqft (Parryware / Hindware)',
        platinum: 'Upto ₹50,000 per 1000 sqft (Parryware / Hindware / Jaquar)',
      },
      {
        name: 'CPVC Pipe',
        silver: 'Prince',
        gold: 'Supreme',
        platinum: 'Supreme / Ashirvad',
      },
      {
        name: 'Bathroom doors',
        silver: 'Aluminium',
        gold: 'UPVC / WPC',
        platinum: 'UPVC / WPC',
      },
    ],
  },
  {
    category: 'Doors & Windows',
    features: [
      {
        name: 'Main Door',
        silver: 'Iron Door upto ₹30,000 including accessories',
        gold: 'Stainless Steel upto ₹40,000 including accessories',
        platinum: 'Stainless Steel | Teak Wood ₹50,000 including accessories',
      },
      {
        name: 'Internal Doors',
        silver: 'MR Ply Board Waterproof With Laminates upto ₹10,000',
        gold: 'Century Ply Board Waterproof With Laminates upto ₹11,000',
        platinum: 'Green / Century Ply Board Waterproof With Laminates upto ₹13,000',
      },
      {
        name: 'Puja Room Door',
        silver: 'WPC With frame worth ₹4,000 for every Puja Room',
        gold: 'WPC With frame worth ₹5,000 for every Puja Room',
        platinum: 'WPC With frame worth ₹6,000 for every Puja Room',
      },
      {
        name: 'Windows',
        silver: 'Aluminium windows ₹300 per sqft',
        gold: 'UPVC windows ₹400 per sqft',
        platinum: 'UPVC windows ₹500 per sqft',
      },
      {
        name: 'Window grills',
        silver: 'No',
        gold: 'Yes',
        platinum: 'Yes',
      },
    ],
  },
  {
    category: 'Painting',
    features: [
      {
        name: 'Interior Painting (Asian Paints)',
        silver: 'JK Putty + Primer + Tractor Shyne Emulsion',
        gold: 'JK Putty + Primer + Tractor Shyne Emulsion',
        platinum: 'JK Putty + Primer + Royale Luxury Emulsion',
      },
      {
        name: 'Exterior Painting (Asian Paints)',
        silver: 'Primer + Apex Exterior Emulsion',
        gold: 'Primer + Apex Exterior Emulsion',
        platinum: 'Primer + Apex Ultima Exterior Emulsion',
      },
    ],
  },
  {
    category: 'Flooring (Laying charges will vary for marble tiles and granite)',
    features: [
      {
        name: 'Living & Dining Flooring',
        silver: 'Varmora / Kajaria Upto ₹60 per sqft',
        gold: 'Kajaria / Johnson Upto ₹80 per sqft',
        platinum: 'Kajaria / Johnson / Somany Upto ₹100 per sqft',
      },
      {
        name: 'Rooms and Kitchen Flooring',
        silver: 'Varmora / Kajaria Upto ₹60 per sqft',
        gold: 'Kajaria / Johnson Upto ₹80 per sqft',
        platinum: 'Kajaria / Johnson / Somany Upto ₹100 per sqft',
      },
      {
        name: 'Balcony and Open Area',
        silver: 'Varmora / Kajaria Upto ₹60 per sqft',
        gold: 'Kajaria / Johnson Upto ₹80 per sqft',
        platinum: 'Kajaria / Johnson / Somany Upto ₹100 per sqft',
      },
      {
        name: 'Staircase',
        silver: 'Upto ₹60 per sqft',
        gold: 'Upto ₹70 per sqft',
        platinum: 'Upto ₹80 per sqft',
      },
      {
        name: 'Parking',
        silver: 'Tiles upto ₹40 per sqft',
        gold: 'Tiles upto ₹70 per sqft',
        platinum: 'Tiles upto ₹70 per sqft',
      },
    ],
  },
  {
    category: 'Wiring & Electrical',
    features: [
      {
        name: 'Fire proof Wiring',
        silver: 'Anchor',
        gold: 'Anchor / Polycab',
        platinum: 'Anchor / Polycab / Havells',
      },
      {
        name: 'Switch',
        silver: 'Anchor',
        gold: 'Anchor / Polycab',
        platinum: 'Anchor / Polycab / Havells',
      },
      {
        name: 'Socket',
        silver: 'Anchor',
        gold: 'Anchor / Polycab',
        platinum: 'Anchor / Polycab / Havells',
      },
      {
        name: 'Provision for UPS Wiring',
        silver: 'Malhotra',
        gold: 'Malhotra / Anchor',
        platinum: 'Anchor / Polycab',
      },
    ],
  },
  {
    category: 'Others & Infrastructure',
    features: [
      {
        name: 'Borewell & Water Tank',
        silver: '1500 Ltrs. of Apollo / equivalent make',
        gold: '2000 Ltrs. of Sintex / equivalent make',
        platinum: '2000 Ltrs. of Sintex / equivalent make',
      },
      {
        name: 'Septic Tank',
        silver: '800 Ltrs.',
        gold: '1,000 Ltrs.',
        platinum: '12,000 Ltrs.',
      },
      {
        name: 'Staircase railing',
        silver: 'MS Railing',
        gold: 'SS 304 grade Railing',
        platinum: 'SS 304 grade Railing with glass',
      },
      {
        name: 'Mumty',
        silver: '₹1,200 per sqft',
        gold: '₹1,200 per sqft',
        platinum: '₹1,200 per sqft',
      },
      {
        name: 'Brick Parapet Wall (4 inch)',
        silver: '(Material + Labour Cost) ₹240 per sqft',
        gold: '(Material + Labour Cost) ₹240 per sqft',
        platinum: '(Material + Labour Cost) ₹240 per sqft',
      },
      {
        name: 'Basement / Raft Foundation',
        silver: '(R.C.C. 6 inch) ₹400 per sqft',
        gold: '(R.C.C. 8 inch) ₹500 per sqft',
        platinum: '(R.C.C. 10 inch) ₹640 per sqft',
      },
    ],
  },
];

export function buildConstructionPackageWhatsAppLink(packageName: string, rate: number, areaSqft?: number): string {
  let msg = `Hello Global Infraspace,\n\nI am interested in choosing the *${packageName} Construction Package* (₹${rate.toLocaleString('en-IN')}/sq.ft) for my project.`;
  if (areaSqft && areaSqft > 0) {
    const total = areaSqft * rate;
    msg += `\n\n• Estimated Built-up Area: ${areaSqft.toLocaleString('en-IN')} sq.ft\n• Estimated Construction Budget: ₹${total.toLocaleString('en-IN')}`;
  }
  msg += `\n\nPlease share the detailed material schedule, payment stages, and arrange an engineering consultation.`;
  return buildWhatsAppLink(msg);
}
