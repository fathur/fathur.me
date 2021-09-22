import type { NextPage } from 'next';
import Image from 'next/image';
import Section from '../components/_layout/section';
import Container from '../components/_layout/container';
import Button from '../components/_form/button';
import Bio from '../views/bio';
import WhatIDo from '../views/what-i-do';
import Hero from '../views/hero';
import Experiences from '../views/experiences';
import Separator from '../components/separator';
import { H2 } from '../components/_content/typography';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Education from '../views/education';
import Portfolio from '../views/portfolio';
import Whatsapp from '../components/whatsapp';
import Footer from '../views/footer';
import Head from 'next/head';
// @ts-ignore
import nightwind from 'nightwind/helper';
import classNames from 'classnames';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fathur</title>

        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </Head>

      <div className={'absolute w-full z-20 bg-transparent'}>
        <div
          className={
            'container mx-auto px-2 py-4 text-white font-light text-2xl dark:text-white'
          }
        >
          Fathur
        </div>

        {/*<button onClick={() => nightwind.toggle()}>t</button>*/}
      </div>

      <Section
        className={classNames({
          'bg-gradient-to-b from-black via-gray-800 to-white': true,
          'dark:bg-black': false,
        })}
      >
        <Container className={'h-screen'}>
          <Hero />
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Bio />
        </Container>
      </Section>
      <Separator />

      <Section className="bg-white">
        <Container>
          <WhatIDo />
        </Container>
      </Section>

      <Section className="bg-gray-100 border-t-2 border-b-2 dark:bg-black dark:border-gray-700">
        <Container>
          <div className="text-center">
            <Whatsapp />
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Experiences />
        </Container>
      </Section>

      <Separator />

      <Section className="bg-white">
        <Container>
          <Education />
        </Container>
      </Section>

      {/*<Section className="bg-gray-100 border-t-2 border-b-2">*/}
      {/*  <Container>*/}
      {/*    <div className="text-center">*/}
      {/*      <Whatsapp />*/}
      {/*    </div>*/}
      {/*  </Container>*/}
      {/*</Section>*/}

      {/*<Section>*/}
      {/*  <Container>*/}
      {/*    <Portfolio />*/}
      {/*  </Container>*/}
      {/*</Section>*/}

      <Section className="dark:bg-white bg-gradient-to-t from-black via-gray-800 to-white ">
        <Container>
          <Footer />
        </Container>
      </Section>
    </>
  );
};

export default Home;
