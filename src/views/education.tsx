import React, { PropsWithChildren } from 'react';
import { H2 } from '../components/_content/typography';
import Panel from '../components/panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAws,
  faCentos,
  faCss3,
  faDocker,
  faGitAlt,
  faGoogle,
  faHtml5,
  faJoomla,
  faJs,
  faLaravel,
  faLess,
  faLinux,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
  faRedhat,
  faSass,
  faSymfony,
  faUbuntu,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGem } from '@fortawesome/free-solid-svg-icons';
type EducationType = {
  startYear: number;
  endYear: number | string;
  university: string;
  title?: string;
  major: string;
};
export const myEducations: EducationType[] = [
  // {
  //   university: 'University of Indonesia',
  //   major: 'Information and Technology',
  //   startYear: 2018,
  //   endYear: 'present',
  // },
  {
    university: 'Paramadina University',
    title: 'S.Kom.',
    major: 'Information and Technology',
    startYear: 2008,
    endYear: 2012,
  },
];

export const mySkills: { title: string; icon?: IconProp }[] = [
  {
    title: 'PHP',
    icon: faPhp,
  },
  {
    title: 'Ruby',
    icon: faGem,
  },
  {
    title: 'Javascript',
    icon: faJs,
  },
  {
    title: 'HTML',
    icon: faHtml5,
  },
  {
    title: 'CSS',
    icon: faCss3,
  },
  {
    title: 'Sass',
    icon: faSass,
  },
  {
    title: 'Less',
    icon: faLess,
  },
  {
    title: 'Laravel',
    icon: faLaravel,
  },
  {
    title: 'Symfony',
    icon: faSymfony,
  },
  {
    title: 'NodeJs',
    icon: faNodeJs,
  },
  {
    title: 'Python',
    icon: faPython,
  },
  {
    title: 'AWS',
    icon: faAws,
  },
  {
    title: 'GCP',
    icon: faGoogle,
  },
  {
    title: 'Linux',
    icon: faLinux,
  },
  {
    title: 'Ubuntu Server',
    icon: faUbuntu,
  },
  {
    title: 'Centos',
    icon: faCentos,
  },
  {
    title: 'Redhat',
    icon: faRedhat,
  },
  {
    title: 'Joomla',
    icon: faJoomla,
  },
  {
    title: 'Git',
    icon: faGitAlt,
  },
  {
    title: 'Docker',
    icon: faDocker,
  },
  {
    title: 'Wordpress',
    icon: faWordpress,
  },
  {
    title: 'Rails',
  },
  {
    title: 'CodeIgniter',
  },
];

const Skill: React.FC<PropsWithChildren<{ icon?: IconProp }>> = ({
  children,
  icon,
}) => {
  return (
    <div className="inline-block px-2 py-1 md:px-2 md:py-3 border border-gray-200 flex items-center">
      {icon && (
        <span className="text-normal md:text-3xl">
          <FontAwesomeIcon icon={icon} fixedWidth={true} />
          &nbsp;
        </span>
      )}
      <span className="text-sm md:text-md">{children}</span>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <>
      <div className={'mb-5'}>
        <H2>Educations and Skills</H2>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-5 dark:text-white">
        <div>
          <Panel>
            <ul>
              {myEducations.map((edu, i) => (
                <li key={i} className={'mb-3'}>
                  <ul>
                    <li>
                      {edu.startYear} - {edu.endYear}
                    </li>
                    <li className={'font-semibold'}>
                      {edu.title && edu.title + ` in `}
                      {edu.major}
                    </li>
                    <li>{edu.university}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <div className="col-span-2 gap-2 flex flex-wrap mt-5 md:mt-0">
          {mySkills.map((skill, j) => (
            <Skill key={j} icon={skill.icon}>
              {skill.title}
            </Skill>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
