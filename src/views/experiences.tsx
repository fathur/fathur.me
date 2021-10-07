import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  faAws,
  faCentos,
  faFedora,
  faGit,
  faGithub,
  faGitlab,
  faJira,
  faLaravel,
  faLinux,
  faNodeJs,
  faPhp,
  faReact,
  faSass,
  faStripe,
  faTrello,
  faUbuntu,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faCalendarAlt,
  faClock,
  faGem,
} from '@fortawesome/free-regular-svg-icons';
import { H2, H4, Paragraph } from '../components/_content/typography';
import BasePanel from '../components/panel';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Panel: React.FC = ({ children }) => {
  return (
    <BasePanel className="flex flex-col md:grid md:grid-cols-3">
      {children}
    </BasePanel>
  );
};
type ItemType = {
  company: string;
  position: string;
  location?: string;
  skills: IconProp[];
  isWfo?: boolean;
  isWfh?: boolean;
  startDate: () => JSX.Element;
  endDate: () => JSX.Element;
  workType: 'full-time' | 'part-time';
  description: () => JSX.Element;
  tasks?: string[];
};
export const myExperiences: ItemType[] = [
  {
    company: 'Continuum',
    position: 'Fullstack Engineer',
    location: 'Chicago',
    skills: [faAws, faGithub, faNodeJs, faReact, faSass, faStripe],
    workType: 'full-time',
    isWfo: true,
    tasks: [
      'Fix bug on frontend based on Next.js',
      'Fix bug on backend based on AWS Amplify',
      'Create restful API for Continuum freelance platform',
      'Lead internal Continuum team',
    ],
    startDate() {
      return (
        <>
          Apr<span className={'hidden lg:inline'}>il</span> 2021
        </>
      );
    },
    endDate() {
      return (
        <>
          Sept<span className={'hidden lg:inline'}>ember</span> 2021
        </>
      );
    },
    description() {
      return (
        <>
          Create backend and frontend web application using AWS powered
          services.
        </>
      );
    },
  },
  {
    company: 'Sehati - TeleCTG',
    location: 'Jakarta',
    position: 'Lead and Senior Backend Engineer',
    skills: [faAws, faGithub, faGem, faTrello],
    workType: 'full-time',
    isWfo: true,
    tasks: [
      'Communicating with product team to give technical feasibility insight of the product',
      'Manage backend task for each sprint',
      'Optimize Postgres database',
      'Create Restful API for Sehati ecosystem',
    ],
    startDate() {
      return (
        <>
          Apr<span className={'hidden lg:inline'}>il</span> 2018
        </>
      );
    },
    endDate() {
      return (
        <>
          Apr<span className={'hidden lg:inline'}>il</span> 2021
        </>
      );
    },
    description() {
      return (
        <>
          Create backend system to manage health data from midwives that examine
          pregnant mother. Using ruby as main language, we create API endpoint
          for Android Apps.
        </>
      );
    },
  },
  {
    company: 'Ciayo',
    position: 'Senior Backend Developer',
    location: 'Jakarta',
    skills: [faAws, faLaravel, faGitlab, faJira],
    workType: 'full-time',
    isWfo: true,
    tasks: [
      'Develop Restful API for Ciayo Virsos and Comics',
      'Design and optimize Oracle database',
      'Make a high performance MongoDB using replication',
      'Develop an admin panel using Laravel',
    ],
    startDate() {
      return (
        <>
          Jun<span className={'hidden lg:inline'}>y</span> 2015
        </>
      );
    },
    endDate() {
      return <>March 2018</>;
    },
    description() {
      return (
        <>
          Developing backend applications and managing databases. We create
          RESTful API for three platforms: Android, iOS, and web application.
          Additionally, create an admin site where all transactions can be
          managed. And lastly, make sure that images are optimized so they load
          quickly for readers.
        </>
      );
    },
  },
  {
    company: 'Fostrom',
    position: 'Web Developer',
    location: 'Jakarta',
    skills: [faPhp, faGit, faGithub, faWordpress, faSass],
    workType: 'full-time',
    isWfo: true,
    tasks: [
      'Create company website for Perbanas',
      'Create company website for Eezy (https://eezy.nl/)',
      'Create company website for Yelloow',
      'Create company website for Medtech Flanders (http://www.medtechflanders.be/)',
      'Create KMS (Knowledge Management System) using Wordpress',
    ],
    startDate() {
      return (
        <>
          Mar<span className={'hidden lg:inline'}>ch</span> 2014
        </>
      );
    },
    endDate() {
      return (
        <>
          Jun<span className={'hidden lg:inline'}>y</span> 2015
        </>
      );
    },
    description() {
      return (
        <>
          A full-stack software developer that makes various web applications
          for clients using WordPress, vanilla javascript, PHP, etc.
        </>
      );
    },
  },
  {
    company: 'Id-SIRTII/CC',
    location: 'Jakarta',
    position: 'Application, Database, and Datacenter Staff',
    skills: [faPhp, faLinux, faUbuntu, faCentos, faFedora],
    workType: 'full-time',
    isWfo: true,
    startDate() {
      return (
        <>
          Jan<span className={'hidden lg:inline'}>uary</span> 2012
        </>
      );
    },
    endDate() {
      return (
        <>
          Feb<span className={'hidden lg:inline'}>ruary</span> 2014
        </>
      );
    },
    description() {
      return (
        <>
          Handling systems, applications, databases, and servers inside
          Id-SIRTII/CC. Systems that I developed including a transfer log
          system, IDS (
          <span className={'italic'}>Intrusion Detection System</span>), and
          RDBMS (
          <span className={'italic'}>
            Relational Database Management System
          </span>
          ).
        </>
      );
    },
    tasks: [
      'Develop an IDS (Intrusion Detection System) based on Snort',
      // 'A red-team on Cyber Jawara competition. The Cyber Jawara' +
      //   'competition is a penetration system competition held by the' +
      //   'Minister of Defence (Kemhan) of Indonesia.',
      'Assistant on computer forensic training',
      'Assistant on secure coding with Java training',
      'Trainer of operating system forensic',
      'Trainer of security awareness',
    ],
  },
];

