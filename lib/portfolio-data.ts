export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  area: string;
  budget: string;
  completionDate: string;
  duration: string;
  description: string;
  images: string[];
  thumbnail: string;
  features: string[];
  materials?: string[];
  testimonial?: {
    text: string;
    client: string;
    rating: number;
  };
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'modern-2bhk-gurgaon',
    title: 'Modern 2BHK Apartment',
    category: 'Residential',
    location: 'Gurgaon',
    area: '1200 sq ft',
    budget: '₹10-20 Lakhs',
    completionDate: 'December 2025',
    duration: '45 days',
    description: 'A contemporary 2BHK apartment featuring minimalist design with warm tones. The space combines functionality with aesthetics, creating a cozy yet modern living environment perfect for a young family.',
    thumbnail: '/images/bedroom/mbr-1-1763100371-xDVo0.jpg',
    images: [
      '/images/bedroom/mbr-1-1763100371-xDVo0.jpg',
      '/images/bedroom/mbr-11-1763111543-e5Ily.jpg',
      '/images/living area/lr-11-1763103059-2KjqV.jpg',
      '/images/living area/lr-12-1763103058-7JFKh.jpg'
    ],
    features: [
      'Open-concept living and dining area',
      'Custom-built wardrobes with soft-close mechanisms',
      'Premium Italian marble flooring',
      'Smart lighting with automated controls',
      'Modular kitchen with breakfast counter'
    ],
    materials: [
      'Italian Marble - Statuario',
      'Engineered Wood - Merino Laminates',
      'Hardware - Hettich & Blum',
      'Paint - Asian Paints Royale'
    ],
    testimonial: {
      text: 'Brass Space transformed our apartment beyond our expectations. The attention to detail and quality of work is exceptional. Highly recommended!',
      client: 'Rajesh & Priya Sharma',
      rating: 5
    }
  },
  {
    id: 'luxury-island-kitchen',
    title: 'Luxury Island Kitchen',
    category: 'Kitchen',
    location: 'Delhi',
    area: '250 sq ft',
    budget: '₹5-10 Lakhs',
    completionDate: 'November 2025',
    duration: '30 days',
    description: 'A spacious island kitchen designed for culinary enthusiasts. Features premium appliances, ample storage, and a central island perfect for meal prep and casual dining.',
    thumbnail: '/images/Island Kitchen/ki-26-1763112209-dd7Yn.jpg',
    images: [
      '/images/Island Kitchen/ki-26-1763112209-dd7Yn.jpg',
      '/images/Island Kitchen/ki-11-1753694658-Aq4cg.jpg',
      '/images/Island Kitchen/ki-10-1753694659-tq49p.jpg',
      '/images/Island Kitchen/ki-2-1754378510-BiNjG.jpg'
    ],
    features: [
      'Central island with granite countertop',
      'Chimney with auto-clean technology',
      'Soft-close drawers and cabinets',
      'Under-cabinet LED lighting',
      'Built-in appliances - oven, microwave, dishwasher',
      'Breakfast seating for 4 people'
    ],
    materials: [
      'Countertop - Imported Granite',
      'Cabinets - Marine Ply with PU finish',
      'Hardware - Hafele',
      'Appliances - Bosch & Faber'
    ],
    testimonial: {
      text: 'Our dream kitchen came to life! The island design is perfect for our family gatherings. Professional team and timely delivery.',
      client: 'Amit Verma',
      rating: 5
    }
  },
  {
    id: 'corporate-office-noida',
    title: 'Corporate Office Interior',
    category: 'Commercial',
    location: 'Noida',
    area: '3000 sq ft',
    budget: 'Above ₹50 Lakhs',
    completionDate: 'October 2025',
    duration: '60 days',
    description: 'A modern corporate office designed to boost productivity and collaboration. Features open workspaces, private cabins, meeting rooms, and a vibrant breakout area.',
    thumbnail: '/images/home office/ho-1-1763115252-l3GLN.jpg',
    images: [
      '/images/home office/ho-1-1763115252-l3GLN.jpg',
      '/images/home office/ho-11-1763110382-NscOp.jpg',
      '/images/home office/ho-12-1763110366-3Pi4W.jpg',
      '/images/home office/ho-13-1763110349-Fx9US.jpg',
      '/images/home office/ho-2-1763115251-JrapT.jpg',
      '/images/home office/ho-3-1763115249-ngptO.jpg'
    ],
    features: [
      'Open-plan workstations for 50+ employees',
      '5 private cabins with glass partitions',
      '2 conference rooms with AV equipment',
      'Breakout area with pantry',
      'Reception with brand identity wall',
      'Ergonomic furniture throughout'
    ],
    materials: [
      'Flooring - Vitrified Tiles',
      'Partitions - Toughened Glass',
      'Furniture - Godrej Interio',
      'Lighting - Philips LED'
    ]
  },
  {
    id: 'foyer-entrance-delhi',
    title: 'Elegant Foyer Entrance',
    category: 'Residential',
    location: 'Delhi',
    area: '150 sq ft',
    budget: 'Under ₹5 Lakhs',
    completionDate: 'December 2025',
    duration: '15 days',
    description: 'A grand entrance designed to make a lasting first impression. Features custom shoe storage, a decorative console, and ambient lighting that sets the tone for the rest of the home.',
    thumbnail: '/images/Foyaer area/fo-1-1755355496-u2zeK.jpg',
    images: [
      '/images/Foyaer area/fo-1-1755355496-u2zeK.jpg',
      '/images/Foyaer area/fo-11-1763110762-FamoO.jpg',
      '/images/Foyaer area/fo-12-1763110756-OD0eX.jpg',
      '/images/Foyaer area/fo-2-1760079262-btq6v.jpg'
    ],
    features: [
      'Custom-designed console table',
      'Integrated shoe rack with seating',
      'Statement mirror with LED backlight',
      'Decorative wall paneling',
      'Ambient cove lighting'
    ],
    materials: [
      'Finish - PU Polish and Laminate',
      'Stone - Italian Marble top for console',
      'Mirror - 8mm Saint-Gobain',
      'Hardware - Hafele'
    ]
  },
  {
    id: 'premium-wardrobe-noida',
    title: 'Modern Sliding Wardrobe',
    category: 'Wardrobe',
    location: 'Noida',
    area: '100 sq ft',
    budget: '₹5-10 Lakhs',
    completionDate: 'January 2026',
    duration: '20 days',
    description: 'A space-saving sliding door wardrobe with a sleek matte finish. Designed for maximum storage efficiency with dedicated sections for various clothing and accessories.',
    thumbnail: '/images/Sliding Door Wardrobe/wr-1-1760438367-YXg4y.jpg',
    images: [
      '/images/Sliding Door Wardrobe/wr-1-1760438367-YXg4y.jpg',
      '/images/Sliding Door Wardrobe/wr-11-1762940815-dtObq.jpg',
      '/images/Sliding Door Wardrobe/wr-14-1762940811-Cl21w.jpg',
      '/images/Sliding Door Wardrobe/wr-17-1762940807-agYuV.jpg'
    ],
    features: [
      'Soft-close sliding mechanism',
      'Integrated loft storage',
      'Internal Sensored LED lighting',
      'Adjustable shelving',
      'Hidden jewelry drawer'
    ],
    materials: [
      'Carcass - BWP Plywood',
      'Shutter - High-gloss laminate',
      'Hardware - Hettich TopLine Grant',
      'Accessories - Ebco'
    ]
  },
  {
    id: 'walk-in-wardrobe',
    title: 'Luxury Walk-in Wardrobe',
    category: 'Wardrobe',
    location: 'Gurgaon',
    area: '120 sq ft',
    budget: '₹5-10 Lakhs',
    completionDate: 'September 2025',
    duration: '20 days',
    description: 'An elegant walk-in wardrobe with organized storage for clothes, shoes, and accessories. Features full-length mirrors, LED lighting, and premium finishes.',
    thumbnail: '/images/Walk In Wardrobe/w1-1696585849-K7Bgb.jpg',
    images: [
      '/images/Walk In Wardrobe/w1-1696585849-K7Bgb.jpg',
      '/images/Walk In Wardrobe/w2-1696585839-nWufC.jpg',
      '/images/Walk In Wardrobe/w3-1696585848-hhjoe.jpg'
    ],
    features: [
      'Customized shelving and hanging space',
      'Dedicated shoe rack with 40+ slots',
      'Jewelry and accessories drawer units',
      'Full-length mirrors with LED backlighting',
      'Soft-close mechanisms on all drawers',
      'Premium laminate finish'
    ],
    materials: [
      'Carcass - BWP Plywood',
      'Finish - Merino Laminates',
      'Hardware - Hettich',
      'Mirrors - Saint-Gobain'
    ],
    testimonial: {
      text: 'The walk-in wardrobe is a dream come true! Everything is so well organized and the quality is top-notch.',
      client: 'Neha Kapoor',
      rating: 5
    }
  },
  {
    id: 'living-room-renovation',
    title: 'Contemporary Living Room',
    category: 'Residential',
    location: 'Delhi',
    area: '400 sq ft',
    budget: '₹5-10 Lakhs',
    completionDate: 'August 2025',
    duration: '35 days',
    description: 'A complete living room renovation featuring modern furniture, elegant lighting, and a sophisticated color palette. The space is designed for both relaxation and entertainment.',
    thumbnail: '/images/living area/lr-11-1763103059-2KjqV.jpg',
    images: [
      '/images/living area/lr-11-1763103059-2KjqV.jpg',
      '/images/living area/lr-12-1763103058-7JFKh.jpg',
      '/images/living area/lr-1-1-1763103069-BpS4n.jpg',
      '/images/living area/lr-13-1763103057-9PLx6.jpg'
    ],
    features: [
      'Custom TV unit with hidden storage',
      'Designer ceiling with cove lighting',
      'Premium sofa set with velvet upholstery',
      'Accent wall with textured finish',
      'Smart home integration',
      'Automated curtains and blinds'
    ],
    materials: [
      'Flooring - Wooden Laminate',
      'Wall Texture - Asian Paints Royale Play',
      'Furniture - Custom-made',
      'Lighting - Philips Hue Smart Lights'
    ],
    testimonial: {
      text: 'Our living room has become the heart of our home. The design is stunning and the execution was flawless!',
      client: 'Vikram Singh',
      rating: 5
    }
  },
  {
    id: 'parallel-kitchen',
    title: 'Modern Parallel Kitchen',
    category: 'Kitchen',
    location: 'Noida',
    area: '180 sq ft',
    budget: '₹5-10 Lakhs',
    completionDate: 'July 2025',
    duration: '25 days',
    description: 'An efficient parallel kitchen layout maximizing storage and workspace. Perfect for medium-sized apartments with a focus on functionality and modern aesthetics.',
    thumbnail: '/images/Parallel Kitchen/ki-13-1763112292-8zKJS.jpg',
    images: [
      '/images/Parallel Kitchen/ki-13-1763112292-8zKJS.jpg',
      '/images/Parallel Kitchen/ki-14-1763112286-Z52lQ.jpg',
      '/images/Parallel Kitchen/ki-16-1763112266-O8jw2.jpg'
    ],
    features: [
      'Dual countertops for efficient workflow',
      'Tall unit with built-in oven and microwave',
      'Pull-out baskets and organizers',
      'Granite countertop with waterfall edge',
      'Chimney with baffle filters',
      'Under-cabinet task lighting'
    ],
    materials: [
      'Countertop - Black Galaxy Granite',
      'Cabinets - BWP Plywood with acrylic finish',
      'Hardware - Ebco',
      'Appliances - Faber & Glen'
    ]
  },
  {
    id: 'master-bedroom',
    title: 'Elegant Master Bedroom',
    category: 'Residential',
    location: 'Gurgaon',
    area: '300 sq ft',
    budget: '₹5-10 Lakhs',
    completionDate: 'June 2025',
    duration: '30 days',
    description: 'A serene master bedroom retreat with luxurious finishes, custom furniture, and thoughtful lighting. Designed to be a peaceful sanctuary for rest and relaxation.',
    thumbnail: '/images/bedroom/mbr-11-1763111543-e5Ily.jpg',
    images: [
      '/images/bedroom/mbr-11-1763111543-e5Ily.jpg',
      '/images/bedroom/mbr-1-1763100371-xDVo0.jpg',
      '/images/bedroom/mbr-12-1763111537-IYNiT.jpg'
    ],
    features: [
      'King-size bed with upholstered headboard',
      'Walk-in wardrobe with mirror doors',
      'Study nook with built-in desk',
      'Ambient and task lighting',
      'Textured accent wall behind bed',
      'Blackout curtains for better sleep'
    ],
    materials: [
      'Flooring - Engineered Wood',
      'Wardrobe - Marine Ply with laminate',
      'Bed - Solid Sheesham Wood',
      'Wall Texture - Royale Play'
    ],
    testimonial: {
      text: 'The bedroom design is exactly what we wanted - elegant, comfortable, and peaceful. Thank you Brass Space!',
      client: 'Anita & Rohit Malhotra',
      rating: 5
    }
  },
  {
    id: 'dining-area',
    title: 'Modern Dining Space',
    category: 'Residential',
    location: 'Delhi',
    area: '200 sq ft',
    budget: 'Under ₹5 Lakhs',
    completionDate: 'May 2025',
    duration: '20 days',
    description: 'A contemporary dining area designed for family meals and entertaining guests. Features a statement chandelier, custom dining table, and elegant storage solutions.',
    thumbnail: '/images/dining area/dr-11-1763110871-9W8lQ.jpg',
    images: [
      '/images/dining area/dr-11-1763110871-9W8lQ.jpg',
      '/images/dining area/dr-12-1763110866-T02bC.jpg',
      '/images/dining area/dr-1-1762944299-GlYlZ.jpg'
    ],
    features: [
      '6-seater dining table with marble top',
      'Crockery unit with glass shutters',
      'Statement chandelier lighting',
      'Accent wall with wallpaper',
      'Bar unit with wine storage',
      'Comfortable upholstered chairs'
    ],
    materials: [
      'Dining Table - Marble with wooden base',
      'Crockery Unit - Plywood with glass',
      'Chairs - Solid wood with fabric upholstery',
      'Lighting - Designer chandelier'
    ]
  },
  {
    id: 'home-office',
    title: 'Productive Home Office',
    category: 'Commercial',
    location: 'Gurgaon',
    area: '150 sq ft',
    budget: 'Under ₹5 Lakhs',
    completionDate: 'April 2025',
    duration: '15 days',
    description: 'A dedicated home office space designed for productivity and focus. Features ergonomic furniture, ample storage, and professional aesthetics perfect for remote work.',
    thumbnail: '/images/home office/ho-11-1763110382-NscOp.jpg',
    images: [
      '/images/home office/ho-11-1763110382-NscOp.jpg',
      '/images/home office/ho-12-1763110366-3Pi4W.jpg',
      '/images/home office/ho-1-1763115252-l3GLN.jpg'
    ],
    features: [
      'L-shaped work desk with cable management',
      'Ergonomic office chair',
      'Wall-mounted shelving for books and files',
      'Task lighting with adjustable brightness',
      'Pinboard and whiteboard for planning',
      'Sound-absorbing acoustic panels'
    ],
    materials: [
      'Desk - Engineered wood with laminate',
      'Shelving - Metal and wood combination',
      'Chair - Mesh back ergonomic',
      'Lighting - LED desk lamp'
    ],
    testimonial: {
      text: 'My home office is now my favorite room! It\'s professional, comfortable, and helps me stay focused. Great work!',
      client: 'Sanjay Gupta',
      rating: 5
    }
  },
  {
    id: 'modern-island-kitchen-gurgaon',
    title: 'Minimalist Open Kitchen',
    category: 'Kitchen',
    location: 'Gurgaon',
    area: '300 sq ft',
    budget: '₹10-20 Lakhs',
    completionDate: 'January 2026',
    duration: '35 days',
    description: 'An open-concept kitchen that seamlessly blends with the living area. Features a large island that doubles as a breakfast bar and prep station.',
    thumbnail: '/images/Open Kitchen/ki-11-1760342934-IL3OY.jpg',
    images: [
      '/images/Open Kitchen/ki-11-1760342934-IL3OY.jpg',
      '/images/Open Kitchen/ki-16-1760342928-NNaJm.jpg',
      '/images/Open Kitchen/ki-18-1763112254-0HcaS.jpg',
      '/images/Open Kitchen/ki-4-1760342940-RroEp.jpg'
    ],
    features: [
      'Handle-less cabinet design',
      'Built-in wine cooler',
      'Quartz waterfall island edge',
      'Integrated induction cooktop',
      'Concealed pantry storage'
    ],
    materials: [
      'Countertop - Kalinga Quartz',
      'Finish - Anti-fingerprint matte lacquer',
      'Hardware - Blum Legrabox',
      'Appliances - Siemens'
    ]
  },
  {
    id: 'space-saving-solution-delhi',
    title: 'Smart Studio Design',
    category: 'Residential',
    location: 'Delhi',
    area: '450 sq ft',
    budget: '₹5-10 Lakhs',
    completionDate: 'February 2026',
    duration: '25 days',
    description: 'A compact studio apartment transformed with multi-functional furniture and smart space-saving designs. Perfect for urban living without compromising on style.',
    thumbnail: '/images/space saving design/ssd-1-1760076250-uU5jK.jpg',
    images: [
      '/images/space saving design/ssd-1-1760076250-uU5jK.jpg',
      '/images/space saving design/ssd-11-1762938469-l2y1i.jpg',
      '/images/space saving design/ssd-2-1760076249-ZkDbn.jpg',
      '/images/space saving design/ssd-3-1-1761582520-KtSin.jpg'
    ],
    features: [
      'Murphy bed with integrated sofa',
      'Foldable dining table',
      'Modular wall shelving',
      'Hidden storage compartments',
      'Mirror walls to increase spatial perception'
    ],
    materials: [
      'Finish - Light Oak laminate',
      'Hardware - Specialized space-saving mechanisms',
      'Glass - Clear and grey tinted mirrors',
      'Fabric - Durable easy-clean linen'
    ]
  },
  {
    id: 'luxury-living-delhi',
    title: 'Luxury Living Area',
    category: 'Residential',
    location: 'Delhi',
    area: '550 sq ft',
    budget: '₹10-20 Lakhs',
    completionDate: 'November 2025',
    duration: '40 days',
    description: 'A grand living space designed with a blend of luxury and comfort. Features exquisite lighting fixtures, premium wall textures, and high-end bespoke furniture.',
    thumbnail: '/images/living area/lr-2-1763103068-cvgZB.jpg',
    images: [
      '/images/living area/lr-2-1763103068-cvgZB.jpg',
      '/images/living area/lr-1-1-1763103069-BpS4n.jpg',
      '/images/living area/lr-13-1763111912-Rl3YP.jpg',
      '/images/living area/lr-15-1763111870-Q1FVB.jpg'
    ],
    features: [
      'Custom wall paneling with brass accents',
      'Designer false ceiling with ambient cove lighting',
      'Handcrafted premium sofa ensemble',
      'Smart home lighting scenes',
      'Large format Italian marble flooring'
    ],
    materials: [
      'Flooring - Royal Bottochino Marble',
      'Wall Decor - Suede finish paneling',
      'Hardware - Ozone premium range',
      'Lighting - Tisva Chandeliers'
    ]
  },
  {
    id: 'guest-bedroom-noida',
    title: 'Minimalist Guest Retreat',
    category: 'Residential',
    location: 'Noida',
    area: '220 sq ft',
    budget: '₹5-10 Lakhs',
    completionDate: 'October 2025',
    duration: '25 days',
    description: 'A serene and functional guest bedroom that prioritizes clean lines and soothing textures. Designed to provide a five-star experience for visitors.',
    thumbnail: '/images/guest bedroom/gbr-1-1760071346-sjwGb.jpg',
    images: [
      '/images/guest bedroom/gbr-1-1760071346-sjwGb.jpg',
      '/images/guest bedroom/gbr-2-1760071344-VxlJl.jpg',
      '/images/guest bedroom/gbr-13-1763110644-xRyZs.jpg'
    ],
    features: [
      'Space-saving sliding wardrobe',
      'Integrated study desk with floating shelves',
      'Upholstered bed with hidden storage',
      'Natural light optimization',
      'Contemporary hardware finishes'
    ],
    materials: [
      'Laminates - Greenlam High Gloss',
      'Hardware - Hettich Soft-close',
      'Wall Finish - Asian Paints Velvet Touch',
      'Fabric - D\'Decor Upholstery'
    ]
  },
  {
    id: 'modern-tv-lounge-gurgaon',
    title: 'Modern TV Lounge',
    category: 'Residential',
    location: 'Gurgaon',
    area: '350 sq ft',
    budget: '₹5-10 Lakhs',
    completionDate: 'September 2025',
    duration: '20 days',
    description: 'An entertainment-focused lounge area featuring a custom entertainment center and ergonomic seating. The perfect space for family movie nights and immersive gaming.',
    thumbnail: '/images/TV Unit with Storage/tv-17-1762940261-3YNFI.jpg',
    images: [
      '/images/TV Unit with Storage/tv-17-1762940261-3YNFI.jpg',
      '/images/TV Unit with Storage/tv-19-1762940257-FaY0N.jpg',
      '/images/TV Unit with Storage/tv-9-1760078628-0f3zJ.jpg'
    ],
    features: [
      'Floating TV console with integrated cable management',
      'Acoustic wall treatment for enhanced sound',
      'Dimmable smart LED backlighting',
      'Ergonomic recliner seating arrangement',
      'Minimalist display shelving'
    ],
    materials: [
      'Carcass - BWP Plywood',
      'Finish - Charcoal Charcoal panels',
      'Hardware - Hafele',
      'Lighting - Wipro Smart LED strips'
    ]
  },
  {
    id: 'l-kitchen-faridabad',
    title: 'Sophisticated L-Kitchen',
    category: 'Kitchen',
    location: 'Faridabad',
    area: '180 sq ft',
    budget: '₹5-10 Lakhs',
    completionDate: 'August 2025',
    duration: '28 days',
    description: 'A masterfully planned L-shaped kitchen that optimizes the ergonomic work triangle. Combines high-gloss finishes with smart storage solutions for a clutter-free cooking environment.',
    thumbnail: '/images/L- Kitchen/ki-21-1763112242-jY0Qv.jpg',
    images: [
      '/images/L- Kitchen/ki-21-1763112242-jY0Qv.jpg',
      '/images/L- Kitchen/ki-27-1763112203-QB8Bo.jpg',
      '/images/L- Kitchen/ki-24-1763112223-vxkTX.jpg'
    ],
    features: [
      'Smart corner storage units (Magic Corner)',
      'High-gloss acrylic shutters',
      'Integrated profile handles',
      'Automated chimney system',
      'Deep drawer system for large cookware'
    ],
    materials: [
      'Countertop - Kalinga Quartz',
      'Shutters - Acrylic on Plywood',
      'Hardware - Blum Legrabox',
      'Appliances - Elica Kitchenware'
    ]
  },
  {
    id: 'u-kitchen-ghaziabad',
    title: 'Elegant U-Kitchen',
    category: 'Kitchen',
    location: 'Ghaziabad',
    area: '240 sq ft',
    budget: '₹10-20 Lakhs',
    completionDate: 'July 2025',
    duration: '35 days',
    description: 'A comprehensive U-shaped kitchen design perfect for large families. Offers expansive counter space and floor-to-ceiling storage for ultimate organization.',
    thumbnail: '/images/U- Kitchen/ki-22-1763112236-IMxCt.jpg',
    images: [
      '/images/U- Kitchen/ki-22-1763112236-IMxCt.jpg',
      '/images/U- Kitchen/ki-11-1763112303-A1e73.jpg',
      '/images/U- Kitchen/ki-25-1763112220-s3TiZ.jpg'
    ],
    features: [
      'Expandsive counter space on three sides',
      'Floor-to-ceiling larder unit',
      'Built-in appliance garage',
      'Overhead hydraulic cabinets',
      'Integrated waste management system'
    ],
    materials: [
      'Countertop - Brazilian Granite',
      'Carcass - HDHMR Board',
      'Hardware - Grass Dynapro',
      'Finish - Zero-fingerprint Matte Laminate'
    ]
  }
];

export const FEATURED_PROJECTS = PORTFOLIO_PROJECTS.filter(p =>
  ['luxury-island-kitchen', 'modern-2bhk-gurgaon', 'corporate-office-noida'].includes(p.id)
);
