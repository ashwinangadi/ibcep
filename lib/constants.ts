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
    rating: 5,
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
    rating: 8,
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
    rating: 9,
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

export const dummyCriteriaData = {
  maths: [
    {
      id: "Criteria A",
      title: "Mathematical Communication",
      score: 9,
      description: "Evaluates the effectiveness of mathematical communication in the coursework.",
      strengths: [
        "Clear and precise use of mathematical notation",
        "Logical structure in presenting mathematical arguments"
      ],
      improvements: [
        "Could provide more detailed explanations for complex mathematical concepts",
        "Consider adding more real-world context to abstract mathematical ideas"
      ]
    },
    {
      id: "Criteria B",
      title: "Problem-Solving Techniques",
      score: 6,
      description: "Assesses the application of problem-solving strategies and creativity in approach.",
      strengths: [
        "Demonstrates a variety of problem-solving techniques",
        "Shows creativity in approaching complex problems"
      ],
      improvements: [
        "Could explore alternative solutions more thoroughly",
        "Consider discussing the efficiency of different methods used"
      ]
    },
    {
      id: "Criteria C",
      title: "Use of Technology",
      score: 8,
      description: "Evaluates the appropriate and effective use of technology in mathematical exploration.",
      strengths: [
        "Skillful use of graphing calculators for visualization",
        "Effective implementation of programming for complex calculations"
      ],
      improvements: [
        "Could explore more advanced statistical software",
        "Consider using technology to validate manual calculations"
      ]
    }
  ],
  physics: [
    {
      id: "Criteria A",
      title: "Experimental Design",
      score: 9,
      description: "Assesses the quality and appropriateness of the experimental design.",
      strengths: [
        "Well-designed experiment with clear control of variables",
        "Appropriate selection of measurement techniques"
      ],
      improvements: [
        "Consider including more sophisticated error analysis",
        "Explore alternative experimental methods to validate results"
      ]
    },
    {
      id: "Criteria B",
      title: "Data Analysis and Interpretation",
      score: 3,
      description: "Evaluates the depth and accuracy of data analysis and interpretation.",
      strengths: [
        "Thorough analysis of collected data",
        "Insightful interpretation of results in relation to physical theories"
      ],
      improvements: [
        "Could incorporate more advanced statistical analysis",
        "Consider discussing limitations of the experimental setup more critically"
      ]
    },
    {
      id: "Criteria C",
      title: "Conceptual Understanding",
      score: 5,
      description: "Assesses the depth of understanding and application of physics concepts.",
      strengths: [
        "Demonstrates a strong grasp of fundamental physics principles",
        "Effectively applies concepts to real-world scenarios"
      ],
      improvements: [
        "Could explore more connections between different areas of physics",
        "Consider discussing recent advancements related to the topic"
      ]
    }
  ],
  chemistry: [
    {
      id: "Criteria A",
      title: "Laboratory Techniques",
      score: 1,
      description: "Evaluates the proficiency in carrying out chemical procedures and techniques.",
      strengths: [
        "Demonstrates skilled handling of laboratory equipment",
        "Shows attention to safety procedures and precautions"
      ],
      improvements: [
        "Could explore more advanced separation techniques",
        "Consider discussing the principles behind each technique used"
      ]
    },
    {
      id: "Criteria B",
      title: "Data Analysis and Evaluation",
      score: 9,
      description: "Assesses the quality of data analysis and critical evaluation of results.",
      strengths: [
        "Thorough analysis of chemical reactions and processes",
        "Critical evaluation of results in relation to existing theories"
      ],
      improvements: [
        "Could incorporate more sophisticated statistical analysis",
        "Consider discussing potential sources of systematic error"
      ]
    },
    {
      id: "Criteria C",
      title: "Conceptual Understanding and Application",
      score: 6,
      description: "Evaluates the depth of chemical knowledge and its application to the investigation.",
      strengths: [
        "Demonstrates a strong grasp of fundamental chemical concepts",
        "Effectively applies theoretical knowledge to practical situations"
      ],
      improvements: [
        "Could explore more connections between different areas of chemistry",
        "Consider discussing recent research relevant to the topic"
      ]
    }
  ],
  biology: [
    {
      id: "Criteria A",
      title: "Experimental Design and Methodology",
      score: 2,
      description: "Assesses the appropriateness and execution of biological investigation methods.",
      strengths: [
        "Well-designed experiment with appropriate controls",
        "Effective use of biological techniques and equipment"
      ],
      improvements: [
        "Could consider more variables in the experimental design",
        "Explore alternative methodologies to strengthen findings"
      ]
    },
    {
      id: "Criteria B",
      title: "Data Collection and Analysis",
      score: 6,
      description: "Evaluates the quality of data collection and depth of analysis in biological contexts.",
      strengths: [
        "Comprehensive data collection across multiple trials",
        "Thoughtful analysis of biological patterns and trends"
      ],
      improvements: [
        "Could incorporate more advanced statistical tests",
        "Consider discussing biological significance of the results more deeply"
      ]
    },
    {
      id: "Criteria C",
      title: "Conceptual Understanding and Application",
      score: 10,
      description: "Assesses the comprehension and application of core biological principles.",
      strengths: [
        "Demonstrates a strong understanding of biological systems",
        "Effectively applies biological concepts to real-world scenarios"
      ],
      improvements: [
        "Could explore more connections between different levels of biological organization",
        "Consider discussing recent advancements in the field related to the topic"
      ]
    }
  ],
};