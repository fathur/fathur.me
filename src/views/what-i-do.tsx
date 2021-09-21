import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  faPaintBrush,
  faTerminal,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { H2, H3, Paragraph } from '../components/_content/typography';
import Panel from '../components/panel';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type JobType = {
  icon: IconProp;
  title: string;
  description: string;
};
const myJobs: JobType[] = [
  {
    icon: faUsers,
    title: 'Engineer Leading',
    description:
      'Need a leader for your team? Or grow a team? You are on the right ' +
      'page. On my lead, your team will have an agile development workflow. ' +
      'Using Scrum, your team will be optimized to create the best product.',
  },
  {
    icon: faTerminal,
    title: 'Backend Development',
    description: `Look for a high-performance and scalable backend engine? You looking
      for a correct person. It's my field of expertise. Make a
      high-performance and scalable backend engine, using restful API,
      RDBMS, NoSQL database, and other backends stacks.`,
  },
  {
    icon: faPaintBrush,
    title: 'Frontend Development',
    description: `Need pixel-perfect and reusable components? I am here. Using the
      modern frontend framework React and Vue, your web application will
      feel fast and consume efficiently resources.`,
  },
];

const WhatIDo: React.FC = () => {
  return (
    <>
      <div className={'prose mb-5'}>
        <H2>What I do?</H2>
      </div>
      <div className={'flex flex-col md:grid md:grid-cols-3 md:gap-6'}>
        {myJobs.map((job, k) => (
          <Panel key={k}>
            <div>
              <span className="text-4xl md:text-7xl lg:text-9xl inline-block md:block dark:text-gray-400">
                <FontAwesomeIcon icon={job.icon} className={'not-sr-only'} />
                &nbsp;
              </span>

              <H3 className="inline-block md:block dark:text-white">
                {job.title}
              </H3>
            </div>
            <Paragraph>{job.description}</Paragraph>
          </Panel>
        ))}
      </div>
    </>
  );
};

export default WhatIDo;
