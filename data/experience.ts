import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'senior-swe-bjit',
    role: 'Senior Software Engineer',
    company: 'BJIT Ltd',
    location: 'Dhaka',
    duration: 'Jul 2024 – Present',
    startDate: '2024-07',
    endDate: 'present',
    highlights: [
      'Architected and developed a high-traffic real estate portal for DMCI Homes (Philippines), building scalable backend systems using Node.js, Express.js, Redis, BullMQ, and AWS.',
      'Engineered optimized, asynchronous API integrations with external third-party services to ensure seamless data flow and high availability for enterprise clients.',
      'Built robust, client-facing frontends and an extensive Admin Panel using React.js - delivering the Client Registration Form (CRF) and Reservation Agreement (RA) platforms.',
      'Developed an AI-powered telemedicine platform (AMED) integrating Zoom APIs to assist medical professionals in predicting mental health scores (HAMD, YMRS) using React.js, Node.js, and serverless AWS architecture.',
      'Designed scalable relational database schemas using PostgreSQL, MySQL, and Prisma ORM, significantly improving query performance and data integrity.',
      'Spearheaded the development of a gaming item trading marketplace, owning end-to-end delivery from RESTful API architecture to responsive frontend integration.',
    ],
  },
  {
    id: 'swe-bjit',
    role: 'Software Engineer',
    company: 'BJIT Ltd',
    location: 'Dhaka',
    duration: 'Apr 2021 – Jun 2024',
    startDate: '2021-04',
    endDate: '2024-06',
    highlights: [
      'Developed and optimized dynamic UI architectures using React.js and Next.js, resolving complex interface bottlenecks and ensuring cross-browser compatibility.',
      'Built enterprise blockchain solutions utilizing Hyperledger Fabric and Ethereum, including engineering a custom Mozilla Firefox extension integrated with Fabric v1.4 and v2.4.',
      'Streamlined team collaboration and testing by meticulously documenting RESTful APIs using Postman and ensuring strict version control through Git.',
      "Secured 3rd place overall in BJIT's highly competitive Common & Blockchain (Ethereum) Engineering Training program.",
    ],
  },
];
