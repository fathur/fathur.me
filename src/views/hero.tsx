import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../components/_form/button';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { H1 } from '../components/_content/typography';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <div className="flex md:grid md:grid-cols-3 h-full items-center">
      <div className="md:col-span-2">
        {/*<p className="text-2xl text-white">Hello, my name is</p>*/}
        {/*<H1*/}
        {/*  className={*/}
        {/*    'text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-yellow-200'*/}
        {/*  }*/}
        {/*>*/}
        {/*  Fathur Rohman*/}
        {/*</H1>*/}
        {/*<h3 className="text-3xl text-white font-semibold my-3">*/}
        {/*  Software Engineer*/}
        {/*</h3>*/}
        <h1
          className="my-6 text-white font-semibold text-3xl sm:text-5xl md:text-6xl dark:text-white"
          style={{ lineHeight: '1.25 !important' }}
        >
          Help you create{' '}
          <span className="font-semibold text-yellow-300">robust</span>
          <br />
          application to transform your business
          {/*<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-300 to-yellow-500">*/}
          {/*  colorful*/}
          {/*</span>*/}.
        </h1>

        <p
          className={'text-white md:text-xl font-light mb-5 dark:text-gray-200'}
        >
          More than {new Date().getFullYear() - 2012} years experience in web
          application development.
        </p>

        <Button
          danger
          className={'inline-block'}
          href="/files/cv-2021.pdf"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFileDownload} fixedWidth /> Download CV
        </Button>

        <Button
          className="inline-block mt-2 md:ml-2"
          href="https://api.whatsapp.com/send?phone=6289699518803&text=Hi%2C%20I%27m%20interested%20in%20your%20web%20application%20development%20service."
          target="_blank"
        >
          <FontAwesomeIcon icon={faWhatsapp} fixedWidth />
          Contact me
        </Button>
      </div>
    </div>
  );
};

export default Hero;
