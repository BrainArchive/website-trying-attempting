
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  imageUrl: string;
  date: string;
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'ai-research-platform',
    title: 'AI Research Platform',
    description: 'Developed a comprehensive platform for AI researchers to collaborate, share findings, and accelerate innovation.',
    fullDescription: `
      This project was an ambitious undertaking to create a collaborative platform specifically designed for AI researchers. The platform enables seamless collaboration between research teams, provides tools for experiment tracking, and facilitates knowledge sharing.
      
      The main challenge was designing an interface that could accommodate the complex workflows of AI research while remaining intuitive and accessible. We implemented a custom visualization framework that makes it easy to share and understand experimental results.
      
      Working closely with researchers from leading institutions, we iterated on the design and functionality to ensure it met the needs of the community. The platform has since been adopted by several research groups and has contributed to accelerating innovation in the field.
    `,
    category: 'Software Development',
    imageUrl: 'https://images.unsplash.com/photo-1677442135968-6d89485542a2?q=80&w=2532&auto=format&fit=crop',
    date: 'January 2023',
    technologies: ['React', 'TypeScript', 'Python', 'TensorFlow', 'Docker'],
    link: 'https://example.com/ai-platform'
  },
  {
    id: 'sustainable-architecture',
    title: 'Sustainable Architecture Project',
    description: 'Led the design and implementation of an eco-friendly architectural solution for urban environments.',
    fullDescription: `
      This architectural project focused on creating sustainable solutions for dense urban environments. Working with a multidisciplinary team, I led the design and implementation of eco-friendly architectural elements that minimize environmental impact while maximizing functionality.
      
      We incorporated passive cooling systems, renewable energy generation, and sustainable materials throughout the design. Special attention was paid to creating green spaces that enhance biodiversity and improve the well-being of residents.
      
      The project has received recognition for its innovative approach to urban sustainability and has influenced several subsequent developments in the region. Most importantly, it has created a healthier living environment for the community while reducing energy consumption and carbon emissions.
    `,
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2574&auto=format&fit=crop',
    date: 'June 2022',
    technologies: ['Sustainable Design', 'Renewable Energy', 'Green Building', 'Urban Planning'],
  },
  {
    id: 'quantum-computing-research',
    title: 'Quantum Computing Research',
    description: 'Conducted groundbreaking research in quantum algorithms, contributing to advances in the field.',
    fullDescription: `
      This research project focused on developing novel quantum algorithms for optimization problems. Working at the intersection of computer science and quantum physics, I investigated approaches that could provide quantum advantage for industrially relevant problems.
      
      The research involved theoretical development, simulation, and collaboration with experimental teams to validate the approaches. We were able to demonstrate a significant improvement in solution quality for certain classes of problems when compared to classical methods.
      
      The findings from this research have been published in peer-reviewed journals and presented at international conferences. The work contributes to the broader effort of identifying practical applications for near-term quantum computers.
    `,
    category: 'Academic Research',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2370&auto=format&fit=crop',
    date: 'March 2022',
    technologies: ['Quantum Computing', 'Algorithm Design', 'Python', 'Qiskit', 'Linear Algebra'],
    link: 'https://example.com/quantum-research'
  },
  {
    id: 'financial-inclusion-initiative',
    title: 'Financial Inclusion Initiative',
    description: 'Developed and implemented a comprehensive strategy to increase financial inclusion in underserved communities.',
    fullDescription: `
      This initiative aimed to bridge the gap in financial services access for underserved communities. Working with local organizations and financial institutions, we developed and implemented a comprehensive strategy that combined technology solutions, education programs, and policy advocacy.
      
      A key component was the development of a mobile banking application specifically designed for users with limited financial literacy. The app incorporated visual guides, simple language, and step-by-step tutorials to help users navigate financial services.
      
      The initiative also included community workshops on financial literacy and entrepreneurship. Over the course of two years, the program reached more than 10,000 individuals and helped establish over 500 small businesses through microloans and mentorship.
    `,
    category: 'Social Impact',
    imageUrl: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2670&auto=format&fit=crop',
    date: 'September 2021',
    technologies: ['Mobile Development', 'Financial Services', 'Community Engagement', 'Impact Assessment'],
  },
  {
    id: 'healthcare-ai',
    title: 'Healthcare AI System',
    description: 'Designed and implemented an AI system to assist medical professionals in diagnosis and treatment planning.',
    fullDescription: `
      This project involved the development of an AI system designed to support healthcare professionals in diagnosis and treatment planning. Working closely with medical experts, we identified key areas where AI assistance could improve patient outcomes while respecting the crucial role of human judgment in medical decision-making.
      
      The system uses computer vision and natural language processing to analyze medical images and clinical notes, providing relevant information and suggestions to healthcare providers. A particular focus was placed on ensuring the system's recommendations were explainable and transparent.
      
      After rigorous testing and validation, the system was deployed in a clinical setting where it has helped improve diagnostic accuracy and reduce the time required for treatment planning. The project has been recognized for its ethical approach to AI in healthcare and its positive impact on patient care.
    `,
    category: 'Healthcare Technology',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop',
    date: 'December 2020',
    technologies: ['Machine Learning', 'Computer Vision', 'NLP', 'Healthcare Informatics', 'Python'],
    link: 'https://example.com/healthcare-ai'
  },
  {
    id: 'digital-transformation',
    title: 'Enterprise Digital Transformation',
    description: 'Led a comprehensive digital transformation initiative for a Fortune 500 company, modernizing operations and enhancing customer experience.',
    fullDescription: `
      This enterprise-scale project involved leading a digital transformation initiative for a Fortune 500 company. The goal was to modernize operations, enhance customer experience, and position the company for future growth in an increasingly digital marketplace.
      
      The transformation encompassed multiple aspects of the business, including customer-facing systems, internal workflows, data infrastructure, and organizational culture. Working with stakeholders across departments, we developed a phased approach that allowed for incremental improvements while maintaining business continuity.
      
      Key achievements included the implementation of a new cloud-based customer relationship management system, the development of an API-first architecture to enable agility and integration, and the establishment of data analytics capabilities that provide actionable insights for decision-makers.
      
      The transformation has resulted in a 30% improvement in operational efficiency, a significant enhancement in customer satisfaction metrics, and the ability to bring new products to market 40% faster than before.
    `,
    category: 'Business Transformation',
    imageUrl: 'https://images.unsplash.com/photo-1664575196044-195f135295df?q=80&w=2670&auto=format&fit=crop',
    date: 'August 2020',
    technologies: ['Change Management', 'Cloud Computing', 'Process Redesign', 'Data Analytics', 'Agile Methodology'],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
