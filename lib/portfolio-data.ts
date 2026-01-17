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
      '/images/Island Kitchen/ki-1-1763112227-Ov8Uo.jpg',
      '/images/Island Kitchen/ki-11-1763112216-Uy3Uw.jpg',
      '/images/Island Kitchen/ki-12-1763112215-lBMYB.jpg'
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
      '/images/home office/ho-12-1763110381-RVOcI.jpg'
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
      '/images/Walk In Wardrobe/w2-1696585850-Xm8Kl.jpg',
      '/images/Walk In Wardrobe/w3-1696585851-Np2Qr.jpg'
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
      '/images/living area/lr-13-1763103057-TbFcg.jpg'
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
      '/images/Parallel Kitchen/ki-14-1763112291-JmPQs.jpg',
      '/images/Parallel Kitchen/ki-15-1763112290-Kx7Rt.jpg'
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
      '/images/bedroom/mbr-12-1763111542-Qw9Xy.jpg'
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
      '/images/dining area/dr-12-1763110870-Lp4Mn.jpg',
      '/images/dining area/dr-1-1763110881-Xy5Qr.jpg'
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
      '/images/home office/ho-12-1763110381-RVOcI.jpg',
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
  }
];

export const FEATURED_PROJECTS = PORTFOLIO_PROJECTS.filter(p => 
  ['luxury-island-kitchen', 'modern-2bhk-gurgaon', 'corporate-office-noida'].includes(p.id)
);
