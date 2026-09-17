export const GOOGLE_CALENDAR_LINK = "https://calendar.app.google/antonioherrera";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/antonioherrera.mundus?igsh=cjVuaGV0emVwYnp4&utm_source=qr",
  youtube: "https://youtube.com/@antonioherrera.mundus?si=12-Fng0GHvItSX2-",
  spotify: "https://open.spotify.com/artist/0oKlB9ESgXx9XMeqolUre6?si=brftvhePSoiH_-zHBn5YSA",
  boutique: "https://antonioherrera.shop/",
  mediaKit: "https://drive.google.com/drive/folders/17zF5Ly85M9FZqljwzYJHKgjZK63YD2zZ?usp=sharing",
  contactEmail: "contact@herrdesigncollective.com",
  collaborationEmail: "antonio.herrera@herrdesigncollective.com?subject=Collaboration%20Proposal",
  managementEmail: "management@antonioherrera.ch", // TODO until confirmed
  bookingEmail: "booking@antonioherrera.ch", // TODO until confirmed
  pressEmail: "press@antonioherrera.ch", // TODO until confirmed
};

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  tag: string;
}

export interface VideoTestimonial {
  title: string;
  role: string;
  playbackSrc?: string;
}

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    title: "Isabel A.",
    role: "Brand Strategy Consultant",
  },
  {
    title: "Toni-Ann O.",
    role: "Photographer & Filmmaker",
  },
  {
    title: "Donika P.",
    role: "Experience Designer",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "isabel-a",
    name: "Isabel A.",
    role: "Brand Strategy Consultant",
    quote: "You all are architects of unforgettable happy moments. Thank you for letting us celebrate with you. Great people in this group. I laughed and shouted and danced so much. My heart is so happy.",
    tag: "music"
  },
  {
    id: "toni-ann-o",
    name: "Toni-Ann O.",
    role: "Photographer and Filmmaker",
    quote: "Best event ever in life. Really an amazing night, dear. Thanks for being unapologetically authentic and for taking us on that journey with you.",
    tag: "music"
  },
  {
    id: "donika-p",
    name: "Donika P.",
    role: "Experience Designer",
    quote: "Best. Party. Ever. I still can't believe it. It was like a magical dream. Thank you so much.",
    tag: "music"
  },
  {
    id: "clifford-l",
    name: "Clifford L.",
    role: "Stylist and Image Consultant",
    quote: "An unforgettable evening celebrating food, fashion, friendship and pure fabulousness. Surrounded by inspiring guests and the incredible creative team, we experienced a truly exclusive fusion of art and design. We had a ball.",
    tag: "music"
  },
  {
    id: "paulina-z",
    name: "Paulina Z.",
    role: "Creative Technologist",
    quote: "We absolutely adore you. The experience was so extraordinary that even my grandchildren won't believe I once attended a party like this. It was unforgettable in every sense.",
    tag: "music"
  },
  {
    id: "sarah-o",
    name: "Sarah O.",
    role: "Lecturer",
    quote: "I was so amazed by your performance. I was speechless afterwards. It was great. You are sooo talented. Thank you.",
    tag: "performance"
  },
  {
    id: "stefan-k",
    name: "Stefan K.",
    role: "Finance Executive",
    quote: "I felt alive and people loved it.",
    tag: "executive"
  },
  {
    id: "thiago-z",
    name: "Thiago Z.",
    role: "Professional Services",
    quote: "It was very professional, I will come again",
    tag: "services"
  },
  {
    id: "andreas-s",
    name: "Andreas S.",
    role: "Entrepreneur, CIO & Family Office",
    quote: "You are multi-skilled. I liked the combination of the talk, the design exhibition and the music performance. Thanks again for your event invitation. It was definitely a highlight of the year-end.",
    tag: "music"
  },
  {
    id: "isabel-g",
    name: "Isabel G.",
    role: "Entrepreneur",
    quote: "I know you organise innovative, creative events that step outside the ordinary. I love your work.",
    tag: "events"
  }
];

