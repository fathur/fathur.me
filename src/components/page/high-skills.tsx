import { Network, Users, Rocket, MessageSquare, Brain } from 'lucide-react';
import Section from './section';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'System Design and Architecture',
    icon: Network,
    color: 'text-blue-500',
    description:
      'Designs robust, scalable architectures. Selects technologies, defines interfaces, and integrates distributed systems to meet business needs.',
    skills: [
      { name: 'Python/Django', percentage: 95 },
      { name: 'Go', percentage: 85 },
      { name: 'Node.js', percentage: 90 },
      { name: 'REST APIs', percentage: 95 },
      { name: 'Microservices', percentage: 88 },
    ],
  },
  {
    title: 'Agile Collaboration and Leadership',
    icon: Users,
    color: 'text-green-500',
    description:
      'Leads agile teams, drives collaboration, manages timelines, and ensures technical and business alignment for high-quality software delivery.',
    skills: [
      { name: 'PostgreSQL', percentage: 92 },
      { name: 'MongoDB', percentage: 85 },
      { name: 'Redis', percentage: 80 },
      { name: 'AWS/GCP', percentage: 88 },
      { name: 'Docker', percentage: 85 },
    ],
  },
  {
    title: 'Scalable and Secure Software Delivery',
    icon: Rocket,
    color: 'text-purple-500',
    description:
      'Delivers scalable, secure software with high availability. Implements best practices for pipelines, compliance, and continuous improvement.',
    skills: [
      { name: 'Team Leadership', percentage: 90 },
      { name: 'Project Management', percentage: 85 },
      { name: 'Mentoring', percentage: 88 },
      { name: 'Cross-team Collaboration', percentage: 92 },
      { name: 'Strategic Planning', percentage: 85 },
    ],
  },
  {
    title: 'Cross-functional Communication',
    icon: MessageSquare,
    color: 'text-orange-500',
    description:
      'Facilitates clear communication between technical and non-technical teams, translating complex concepts and ensuring project-wide alignment.',
    skills: [
      { name: 'System Design', percentage: 90 },
      { name: 'Performance Optimization', percentage: 88 },
      { name: 'Scalability', percentage: 85 },
      { name: 'Security', percentage: 82 },
      { name: 'DevOps', percentage: 80 },
    ],
  },
  {
    title: 'Problem Solving and Annalytical Thinking',
    icon: Brain,
    color: 'text-red-500',
    description:
      'Analyzes complex problems, identifies root causes, and delivers effective, data-driven solutions with logical reasoning and continuous improvement.',
    skills: [
      { name: 'Security Best Practices', percentage: 85 },
      { name: 'Data Protection', percentage: 88 },
      { name: 'Compliance', percentage: 80 },
      { name: 'Risk Assessment', percentage: 82 },
      { name: 'Incident Response', percentage: 78 },
    ],
  },
];

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">
          {skill.percentage}%
        </span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.percentage}%` }}
        />
      </div>
    </div>
  );
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const IconComponent = category.icon;

  return (
    <div className="bg-secondary/20 rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
      <div className="flex flex-col items-center text-center mb-6">
        <div className={`p-3 rounded-full bg-background mb-3`}>
          <IconComponent className={`h-8 w-8 ${category.color}`} />
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          {category.title}
        </h3>
      </div>

      <div>
        <p>{category.description}</p>
      </div>
      {/* <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div> */}
    </div>
  );
}

export default function HighLevelSkills() {
  return (
    <Section
      id="high-level-skills"
      title="High Level Skills"
      description="An overview of my key technical and leadership capabilities across different domains"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard key={index} category={category} />
        ))}
      </div>
    </Section>
  );
}