export const Item: React.FC<ItemType> = ({
  company,
  position,
  isWfo,
  isWfh,
  startDate,
  endDate,
  workType,
  skills,
  description,
}) => {
  return (
    <Panel>
      <div>
        <H4 className={'text-emerald-700'}>{company}</H4>

        <ul className={'text-sm '}>
          <li className="inline-block mr-2 md:block md:mr-0 text-gray-400 md:text-black">
            {isWfo && (
              <>
                <FontAwesomeIcon icon={faBuilding} /> WFO
              </>
            )}

            {isWfh && (
              <>
                <FontAwesomeIcon icon={faHome} /> WFH
              </>
            )}
          </li>
          <li className="inline-block mr-2 md:block md:mr-0 text-gray-400 md:text-black">
            <FontAwesomeIcon icon={faCalendarAlt} /> {startDate()} - {endDate()}
          </li>
          <li className="inline-block mr-2 md:block md:mr-0 text-gray-400 md:text-black">
            <FontAwesomeIcon icon={faClock} /> {workType}
          </li>
        </ul>
      </div>
      <div className={'col-span-2'}>
        <h3
          className={'font-raleway font-light text-xl mb-3 dark:text-gray-200'}
        >
          {position}
        </h3>

        <div className={'flex gap-3 mb-3 dark:text-gray-400'}>
          {skills.map((skill, i) => (
            <FontAwesomeIcon icon={skill} size={'2x'} key={i} />
          ))}
        </div>
        <div className={'text-black'}>
          <Paragraph>{description()}</Paragraph>
        </div>
      </div>
    </Panel>
  );
};

const Experiences = () => {
  return (
    <>
      <div className={'prose mb-5'}>
        <H2>Experiences</H2>
      </div>

      {myExperiences.map((experience, i) => (
        <Item key={i} {...experience} />
      ))}
    </>
  );
};

export default Experiences;