export interface PartnerLogo {
  name: string;
  logoSrc?: string;
  logoUrl?: string;
  invert?: boolean;
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  {
    name: "IKEA",
    logoSrc: "ikea-logo.png",
    logoUrl: "https://res.cloudinary.com/df6nnksd2/image/upload/v1779403089/ah/company-logos/ikea-logo.png"
  },
  {
    name: "SRF",
    logoSrc: "srf-logo.svg.png",
    logoUrl: "https://res.cloudinary.com/df6nnksd2/image/upload/v1779443819/ah/company-logos/srf-logo.svg.png"
  },
  {
    name: "ZHdK",
    logoSrc: "ZHdK-Logo.png",
    logoUrl: "https://res.cloudinary.com/df6nnksd2/image/upload/v1779445867/ah/company-logos/ZHdK-Logo.png"
  },
  {
    name: "Swisscom",
    logoSrc: "swisscom-logo.png",
    logoUrl: "https://res.cloudinary.com/df6nnksd2/image/upload/v1779402663/ah/company-logos/swisscom-logo.png"
  },
  {
    name: "ZZZ",
    logoSrc: "ZZZ-Logo.webp",
    logoUrl: "https://res.cloudinary.com/df6nnksd2/image/upload/v1779395175/ah/company-logos/ZZZ-Logo.webp"
  },
  {
    name: "FIFA",
    logoSrc: "FIFA-logo.png",
    logoUrl: "https://res.cloudinary.com/df6nnksd2/image/upload/v1779404216/ah/company-logos/FIFA-logo.png"
  },
  {
    name: "ZDW",
    logoSrc: "ZDW_Logo_below15mm-height.png",
    logoUrl: "https://res.cloudinary.com/df6nnksd2/image/upload/v1789566162/ZDW_Logo_below15mm-height.png",
    invert: true
  }
];

export interface MusicProject {
  id: string;
  title: string;
  description: string;
  discipline: string;
  year: string;
  venue?: string;
}

export const MUSIC_PROJECTS: MusicProject[] = [
  {
    id: "vocal-live-zurich",
    title: "Vocal & Acoustic Live Curation",
    description: "An intimate live experience blending vocal performance, organic rhythms, and custom light installations.",
    discipline: "Live Performance",
    year: "2026",
    venue: "Zurich Performance Hall"
  },
  {
    id: "experimental-resonance",
    title: "Acoustic Resonance & Soundscapes",
    description: "An experimental music set exploring spatial audio-visual installations and vocal storytelling.",
    discipline: "Artistic Sound Design",
    year: "2025",
    venue: "HERR Design Collective"
  },
  {
    id: "piano-improvisations",
    title: "Ambient Voice & Piano Sessions",
    description: "A recorded collection of minimalist piano improvisations accompanying live poetry readings.",
    discipline: "Recording Project",
    year: "2025",
    venue: "Swiss Art Alliance"
  }
];

