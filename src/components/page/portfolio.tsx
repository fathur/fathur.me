import { PortfolioData } from '@/components/utilities/constants/portfolio';
import Section from './section';
import { GlobeIcon } from 'lucide-react';

export default function Portfolio() {
  return (
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
          {PortfolioData.filter(project => project.show).map(
            (project, index) => (
              <div
                key={index}
                className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    {project.link && (
                      <span className="flex items-center gap-2">
                        <GlobeIcon className="h-4 w-4" />
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {project.link}
                        </a>
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  );
}
