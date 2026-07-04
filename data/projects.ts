import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'dmci-homes-real-estate-portal',
    title: 'DMCI Homes Real Estate Portal',
    shortDescription:
      "A high-traffic real estate portal for one of the Philippines' premier property developers, featuring scalable backend systems and seamless third-party integrations.",
    description:
      "Architected and developed a comprehensive real estate portal for DMCI Homes, one of the Philippines' leading property developers. The platform handles thousands of daily visitors, property listings, client registrations, and reservation agreements with enterprise-grade reliability.",
    image: '/projects/dmci-homes.png',
    techStack: [
      'Node.js',
      'Express.js',
      'React.js',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'AWS',
      'Prisma ORM',
    ],
    uniquePoints:
      'This project demonstrates the ability to build production-grade systems at scale — handling high traffic, complex business logic for property reservations, and seamless integration with multiple third-party services while maintaining sub-second response times.',
    keyFeatures: [
      'Client Registration Form (CRF) platform with multi-step validation',
      'Reservation Agreement (RA) digital workflow system',
      'Extensive Admin Panel for property and client management',
      'Asynchronous job queues with BullMQ for background processing',
      'Redis caching layer for optimized API response times',
      'Third-party service integrations with fault-tolerant patterns',
      'Role-based access control and secure authentication',
    ],
    liveLink: '#', // TODO: replace with actual link
    githubLink: '#', // TODO: replace with actual link
    challenges: [
      'Designing a scalable architecture to handle unpredictable traffic spikes during property launches and promotions.',
      'Integrating with multiple external APIs with varying reliability and response times, requiring circuit breaker patterns.',
      'Implementing complex business rules for the reservation flow while maintaining a clean, maintainable codebase.',
      'Optimizing database queries for large datasets with complex relational structures across properties, clients, and agreements.',
    ],
    futureImprovements: [
      'Implement real-time notifications using WebSockets for instant updates on reservation status changes.',
      'Add AI-powered property recommendations based on user browsing behavior and preferences.',
      'Integrate analytics dashboards for sales teams to track conversion metrics in real-time.',
      'Implement multi-language support for broader market reach across Southeast Asia.',
    ],
  },
  {
    slug: 'amed-telemedicine-platform',
    title: 'AMED Telemedicine Platform',
    shortDescription:
      'An AI-powered telemedicine platform integrating Zoom APIs to assist doctors in predicting clinical mental health scores using serverless AWS architecture.',
    description:
      'Developed a cutting-edge AI-powered telemedicine platform (AMED) that assists medical professionals in predicting clinical mental health scores (HAMD, YMRS) through video consultations. The platform leverages serverless AWS architecture for cost efficiency and scalability.',
    image: '/projects/amed-telemedicine.png',
    techStack: [
      'React.js',
      'Node.js',
      'AWS Lambda',
      'AWS Cognito',
      'CloudWatch',
      'Zoom API',
      'PostgreSQL',
    ],
    uniquePoints:
      'Combines AI/ML with telemedicine — a project that demonstrates working at the intersection of healthcare technology and artificial intelligence, solving real problems for medical professionals while handling sensitive patient data securely.',
    keyFeatures: [
      'AI-driven mental health score predictions (HAMD, YMRS scales)',
      'Seamless Zoom video integration for doctor-patient consultations',
      'Serverless architecture with AWS Lambda for auto-scaling',
      'Secure authentication via AWS Cognito with HIPAA considerations',
      'Real-time monitoring and logging with CloudWatch',
      'Patient history tracking and clinical progress visualization',
      'Role-based dashboards for doctors, patients, and administrators',
    ],
    liveLink: '#', // TODO: replace with actual link
    githubLink: '#', // TODO: replace with actual link
    challenges: [
      'Integrating Zoom SDK within a custom React interface while maintaining consistent UX across devices.',
      'Ensuring data security and privacy compliance for sensitive medical/mental health records.',
      'Designing the serverless architecture to handle variable loads from concurrent video sessions.',
      'Coordinating real-time data flow between AI prediction models and the frontend display layer.',
    ],
    futureImprovements: [
      'Expand AI models to cover additional mental health assessment scales.',
      'Implement real-time sentiment analysis during video consultations.',
      'Add multi-language support for broader clinical adoption.',
      'Build a mobile application for improved patient accessibility.',
    ],
  },
  {
    slug: 'blockchain-firefox-extension',
    title: 'Hyperledger Fabric Browser Extension',
    shortDescription:
      'A custom Mozilla Firefox extension integrated with Hyperledger Fabric v1.4 and v2.4 for enterprise blockchain interactions directly from the browser.',
    description:
      'Engineered a custom Mozilla Firefox browser extension that enables seamless interaction with Hyperledger Fabric blockchain networks directly from the browser. This enterprise solution supports both Fabric v1.4 and v2.4, allowing users to invoke chaincode, query ledger state, and manage digital identities without leaving their workflow.',
    image: '/projects/blockchain-extension.png',
    techStack: [
      'JavaScript',
      'Hyperledger Fabric',
      'Ethereum',
      'WebExtension API',
      'Node.js',
      'Docker',
    ],
    uniquePoints:
      'A rare project bridging browser extension development with enterprise blockchain — demonstrating deep understanding of both web platform APIs and distributed ledger technology, resulting in a tool that simplifies complex blockchain operations for non-technical users.',
    keyFeatures: [
      'Direct interaction with Hyperledger Fabric networks from Firefox',
      'Support for both Fabric v1.4 and v2.4 chaincode invocation',
      'Digital identity and certificate management within the extension',
      'Ledger state querying with formatted results display',
      'Transaction submission and real-time status tracking',
      'Secure key storage leveraging browser security APIs',
      'Intuitive UI for non-blockchain-savvy enterprise users',
    ],
    liveLink: '#', // TODO: replace with actual link
    githubLink: '#', // TODO: replace with actual link
    challenges: [
      'Bridging the gap between browser extension security sandboxing and blockchain network communication.',
      'Supporting multiple Fabric versions with different SDK requirements in a single extension.',
      'Managing cryptographic materials securely within the browser environment.',
      'Creating an intuitive UX for complex blockchain operations that non-technical users can understand.',
    ],
    futureImprovements: [
      'Port the extension to Chrome/Chromium-based browsers using Manifest V3.',
      'Add support for Hyperledger Fabric v2.5+ and newer chaincode lifecycle.',
      'Implement transaction history visualization with filtering capabilities.',
      'Build a companion admin dashboard for network operators.',
    ],
  },
  {
    slug: 'gaming-item-trading-marketplace',
    title: 'Gaming Item Trading Marketplace',
    shortDescription:
      'A full-stack marketplace for trading gaming items, with end-to-end ownership from RESTful API architecture to responsive frontend integration.',
    description:
      'Spearheaded the development of a gaming item trading marketplace that enables gamers to buy, sell, and trade in-game items securely. Owned the end-to-end delivery from RESTful API architecture to responsive frontend integration, delivering a polished product that handles real-time inventory and transactions.',
    image: '/projects/gaming-marketplace.png',
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Redis',
      'Tailwind CSS',
      'REST API',
    ],
    uniquePoints:
      'Full ownership of a complex marketplace system from architecture to deployment — demonstrating product thinking, real-time data handling, and the ability to build trust-critical platforms where users exchange items of real monetary value.',
    keyFeatures: [
      'Real-time inventory management and item listing system',
      'Secure trading mechanism with escrow-like transaction flow',
      'User reputation and review system for trust building',
      'Advanced search and filtering with category-based browsing',
      'Responsive design optimized for gaming community demographics',
      'RESTful API with comprehensive documentation',
      'Admin moderation tools for fraud detection and dispute resolution',
    ],
    liveLink: '#', // TODO: replace with actual link
    githubLink: '#', // TODO: replace with actual link
    challenges: [
      'Designing a secure trading system that prevents fraud while maintaining smooth UX for legitimate users.',
      'Handling real-time inventory updates across concurrent sessions without race conditions.',
      'Building a scalable search system that performs well with large item catalogs and complex filters.',
      'Balancing feature richness with performance to maintain fast load times for the gaming audience.',
    ],
    futureImprovements: [
      'Integrate blockchain-based item verification for provenance tracking.',
      'Add real-time chat between traders using WebSocket connections.',
      'Implement AI-based pricing suggestions based on market trends.',
      'Build a mobile app for on-the-go trading capabilities.',
    ],
  },
];
