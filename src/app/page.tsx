import {
  CodeIcon,
  GlobeIcon,
  LinkedinIcon,
  MailIcon,
  GithubIcon,
} from 'lucide-react';

import Section from '@/components/page/section';
import Timelines from '@/components/page/timelines';
import Portfolio from '@/components/page/portfolio';
import HighLevelSkills from '@/components/page/high-skills';
import WhoAmI from '@/components/page/who-am-i';
import TechStacks from '@/components/page/tech-stacks';
import Hero from '@/components/page/hero';
import ServicesOffered from '@/components/page/services-offered';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <Navbar /> */}

      {/* Hero Section */}
      {/* <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"> */}
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 hero-pattern">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <g fill="currentColor" fillRule="evenodd">
              <path d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"/>
            </g>
          </svg>
        </div> */}

      {/* <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <ServerIcon className="h-4 w-4 mr-2" />
              Backend Engineer
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Building Robust
              <br />
              Backend Systems
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              Experienced backend engineer crafting scalable, high-performance applications with modern technologies and best practices.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center px-10 py-5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
            >
              <MailIcon className="h-5 w-5 mr-3" />
              Get In Touch
            </a>
            <a
              href="#skills"
              className="inline-flex items-center px-8 py-5 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors text-lg"
            >
              View My Skills
            </a>
          </div>
        </div> */}
      {/* </section> */}

      <Hero />

      <WhoAmI />

      <HighLevelSkills />

      <ServicesOffered />

      <TechStacks />

      <Portfolio />

      <Timelines />

      {/* Contact Section */}
      <Section id="contact" className="bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s discuss how I can help bring your ideas to
            life.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
              <MailIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">
                Ready to discuss your project
              </p>
              <a
                href="mailto:hello@fathur.me"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Email
              </a>
            </div>

            <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
              <GlobeIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-muted-foreground mb-4">
                Follow my work and updates
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/fathur"
                  className="p-3 bg-muted text-muted-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/fathur"
                  className="p-3 bg-muted text-muted-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-4">
              What I&apos;m Looking For
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Full-time opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Contract work</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Open source contributions</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <CodeIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Fathur</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Fathur. Backend Engineer & DevOps Specialist.
          </p>
        </div>
      </footer>
    </div>
  );
}
