import {
  CodeIcon,
  DatabaseIcon,
  ServerIcon,
  CogIcon,
  GlobeIcon,
  LinkedinIcon,
  MailIcon,
  GithubIcon,
} from 'lucide-react';

import Section from '@/components/page/section';
import Timelines from '@/components/page/timelines';

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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <g fill="currentColor" fillRule="evenodd">
              <path d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 items-center">
            {/* Left Column - Frontend */}
            <div className="text-center order-1 md:order-1">
              <div className="mb-4">
                <div className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground/60">
                  {'{'} frontend {'}'}
                </div>
                <p className="text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-8 font-semibold text-muted-foreground/50">
                  Love to write clean, beautiful and elegant code for the web
                </p>
              </div>
            </div>

            {/* Middle Column - Fathur Rohman */}
            <div className="text-center order-1 md:order-2">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient mb-6">
                Fathur Rohman
              </h1>
              {/* <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-lg font-medium mb-8">
                <ServerIcon className="h-5 w-5 mr-2" />
                Backend Engineer
              </div> */}
              {/* <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Experienced backend engineer crafting scalable, high-performance applications with modern technologies and best practices.
              </p> */}

              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <MailIcon className="h-5 w-5 mr-2" />
                  Get In Touch
                </a>
                <a
                  href="#skills"
                  className="inline-flex items-center px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  View My Skills
                </a>
              </div> */}
            </div>

            {/* Right Column - Backend */}
            <div className="text-center order-3 md:order-3">
              <div className="mb-4">
                <div className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground/60">
                  &lt; backend &gt;
                </div>
                <p className="text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-8 font-semibold text-muted-foreground/50">
                  Expertise in building scalable web applications and APIs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section
        id="about"
        className="bg-secondary/20"
        title={
          <>
            Hi, nice to <i>e</i>-meet you!
          </>
        }
        description={
          <>
            I&apos;m a passionate backend engineer with expertise in building
            scalable web applications and APIs.
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Design and implement RESTful APIs and microservices
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Optimize database performance and design efficient schemas
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Implement CI/CD pipelines and DevOps practices
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Ensure code quality through testing and code reviews
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
            <h4 className="text-xl font-semibold mb-4">Core Values</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CogIcon className="h-5 w-5 text-primary" />
                <span>Clean, maintainable code</span>
              </div>
              <div className="flex items-center space-x-3">
                <DatabaseIcon className="h-5 w-5 text-primary" />
                <span>Performance optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <GlobeIcon className="h-5 w-5 text-primary" />
                <span>Scalable architecture</span>
              </div>
              <div className="flex items-center space-x-3">
                <ServerIcon className="h-5 w-5 text-primary" />
                <span>Security first approach</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" className="bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and side projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Project 1 */}
            <div className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/300?random=1"
                  alt="E-commerce API"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">E-commerce API</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Scalable REST API built with Node.js, Express, and PostgreSQL
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Node.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">PostgreSQL</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">JWT</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/300?random=2"
                  alt="Real-time Chat System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Real-time Chat System</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  WebSocket-based chat application with Redis pub/sub
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">WebSocket</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Redis</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Socket.io</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/300?random=3"
                  alt="Microservices Architecture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Microservices Platform</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Containerized microservices with Docker and Kubernetes
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Docker</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Kubernetes</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">gRPC</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/300?random=4"
                  alt="Data Analytics Pipeline"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Data Analytics Pipeline</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  ETL pipeline processing millions of records daily
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Apache Kafka</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Work Experience Section */}
      <Timelines />

      {/* Skills Section */}
      <Section id="skills" className="bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              High Level Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building robust backend systems
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Programming Languages */}
            <div className="bg-secondary/20 rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <CodeIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Strong problem-solving</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Advanced system design</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Database optimization</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Performance tuning</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-14 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>System architecture</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Leadership</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Mentoring</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Cross team collaboration</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Balancing business and technical needs</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building robust backend systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-secondary/20 rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <CodeIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Python</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>PHP</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Ruby</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Go</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-14 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>TypeScript</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-secondary/20 rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <ServerIcon className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">Frameworks</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Laravel</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Django</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Ruby on Rails</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
                {/* <div className="flex items-center justify-between">
                  <span>Express.js</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-14 h-2 bg-accent rounded-full"></div>
                  </div>
                </div> */}
                {/* <div className="flex items-center justify-between">
                  <span>Gin (Go)</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-12 h-2 bg-accent rounded-full"></div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-secondary/20 rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <DatabaseIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Databases</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>MySQL</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>PostgreSQL</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>MariaDB</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Redis</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>MongoDB</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-14 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Oracle</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-14 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* DevOps */}
            <div className="bg-secondary/20 rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <CogIcon className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">DevOps</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Docker</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
                {/* <div className="flex items-center justify-between">
                  <span>Kubernetes</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-accent rounded-full"></div>
                  </div>
                </div> */}
                <div className="flex items-center justify-between">
                  <span>CI/CD</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>AWS/GCP</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Terraform</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-14 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Others */}
            <div className="bg-secondary/20 rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <GlobeIcon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Tools & Others</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Git</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Linux</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>REST APIs</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>GraphQL</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Microservices</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testing & Quality */}
            <div className="bg-secondary/20 rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <CodeIcon className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold">Testing & Quality</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Unit Testing</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Integration Tests</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Code Review</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-18 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Performance Testing</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-16 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Security Auditing</span>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-14 h-2 bg-accent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

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
