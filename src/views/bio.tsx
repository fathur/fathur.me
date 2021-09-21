import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { H2, Paragraph } from '../components/_content/typography';
import Link from 'next/link';
const detail = {
  name: 'Fathur',
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
};

const Bio: React.FC = () => {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 items-center">
      <div className="hidden md:block">
        <img
          className="rounded-full border-2 border-gray-400 mx-auto"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGJp9I560_DZA/profile-displayphoto-shrink_800_800/0/1516355962739?e=1637798400&v=beta&t=ecc1uTPyHwSzfGJwV-vn8DWbu8HHuJqB9ij0StH6dLc"
          alt="Fathur"
        />
      </div>
      <div className={'leading-relaxed lg:col-span-2'}>
        <H2>Biography</H2>
        <Paragraph>
          It will be my pleasure to help you realize your dream application, I
          have{' '}
          <span className="font-bold text-emerald-500">
            {new Date().getFullYear() - 2012} years
          </span>{' '}
          of experience in web application development. Using popular
          programming languages, popular databases, cloud platforms, and other
          stacks, your application will be very fast.{' '}
          <span className="font-bold text-emerald-500">You choose!</span>
        </Paragraph>

        <Paragraph>
          Need a <span className="font-bold text-emerald-500">tech leader</span>
          , no problem. With my high technical skills plus the Scrum project
          management, your development workflow will be very agile.
        </Paragraph>

        <Paragraph>
          I code and create web for amazing people around the world. I like work
          with new people. New people new Experiences.
        </Paragraph>

        <div className={'grid grid-cols-2 mt-5 dark:text-white'}>
          <div>
            <dl>
              <dt className={'font-semibold'}>Name:</dt>
              <dd>Fathur</dd>

              <dt className={'font-semibold'}>Email:</dt>
              <dd>hi@fathur.me</dd>
            </dl>
          </div>

          <div>
            <dl>
              <dt className={'font-semibold'}>Address</dt>
              <dd>Bogor, Indonesia</dd>

              <dt className={'font-semibold'}>Linkedin</dt>
              <dd>
                <Link href="https://www.linkedin.com/in/fathurrohman/">
                  <a
                    href={'https://www.linkedin.com/in/fathurrohman/'}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    /fathurrohman/
                  </a>
                </Link>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