export const CONTENT = {
  cta: "Schedule a consultation", // Global CTA text
  heroTitle: "Discover your genuine happiness.",
  heroSub: "Transform your life into a profound experience by building genuine connections.",
  musicHeroTitle: "Connect through music",
  musicHeroSub: "Transform your events into joyous experiences that build genuine connections.",
  showreelTitle: "Showreel",
  showreelSub: "Experience the rhythm, the light, and the pure energy of live connection.",
  partnersTitle: "Trusted by",
  heroCta: "Begin a new journey",
  banner1: "Visionary transformation that opens doors without pushing.",
  banner2: "Intentional expression woven into every object and act.",
  banner3: "Emotional resonance that lingers long after the moment ends.",
  promoTitle: "Life is too short to be stuck and miss the fun.",
  promoSub: "Problems are not fun. Don't let anything keep you back. You were designed for more.",
  promoCta: "Begin a new journey",
  featuresTitle: "Take control of your life journey.",
  featuresSub: "Have you ever experienced the following in your personal life...",
  feature1Title: "Identity.",
  feature1Desc: "Not knowing what you actually want — so you shape yourself around other people’s expectations and wonder why nothing feels right.",
  feature2Title: "Relationships.",
  feature2Desc: "Avoiding difficult conversations until resentment builds. The relationship doesn’t break from conflict — it breaks from silence.",
  feature3Title: "Work.",
  feature3Desc: "Confusing professional performance with personal worth. When the role defines the person, losing the role means losing yourself.",
  feature4Title: "Spaces.",
  feature4Desc: "Living or working in environments that were designed for a previous version of your life. The space keeps reinforcing who you were, not who you’re becoming.",
  feature5Title: "Leadership.",
  feature5Desc: "Leading through control rather than trust. It delivers short-term results but slowly empties the room of the people worth keeping.",
  howTitle: "How to begin the new life journey",
  howStep1: "Click on Register",
  howStep2: "Fill out the form and hit Send",
  howStep3: "We will notify you if you are in",
  stopTitle: "Stop stressing about life. Connect, sing and dance with me.",
  stopText1: "You already know how to perform under pressure. You’ve mastered the serious side of life — the decisions, the discipline, the weight of getting it right. But when was the last time you let yourself be light?",
  stopText2: "Not distracted. Not numbing. Actually light — the kind where your body moves before your mind can object, where your voice joins in before you’ve decided whether you’re any good, where a room full of strangers becomes a room full of people you’d happily see again.\n\nJoy isn’t a reward for finishing your to-do list. It’s a practice. And like any practice, it gets easier the moment you stop performing and start participating. This is what I do. I create spaces where ambitious, intelligent people remember that connection, music, and movement aren’t extras. They’re the point. You don’t need to be good at it. You just need to show up willing.",
  continueReading: "Continue reading... >",
  registerNow: "Register now",
  pdfTitle: "5 ways to transform your life: Roadmap",
  pdfSub: "Download my free PDF and discover how your can enjoy your life more.",
  pdfCta: "Download PDF",
  unlockTitle: "Enjoy your life to the fullest.",
  footerShop: "Boutique",
  footerAbout: "About",
  footerBooking: "MANAGEMENT",
  footerCollections: "Collections",
  footerNewRoyal: "The New Royal",
  footerChangingEmotions: "Changing Emotions",
  footerSoftRoyal: "Soft Royal",
  footerStory: "Story",
  footerMediaKit: "Media Kit",
  footerContact: "Contact Management",
  footerBookConversation: "Propose collaboration",
  footerLanguages: "Languages",
  footerFollow: "Follow, Watch, Listen",
  tickerText: "Happy to serve you",
  testimonialsTitle: "Testimonials",
  designTitle: "Under construction",
  designSubtitle: "I am designing a new creative and immersive space. Something extraordinary is being crafted.",
  designCta: "Join the VIP Waitlist",
  designEmailPlaceholder: "Enter your email address...",
  designNamePlaceholder: "Your elite name...",
  designSuccessText: "Thank you! You are on the registry for the next design evolution.",
  designBackCta: "Back to Home",
  expTitle: "I know how frustrating is to not move forward in life. I was there.",
  exp1: "More than 10 years of experience",
  exp2: "More than 50 engagements",
  exp3: "More than 20 countries visited",
};

export interface CVItem {
  yearOrPeriod: string;
  title: string;
  institutionOrContext: string;
  details?: string;
}

export const EDUCATION_CV: CVItem[] = [
  {
    yearOrPeriod: "TODO (Year)",
    title: "Master of Arts (MA)",
    institutionOrContext: "Zurich University of the Arts (ZHdK)",
    details: "Focusing on spatial strategies, sensory aesthetics, and interaction design."
  },
  {
    yearOrPeriod: "TODO (Year)",
    title: "Master of Arts / Postgraduate Studies",
    institutionOrContext: "Royal College of Art (RCA)",
    details: "Expanding cross-disciplinary visual communication and performance curations."
  },
  {
    yearOrPeriod: "TODO (Year)",
    title: "Design MBA / Strategic Leadership",
    institutionOrContext: "TODO (Institution)",
    details: "Combining design thinking with corporate brand architectures and business operations."
  }
];

export const PRACTICE_HIGHLIGHTS: CVItem[] = [
  {
    yearOrPeriod: "2016 – Present",
    title: "Founder & Creative Director",
    institutionOrContext: "HERR Design Collective (Zurich, Switzerland)",
    details: "Directing bespoke brand identities, full-stack Next.js web applications, and premium physical layout consultations."
  },
  {
    yearOrPeriod: "2014 – Present",
    title: "Solo Performing Vocalist & Curation Lead",
    institutionOrContext: "International Concert Halls & Private Assemblies",
    details: "Developing live acoustic loops, ambient resonance structures, and vocal journeys for high-stakes leaders across 20+ countries."
  },
  {
    yearOrPeriod: "2020 – 2024",
    title: "Senior Identity Consultant & Architectural Lead",
    institutionOrContext: "TODO (Corporate Brand Group)",
    details: "Overhauling physical layouts, typographic blueprints, and high-performance frontend code architectures."
  }
];

export const CREDENTIALS: string[] = [
  "Bespoke Swiss Typographic Alignment & Modular Grid Expertise",
  "High-Performance Server-Side & Next.js App Router Architecture Specialist",
  "Zero-Judgment Vocal Acoustic Resonance & Live Curation Director",
  "Zurich & International Brand Transformation Advisor"
];

