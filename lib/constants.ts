export const courseworkTypes = [
  { value: "IA", label: "IA Example" },
  { value: "EE", label: "EE Example" },
  { value: "IO", label: "IO Example" },
  { value: "TOK", label: "TOK Example" },
];
export const tabData = [{ value: "all", label: "All" }, ...courseworkTypes];

export const subjects = ["Maths", "Physics", "Chemistry", "Biology"];

export const dummyCourseworkData = [
  {
    id: "1",
    title:
      "How does the temperature of a Copper pipe affect the time it takes a magnet to fall through it?",
    subject: "Physics HL",
    readTime: 18,
    wordCount: 2388,
    rating: 7,
    language: "English",
    type: "IA",
    description:
      "An investigation into electromagnetic induction and its relationship with temperature, using a copper pipe and magnet setup to explore Lenz's law and eddy currents.",
    image: "https://example.com/images/physics_magnet.jpg",
  },
  {
    id: "1",
    title: "The Role of Enzymes in Cellular Respiration",
    subject: "Biology HL",
    readTime: 22,
    wordCount: 2756,
    rating: 6,
    language: "English",
    type: "EE",
    description:
      "A comprehensive study of the various enzymes involved in the cellular respiration process, focusing on their specific functions and the factors affecting their activity.",
    image: "https://example.com/images/biology_enzymes.jpg",
  },
  {
    id: "1",
    title: "Analysis of Organic Compounds in Everyday Products",
    subject: "Chemistry SL",
    readTime: 15,
    wordCount: 2104,
    rating: 7,
    language: "Spanish",
    type: "IA",
    description:
      "An experimental investigation into the organic compounds present in common household products, using various chemical tests and spectroscopic techniques for identification and analysis.",
    image: "https://example.com/images/chemistry_organic.jpg",
  },
  {
    id: "1",
    title: "The Impact of AI on Modern Mathematics",
    subject: "Maths AA HL",
    readTime: 20,
    wordCount: 2542,
    rating: 6,
    language: "French",
    type: "IO",
    description:
      "An exploration of how artificial intelligence is transforming mathematical research, problem-solving, and education, with case studies on recent AI-driven mathematical discoveries.",
    image: "https://example.com/images/maths_ai.jpg",
  },
  {
    id: "1",
    title: "Ethical Implications of Genetic Engineering",
    subject: "TOK",
    readTime: 25,
    wordCount: 3012,
    rating: 7,
    language: "English",
    type: "TOK",
    description:
      "A critical examination of the ethical considerations surrounding genetic engineering technologies, discussing their potential benefits and risks from various philosophical perspectives.",
    image: "https://example.com/images/tok_ethics.jpg",
  },
];

export const criteriaData = [
  {
    id: "Criteria A",
    title: " Understanding Knowledge Questions",
    score: 9,
    description:
      "The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.",
    strengths: [
      "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
      "Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.",
    ],
    improvements: [
      "Could provide more specific examples to support the arguments.",
      "Might benefit from a deeper analysis of the implications of these disputes.",
    ],
  },
  {
    id: "Criteria B",
    title: "Understanding Knowledge Questions",
    score: 5,
    description:
      "The essay shows a partial understanding of the knowledge questions related to the prescribed title.",
    strengths: [
      "Identifies some relevant knowledge questions.",
      "Attempts to discuss disputes in different areas of knowledge.",
    ],
    improvements: [
      "Needs to develop a more comprehensive understanding of the knowledge questions.",
      "Should provide a more balanced analysis of disputes across different disciplines.",
    ],
  },
  {
    id: "Criteria C",
    title: "Understanding Knowledge Questions",
    score: 3,
    description:
      "The essay demonstrates a limited grasp of the knowledge questions associated with the prescribed title.",
    strengths: [
      "Recognizes that there are knowledge questions to be addressed.",
      "Makes some attempt to discuss disputes in knowledge claims.",
    ],
    improvements: [
      "Requires a much clearer focus on relevant knowledge questions.",
      "Needs to significantly improve the depth of analysis regarding disputes in different disciplines.",
    ],
  },
];
