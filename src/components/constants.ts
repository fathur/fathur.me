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
        position: 'Information and Technology',
        company: 'Universitas Paramadina',
        beginDate: new Date('2008-01-01'),
        endDate: new Date('2012-01-01'),
        description:
          'I studied Information and Technology at Universitas Paramadina from 2008 to 2012.',
        achievements: [
        ],
        technologies: [

        ],
    },
  {
    type: TimelineType.EXPERIENCE,
    position: 'Application, Database, and Datacenter Staff',
    company: 'ID-SIRTII (Indonesia Security Incident Response Team on Internet Infrastructure)',
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
    technologies: [
      'PHP', 'CodeIgniter', 'Javscript',
      'MySQL', 'Linux'
    ],
  },
  {
    type: TimelineType.EXPERIENCE,
    position: 'Web Developer',
    company: 'Fostrom',
    beginDate: new Date('2014-03-01'),
    endDate: new Date('2015-06-01'),
    employmentType: EmploymentType.CONTRACT,
    description:
      '',
    achievements: [
        'Develop EEZY company profile website',
        'Develop Kalbe Family email newsletter campaign',
        'Develop Perbanas website'
    ],
    technologies: [
        'HTML', 'CSS', 'JavaScript', 'Wordpress'
    ],
  },

  {
    type: TimelineType.EXPERIENCE,
    position: 'Backend Developer',
    company: 'Ciayo',
    beginDate: new Date('2015-06-01'),
    endDate: new Date('2018-03-01'),
    employmentType: EmploymentType.FULLTIME,
    employmentLocation: EmploymentLocation.ONSITE,
    description:
      '',
    achievements: [
    ],
    technologies: [
    ],
  },
  {
    type: TimelineType.EXPERIENCE,
    position: 'Senior Backend Developer',
    company: 'TeleCTG',
    beginDate: new Date('2015-06-01'),
    endDate: new Date('2018-03-01'),
    employmentType: EmploymentType.FULLTIME,
    employmentLocation: EmploymentLocation.ONSITE,
    description:
      '',
    achievements: [
    ],
    technologies: [
    ],
  },
];

