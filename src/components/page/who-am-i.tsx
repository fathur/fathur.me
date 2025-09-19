import Section from './section';

export default function WhoAmI() {
  return (
    <Section
      id="about"
      className="bg-secondary/20"
      title={
        <>
          Hi, nice to <i>e</i>-meet you!
        </>
      }
      // description={
      //   <>
      //     I&apos;m a passionate backend engineer with expertise in building
      //     scalable web applications and APIs.
      //   </>
      // }
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Hey there! I&apos;m Fathur, a passionate full-stack engineer who
            loves building things that scale. With over 10+ years of experience
            crafting robust microservices, APIs, and modern frontend
            applications, I&apos;ve helped multiple startups and companies to
            build their products and services from the ground up.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Whether you&apos;re a growing startup needing a solid backend
            foundation, a tech company looking to modernize your architecture,
            or an individual with a brilliant idea that needs technical
            execution – I&apos;m here to turn your vision into reality. From
            complex integrations with government systems to real-time bidding
            platforms, I thrive on solving challenging problems and delivering
            solutions that actually work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Let&apos;s Work Together
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg font-semibold hover:bg-secondary/50 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>

        <div className="p-8">
          <div className="text-center">
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-primary mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>
            <blockquote className="text-2xl/10 text-muted-foreground italic mb-6">
              &quot;Fathur delivered exceptional backend solutions that scaled
              beautifully. His expertise in microservices and attention to
              detail made our project a huge success.&quot;
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">AM</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">
                  Ahmad Mudhofir
                </div>
                <div className="text-sm text-muted-foreground">
                  Founder Juklak
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
