import type { NextPage } from 'next';
import Section from '../components/_layout/section';
import Container from '../components/_layout/container';
import Bio from '../views/bio';
import WhatIDo from '../views/what-i-do';
import Hero from '../views/hero';
import Experiences from '../views/experiences';
import Separator from '../components/separator';
import React, { useEffect, useState } from 'react';
import Education from '../views/education';
import Footer from '../views/footer';
import Head from 'next/head';
// @ts-ignore
// import nightwind from 'nightwind/helper';
import classNames from 'classnames';
import Link from 'next/link';
import Mail from '../components/mail';
import Particles from 'react-tsparticles';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fathur</title>

        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="width = device-width, initial-scale = 1.0, minimum-scale = 1, maximum-scale = 1, user-scalable = no, viewport-fit=cover"
        />

        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="Fathur" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-navbutton-color" content="#000000" />
      </Head>

      <header
        className={classNames(
          'absolute w-full z-20 top-0',
          'standalone:fixed standalone:bg-black',
        )}
      >
        <div
          className={classNames(
            'container max-w-screen-xl mx-auto px-4 py-3.5 text-white text-2xl dark:text-white pt-safe-top',
            'standalone:flex standalone:flex-wrap standalone:justify-center standalone:content-end standalone:font-medium standalone:text-xl',
          )}
        >
          <Link href="/">Fathur</Link>
        </div>

        {/*<button onClick={() => nightwind.toggle()}>t</button>*/}
      </header>

      <Section
        className={classNames(
          {
            'bg-gradient-to-b from-black via-gray-800 to-white': true,
            'dark:bg-black': false,
          },
          ['standalone:mt-24'],
        )}
      >
        <Particles
          className="absolute inset-0 z-20"
          options={{
            fpsLimit: 30,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: 'bottom',
                enable: true,
                outMode: 'bounce',
                random: true,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'polygon',
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />

        <Container className="h-screen relative z-30 ">
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
            <Mail />
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
