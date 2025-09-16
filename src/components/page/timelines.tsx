import Section from './section';
import {
  TimelineData,
  TimelineType,
  EmploymentType,
} from '@/components/utilities/constants/timeline';
import classNames from 'classnames';

interface Timeline {
  type: TimelineType;
  position: string;
  company: string;
  beginDate: Date;
  endDate?: Date; // Optional for "present" positions
  employmentType?: EmploymentType;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceItemProps {
  timeline: Timeline;
}

interface EducationItemProps {
  timeline: Timeline;
}

// Helper function to format date range
const formatDateRange = (beginDate: Date, endDate?: Date): string => {
  const beginFormatted = beginDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  if (!endDate) {
    return `${beginFormatted} - Present`;
  }

  const endFormatted = endDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return `${beginFormatted} - ${endFormatted}`;
};

function ExperienceItem({ timeline }: ExperienceItemProps) {
  return (
    <div
      className={classNames(
        'bg-secondary/20 rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors relative',
        "before:absolute before:-left-3 before:top-8 before:w-0 before:h-0 before:border-t-[12px] before:border-b-[12px] before:border-r-[12px] before:border-t-transparent before:border-b-transparent before:border-r-border before:content-[''] hover:before:border-r-primary/50 before:transition-colors before:bg-transparent"
        //  "after:absolute after:-left-3 after:top-8 after:w-0 after:h-0 after:border-t-[12px] after:border-b-[12px] after:border-r-[12px] after:border-t-transparent after:border-b-transparent after:border-r-background after:content-[''] after:scale-60"
      )}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2">
            {timeline.position}
          </h3>
          <p className="text-xl text-foreground mb-1">{timeline.company}</p>
          <p className="text-muted-foreground">
            {formatDateRange(timeline.beginDate, timeline.endDate)}
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            {timeline.employmentType}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {timeline.description}
        </p>

        <div className="grid md:grid-cols-[2fr_1fr] gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-foreground">
              Key Achievements:
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {timeline.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-foreground">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {timeline.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationItem({ timeline }: EducationItemProps) {
  return (
    <div className="bg-secondary/20 rounded-2xl p-8 border border-border hover:border-lime-500/50 transition-colors relative before:absolute before:-left-3 before:top-8 before:w-0 before:h-0 before:border-t-[12px] before:border-b-[12px] before:border-r-[12px] before:border-t-transparent before:border-b-transparent before:border-r-border before:content-[''] hover:before:border-r-lime-500/50 before:transition-colors before:bg-transparent after:absolute after:-left-3 after:top-8 after:w-0 after:h-0 after:border-t-[12px] after:border-b-[12px] after:border-r-[12px] after:border-t-transparent after:border-b-transparent after:border-r-background after:content-[''] after:scale-95">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-lime-500 mb-2">
            {timeline.position}
          </h3>
          <p className="text-xl text-foreground mb-1">{timeline.company}</p>
          <p className="text-muted-foreground">
            {formatDateRange(timeline.beginDate, timeline.endDate)}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {timeline.description}
        </p>
      </div>
    </div>
  );
}

export default function Timelines() {
  // Sort timelines by beginDate (newest first)
  const sortedTimelines = [...TimelineData].sort(
    (a, b) => b.beginDate.getTime() - a.beginDate.getTime()
  );

  return (
    <Section
      id="experience"
      title="My Journey"
      description="A brief ot timelines through my professional experiences and educations in backend engineering and software development"
    >
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

        <div className="space-y-8">
          {sortedTimelines.map((timeline, index) => (
            <div
              key={`${timeline.type}-${index}`}
              className="relative flex items-start"
            >
              {/* Timeline bullet */}
              <div className="absolute left-6 top-9 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full"></div>
              </div>

              {/* Timeline content */}
              <div className="ml-16 flex-1">
                {timeline.type === TimelineType.EXPERIENCE ? (
                  <ExperienceItem timeline={timeline} />
                ) : (
                  <EducationItem timeline={timeline} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
