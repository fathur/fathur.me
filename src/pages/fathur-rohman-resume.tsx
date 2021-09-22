import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren } from 'react';
import {
  faEnvelope,
  faFileWord,
  faGlobeAsia,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { mySkills, myEducations } from '../views/education';
import { Item, myExperiences } from '../views/experiences';
import classNames from 'classnames';
import Link from 'next/link';

const SectionHeading: React.FC = ({ children }) => (
  <div className="relative mb-3 mt-2">
    <div className="z-10 absolute h-7 w-7 bg-emerald-400 rounded-full top-1" />
    <div className="z-40 absolute h-3 w-3 bg-emerald-600 rounded-full left-3" />
    <h2
      className={classNames(
        'relative z-30 text-2xl font-raleway font-semibold inline-block pt-1 pl-3',
        'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-yellow-500 to-blue-500 ',
      )}
    >
      {children}
    </h2>
  </div>
);

const Skill: React.FC<PropsWithChildren<{ icon?: IconProp }>> = ({
  children,
  icon,
}) => {
  return (
    <div className="inline-block px-1 py-1 border border-gray-300 rounded flex items-center bg-white ">
      {icon && (
        <span className="text-normal">
          <FontAwesomeIcon icon={icon} fixedWidth={true} />
          &nbsp;
        </span>
      )}
      <span className="">{children}</span>
    </div>
  );
};
const FathurRohmanResume = () => {
  return (
    <div className="grid grid-cols-3 gap-3 text-sm px-3 pt-3">
      {/*/left side*/}
      <div className="">
        <div className="block text-right">
          <h1 className="text-4xl font-black w-full mb-4 uppercase">Fathur</h1>
        </div>
        <div className="block">
          <p className="mb-2 pt-2 text-gray-700 text-right text-base">
            <span className="font-semibold text-emerald-600">9 years</span> of
            experience in web application development. Using popular programming
            languages, databases, cloud platforms, and other stacks. Availabe to{' '}
            <span className="font-semibold text-emerald-600">lead</span> your
            team. With my high technical skills plus project management, your
            development workflow will be very{' '}
            <span className="font-semibold text-emerald-600">agile</span>.
          </p>

          {/*Bio*/}
          <ul className="text-gray-700">
            <li>
              <FontAwesomeIcon icon={faEnvelope} fixedWidth={true} />
              &nbsp;hi.fathur.rohman@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} fixedWidth={true} />
              &nbsp;+62 8969 9518 803
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} fixedWidth={true} />
              &nbsp;
              <Link href="https://www.linkedin.com/in/fathurrohman/">
                <a
                  href="https://www.linkedin.com/in/fathurrohman/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/fathurrohman
                </a>
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} fixedWidth={true} />
              &nbsp;
              <Link href="https://github.com/fathur">
                <a
                  href="https://github.com/fathur"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/fathur
                </a>
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobeAsia} fixedWidth={true} />
              &nbsp;
              <Link href="https://www.fathur.me/">
                <a
                  href="https://www.fathur.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  fathur.me
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/*SKills*/}
        <div>
          <SectionHeading>Skills</SectionHeading>

          <div className="flex flex-wrap gap-1">
            {mySkills.map((skill, j) => (
              <Skill key={j} icon={skill.icon}>
                {skill.title}
              </Skill>
            ))}
          </div>
        </div>

        {/*Edu*/}
        <div>
          <SectionHeading>Educations</SectionHeading>

          <div className="border border-gray-300 bg-white px-2 py-2 rounded">
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
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="block text-left">
          <h1 className="text-4xl font-black w-full mb-4 uppercase">Rohman</h1>
        </div>

        <div>
          {/*Experiences*/}
          <SectionHeading>Experiences</SectionHeading>
          {myExperiences.map((experience, i) => (
            <div
              key={i}
              className="my-1 border border-gray-300 rounded-lg px-2 py-2 bg-white"
            >
              <h3 className="text-lg font-normal">{experience.company}</h3>
              <h4 className="font-light text-gray-500">
                {experience.position}
              </h4>
              <div>
                {experience.location} | {experience.startDate()} -{' '}
                {experience.endDate()}
              </div>
              {/*<div className="mt-2">*/}
              {/*  <p className="text-gray-600">{experience.description()}</p>*/}
              {/*</div>*/}
              <div>
                <ul className="text-gray-700">
                  {experience.tasks?.map((task, is) => (
                    <li className="list-disc list-inside" key={is}>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FathurRohmanResume;
