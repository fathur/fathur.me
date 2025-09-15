// Timeline type enum constants
export enum TimelineType {
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
}

export enum EmploymentType {
  CONTRACT = 'Contract',
  FULLTIME = 'Full-Time',
}

export enum EmploymentLocation {
  REMOTE = 'Remote',
  ONSITE = 'On Site',
}

export const TimelineData = [
  {
    type: TimelineType.EDUCATION,
    position: 'Information of Technology',
    company: 'Universitas Paramadina',
    beginDate: new Date('2008-01-01'),
    endDate: new Date('2012-01-01'),
    description:
      'Earned Bachelor of Computer Science with concentration in Information System Development, focusing on web application development and database management. Graduated with honors (GPA 3.6) as a Paramadina Fellowship recipient, demonstrating academic excellence and leadership potential. Completed comprehensive coursework in software engineering, database systems, and web technologies, providing a strong foundation for professional software development career.',
    achievements: [
      'Recipient of Paramadina Fellowship full scholarship program for academic excellence',
      'Developed academic information system as capstone project, demonstrating practical application of software engineering principles',
      'Contributed to PERTAMINA oil company subsystem development, gaining real-world industry experience',
      'Completed internship at ID-SIRTII in malware analysis, expanding cybersecurity and system security knowledge',
    ],
    technologies: [
      'PHP',
      'MySQL',
      'Web Development',
      'Database Design',
      'Information Systems',
    ],
  },
  {
    type: TimelineType.EXPERIENCE,
    position: 'Application, Database, and Datacenter Staff',
    company:
      'ID-SIRTII (Indonesia Security Incident Response Team on Internet Infrastructure)',
    beginDate: new Date('2012-01-01'),
    endDate: new Date('2014-02-01'),
    employmentType: EmploymentType.CONTRACT,
    employmentLocation: EmploymentLocation.ONSITE,
    description:
      'Handling system and applications, databases, and servers related to our job in Id-SIRTII/CC. Systems that I developed including transfer log system, intrusion detection system, database management system, etc.',
    achievements: [
      'Develop an Intrusion Detection System (IDS)',
      'Develop a Transfer Log System',
    ],
    technologies: ['PHP', 'CodeIgniter', 'Javscript', 'MySQL', 'Linux'],
  },
  {
    type: TimelineType.EXPERIENCE,
    position: 'Web Developer',
    company: 'Fostrom',
    beginDate: new Date('2014-03-01'),
    endDate: new Date('2015-06-01'),
    employmentType: EmploymentType.CONTRACT,
    description: '',
    achievements: [
      'Develop EEZY company profile website',
      'Develop Kalbe Family email newsletter campaign',
      'Develop Perbanas website',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
  },

  {
    type: TimelineType.EXPERIENCE,
    position: 'Backend Developer',
    company: 'Ciayo',
    beginDate: new Date('2015-06-01'),
    endDate: new Date('2018-03-01'),
    employmentType: EmploymentType.FULLTIME,
    employmentLocation: EmploymentLocation.ONSITE,
    description: '',
    achievements: [''],
    technologies: ['Oracle 11g Database', 'Laravel', 'MongoDB', 'Linux', 'AWS'],
  },
  {
    type: TimelineType.EXPERIENCE,
    position: 'Senior Backend Developer',
    company: 'TeleCTG',
    beginDate: new Date('2018-04-01'),
    endDate: new Date('2021-03-01'),
    employmentType: EmploymentType.FULLTIME,
    employmentLocation: EmploymentLocation.ONSITE,
    description: '',
    achievements: [],
    technologies: ['Ruby', 'PostgreSQL', 'Linux', 'AWS'],
  },

  {
    type: TimelineType.EDUCATION,
    position: 'Master of Information Technology',
    company: 'University of Indonesia',
    beginDate: new Date('2018-04-01'),
    endDate: new Date('2021-03-01'),
    description: '',
    achievements: [],
    technologies: [],
  },
  {
    type: TimelineType.EXPERIENCE,
    position: 'Fullstack Web Developer',
    company: 'Team Cookies Studio',
    beginDate: new Date('2021-04-01'),
    endDate: new Date('2021-09-01'),
    employmentType: EmploymentType.CONTRACT,
    employmentLocation: EmploymentLocation.REMOTE,
    description:
      'Delivered full-stack development solutions for diverse client projects at a software agency, specializing in web application development and API integration. Led development of key features for an online job matcher platform and property website, utilizing Laravel and Node.js for backend services and React for frontend interfaces. Collaborated with a cross-functional team of 15+ developers to deliver scalable web solutions that enhanced client business operations and user engagement.',
    achievements: [
      'Developed robust REST APIs and backend services for online job matcher platform using React and Node.js',
      'Engineered and maintained the backend system for a property website using Laravel',
    ],
    technologies: [
      'Laravel',
      'Node.js',
      'React',
      'DynamoDB',
      'AWS',
      'REST APIs',
      'JavaScript',
    ],
  },

  {
    type: TimelineType.EXPERIENCE,
    position: 'Senior Backend Engineer',
    company: 'JULO',
    beginDate: new Date('2021-11-01'),
    // endDate: new Date('2025-03-01'),
    employmentType: EmploymentType.CONTRACT,
    employmentLocation: EmploymentLocation.REMOTE,
    description:
      "Design and implement backend development for JULO's comprehensive onboarding system, enabling seamless customer acquisition and loan eligibility assessment. Architected and maintained microservices using Django and Go to handle critical fintech operations including credit scoring, KYC verification, and document processing. Collaborated with cross-functional teams of 10+ members across frontend, data, and product departments to deliver scalable solutions that process thousands of loan applications daily.",
    achievements: [
      'Developed dedicated microservice for FDC government integration, handling efficient queue system',
      'Created digital signature feature to handle PDF document originality verification and authentication',
      'Integrated various and complex scoring systems for comprehensive risk assessment and loan eligibility',
      'Developed and maintained Field Collection system for field agents to manage loan collections',
      'Established and enforced standardized code formatting practices through automated tooling',
    ],
    technologies: [
      'Django',
      'Python',
      'Go',
      'PostgreSQL',
      'AliCloud',
      'GCP',
      'REST APIs',
      'Microservices',
    ],
  },
];
