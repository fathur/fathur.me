import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  faAws,
  faCentos,
  faCss3,
  faCss3Alt,
  faFedora,
  faGit,
  faGithub,
  faGitlab,
  faHtml5,
  faJira,
  faJsSquare,
  faLaravel,
  faLinux,
  faNode,
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
  faCalendar,
  faCalendarAlt,
  faClock,
  faGem,
} from '@fortawesome/free-regular-svg-icons';
import Badge from '../components/badge';
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
  skills: IconProp[];
  isWfo?: boolean;
  isWfh?: boolean;
  startDate: () => JSX.Element;
  endDate: () => JSX.Element;
  workType: 'full-time' | 'part-time';
  description: () => JSX.Element;
};
const myExperiences: ItemType[] = [
  {
    company: 'Continuum',
    position: 'Fullstack Engineer',
    skills: [faAws, faGithub, faNodeJs, faReact, faSass, faStripe],
    workType: 'full-time',
    isWfo: true,
    startDate() {
      return <>April 2021</>;
    },
    endDate() {
      return <>Present</>;
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
    company: 'Sehati',
    position: 'Lead and Senior Backend Engineer',
    skills: [faAws, faGithub, faGem, faTrello],
    workType: 'full-time',
    isWfo: true,
    startDate() {
      return <>April 2018</>;
    },
    endDate() {
      return <>April 2021</>;
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
    skills: [faAws, faLaravel, faGitlab, faJira],
    workType: 'full-time',
    isWfo: true,
    startDate() {
      return <>Juny 2015</>;
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
    skills: [faPhp, faGit, faGithub, faWordpress, faSass],
    workType: 'full-time',
    isWfo: true,
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
    position: 'Application, Database, and Datecenter Staff',
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
  },
];

const Item: React.FC<ItemType> = ({
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
