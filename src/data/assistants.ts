export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone_number: string;
  email: string;
  website: string;
}

export interface Assistant {
  id: string;
  name: string;
  role: string;
  description: string;
  image_url: string;
  skills: string[];
  faqs: FAQ[];
  contact_info: ContactInfo;
  avatar?: string; // Emoji fallback
}

export const assistants: Assistant[] = [
  {
    id: "tom",
    name: "Tom",
    role: "Phone",
    description:
      "Tom is your go-to assistant for handling all phone-related inquiries and communications. Whether you need help with call management, customer support, or setting up conference calls, Tom has got you covered.",
    image_url: "https://example.com/images/tom.png",
    avatar: "👨‍💼",
    skills: [
      "Answering incoming calls",
      "Making outgoing calls",
      "Managing call logs",
      "Setting up conference calls",
      "Providing customer support",
    ],
    faqs: [
      {
        question: "How can I contact Tom?",
        answer:
          "You can reach Tom by dialing the main office number or using the contact form on our website.",
      },
      {
        question: "Does Tom handle international calls?",
        answer:
          "Yes, Tom can assist with both domestic and international calls.",
      },
    ],
    contact_info: {
      phone_number: "+1-800-123-4567",
      email: "tom@yourcompany.com",
      website: "https://www.yourcompany.com/contact/tom",
    },
  },
  {
    id: "lou",
    name: "Lou",
    role: "Accountant",
    description:
      "Lou is your financial wizard, handling all accounting tasks with precision. From managing invoices to preparing tax reports, Lou ensures your finances are in order.",
    image_url: "https://example.com/images/lou.png",
    avatar: "👩‍💼",
    skills: [
      "Invoice management",
      "Tax preparation",
      "Financial reporting",
      "Budget planning",
      "Expense tracking",
    ],
    faqs: [
      {
        question: "Can Lou prepare my tax report?",
        answer:
          "Yes, Lou can help you prepare accurate tax reports based on your financial records.",
      },
      {
        question: "How often should I update Lou with my financial data?",
        answer:
          "It's recommended to update Lou monthly to ensure accurate financial tracking.",
      },
    ],
    contact_info: {
      phone_number: "+1-800-987-6543",
      email: "lou@yourcompany.com",
      website: "https://www.yourcompany.com/contact/lou",
    },
  },
  {
    id: "alex",
    name: "Alex",
    role: "SEO",
    description:
      "Alex is your SEO expert, optimizing your online presence to drive organic traffic. From keyword research to content optimization, Alex helps boost your visibility.",
    image_url: "https://example.com/images/alex.png",
    avatar: "👨‍💻",
    skills: [
      "Keyword research",
      "Content optimization",
      "Backlink analysis",
      "Local SEO",
      "Competitor analysis",
    ],
    faqs: [
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "SEO results typically take 3-6 months to become visible, depending on various factors.",
      },
      {
        question: "Can Alex help improve my website's ranking?",
        answer:
          "Yes, Alex can analyze your website and implement strategies to improve its search engine rankings.",
      },
    ],
    contact_info: {
      phone_number: "+1-800-555-1234",
      email: "alex@yourcompany.com",
      website: "https://www.yourcompany.com/contact/alex",
    },
  },
  {
    id: "emma",
    name: "Emma",
    role: "Marketing",
    description:
      "Emma is your marketing guru, crafting strategies to grow your brand and reach your target audience. From social media campaigns to email marketing, Emma has it all covered.",
    image_url: "https://example.com/images/emma.png",
    avatar: "👩‍🚀",
    skills: [
      "Social media marketing",
      "Email marketing",
      "Content creation",
      "Campaign management",
      "Analytics tracking",
    ],
    faqs: [
      {
        question: "What platforms does Emma support for marketing?",
        answer:
          "Emma supports Facebook, Instagram, Twitter, LinkedIn, and more for comprehensive marketing campaigns.",
      },
      {
        question: "Can Emma help with lead generation?",
        answer:
          "Yes, Emma can design targeted campaigns to generate high-quality leads for your business.",
      },
    ],
    contact_info: {
      phone_number: "+1-800-555-4321",
      email: "emma@yourcompany.com",
      website: "https://www.yourcompany.com/contact/emma",
    },
  },
  {
    id: "sam",
    name: "Sam",
    role: "Events Direction",
    description:
      "Sam is your event planner, organizing and executing events with professionalism and flair. From small meetings to large conferences, Sam ensures everything runs smoothly.",
    image_url: "https://example.com/images/sam.png",
    avatar: "🧑‍💼",
    skills: [
      "Event planning",
      "Venue selection",
      "Logistics management",
      "Speaker coordination",
      "Budget management",
    ],
    faqs: [
      {
        question: "Can Sam help with virtual events?",
        answer:
          "Yes, Sam can plan and execute virtual events with advanced technology solutions.",
      },
      {
        question: "How far in advance should I book Sam for an event?",
        answer:
          "It's best to book Sam at least 3 months in advance for larger events to secure venues and resources.",
      },
    ],
    contact_info: {
      phone_number: "+1-800-555-7890",
      email: "sam@yourcompany.com",
      website: "https://www.yourcompany.com/contact/sam",
    },
  },
  {
    id: "olivia",
    name: "Olivia",
    role: "Customer Relationship",
    description:
      "Olivia is your customer relationship specialist, ensuring exceptional service and satisfaction for all clients. From resolving complaints to building long-term relationships, Olivia excels.",
    image_url: "https://example.com/images/olivia.png",
    avatar: "👩‍💻",
    skills: [
      "Customer support",
      "Complaint resolution",
      "Relationship building",
      "Feedback management",
      "Client retention strategies",
    ],
    faqs: [
      {
        question: "How can Olivia help improve customer satisfaction?",
        answer:
          "Olivia can implement personalized service strategies and address customer concerns promptly.",
      },
      {
        question: "Does Olivia handle international customers?",
        answer:
          "Yes, Olivia can assist customers worldwide with multilingual support.",
      },
    ],
    contact_info: {
      phone_number: "+1-800-555-9876",
      email: "olivia@yourcompany.com",
      website: "https://www.yourcompany.com/contact/olivia",
    },
  },
  {
    id: "jack",
    name: "Jack",
    role: "Financing",
    description:
      "Jack is your financing expert, providing tailored financial solutions to meet your business needs. From loans to investment advice, Jack ensures you have the capital you require.",
    image_url: "https://example.com/images/jack.png",
    avatar: "👨‍💻",
    skills: [
      "Loan processing",
      "Investment advice",
      "Financial planning",
      "Risk assessment",
      "Negotiation with lenders",
    ],
    faqs: [
      {
        question: "Can Jack help with startup funding?",
        answer:
          "Yes, Jack can guide you through various funding options suitable for startups.",
      },
      {
        question: "How long does it take to secure financing?",
        answer:
          "The timeline depends on the complexity of the financing request, but Jack can provide an estimate after reviewing your application.",
      },
    ],
    contact_info: {
      phone_number: "+1-800-555-3456",
      email: "jack@yourcompany.com",
      website: "https://www.yourcompany.com/contact/jack",
    },
  },
  {
    id: "sophia",
    name: "Sophia",
    role: "CSR",
    description:
      "Sophia is your CSR (Corporate Social Responsibility) advisor, helping your company make a positive impact on society and the environment. From community outreach to sustainability initiatives, Sophia leads the way.",
    image_url: "https://example.com/images/sophia.png",
    avatar: "👩‍🎓",
    skills: [
      "Community outreach",
      "Sustainability planning",
      "Volunteer program management",
      "Impact measurement",
      "Grant writing",
    ],
    faqs: [
      {
        question: "How can CSR benefit my company?",
        answer:
          "CSR enhances your company's reputation, builds trust with stakeholders, and contributes to long-term sustainability.",
      },
      {
        question: "Does CSR involve financial commitments?",
        answer:
          "While some CSR activities may require financial investments, many initiatives can be implemented with minimal costs.",
      },
    ],
    contact_info: {
      phone_number: "+1-800-555-6789",
      email: "sophia@yourcompany.com",
      website: "https://www.yourcompany.com/contact/sophia",
    },
  },
  {
    id: "daniel",
    name: "Daniel",
    role: "Recruitment",
    description:
      "Daniel is your recruitment specialist, finding top talent to fuel your company's growth. From sourcing candidates to conducting interviews, Daniel ensures you hire the right people.",
    image_url: "https://example.com/images/daniel.png",
    avatar: "👨‍🏫",
    skills: [
      "Candidate sourcing",
      "Interview coordination",
      "Job posting",
      "Recruitment strategy",
      "Onboarding support",
    ],
    faqs: [
      {
        question: "How long does it take to fill a position?",
        answer:
          "The time to fill a position varies based on the role and candidate pool, but Daniel works efficiently to minimize delays.",
      },
      {
        question: "Can Daniel help with internships?",
        answer:
          "Yes, Daniel can manage internship programs and recruit qualified interns.",
      },
    ],
    contact_info: {
      phone_number: "+1-800-555-2345",
      email: "daniel@yourcompany.com",
      website: "https://www.yourcompany.com/contact/daniel",
    },
  },
];
