interface CertificationType {
  name: string;
  issuer: string;
  code?: string;
  startDate: Date | string;
  endDate?: Date | string;
}

export const myCertifications: CertificationType[] = [
  {
    name: 'Oracle Certified Associate, MySQL 5',
    issuer: 'Oracle',
    startDate: new Date('Nov 2013'),
    endDate: 'now',
  },
  // {
  //   name: 'MTCNA (Mikrotik Certified Network Associate)',
  //   issuer: 'Mikrotik',
  //   startDate: new Date('August 2013'),
  //   endDate: new Date('August 2016'),
  // },
  // {
  //   name: 'Microsoft Office Specialist, Office Access 2007',
  //   issuer: 'Microsoft',
  //   startDate: new Date('June 2011'),
  //   endDate: new Date('June 2014'),
  // },
];
