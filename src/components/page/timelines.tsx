import Section from './section';
import {
  TimelineData,
  TimelineType,
  EmploymentType,
} from '@/components/utilities/constants/timeline';

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
    <div className="bg-secondary/20 rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors">
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
    <div className="bg-secondary/20 rounded-2xl p-8 border border-border hover:border-lime-500/50 transition-colors">
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
      <div className="space-y-8">
        {sortedTimelines.map((timeline, index) =>
          timeline.type === TimelineType.EXPERIENCE ? (
            <ExperienceItem
              key={`${timeline.type}-${index}`}
              timeline={timeline}
            />
          ) : (
            <EducationItem
              key={`${timeline.type}-${index}`}
              timeline={timeline}
            />
          )
        )}
      </div>
    </Section>
  );
}
