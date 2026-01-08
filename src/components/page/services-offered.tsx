import {
  Code2,
  Server,
  Database,
  Cloud,
  Workflow,
  Shield,
} from 'lucide-react';
import Section from './section';

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const services: Service[] = [
  {
    title: 'API Development',
    description:
      'Design and build robust RESTful and GraphQL APIs that power your applications with reliability and performance.',
    icon: Code2,
    color: 'text-blue-500',
  },
  {
    title: 'Backend Systems',
    description:
      'Develop scalable server-side applications using modern frameworks and best practices for your business needs.',
    icon: Server,
    color: 'text-green-500',
  },
  {
    title: 'Database Design',
    description:
      'Architect efficient database schemas and optimize queries for high-performance data management.',
    icon: Database,
    color: 'text-purple-500',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Deploy and manage cloud infrastructure on AWS, GCP, or Azure with scalability and cost-efficiency in mind.',
    icon: Cloud,
    color: 'text-cyan-500',
  },
  {
    title: 'Microservices Architecture',
    description:
      'Break down monoliths into manageable, independently deployable services for better scalability and maintenance.',
    icon: Workflow,
    color: 'text-orange-500',
  },
  {
    title: 'Security & DevOps',
    description:
      'Implement secure coding practices, CI/CD pipelines, and infrastructure automation for reliable deployments.',
    icon: Shield,
    color: 'text-red-500',
  },
];

function ServiceCard({ service }: { service: Service }) {
  const IconComponent = service.icon;

  return (
    <div className="bg-secondary/20 rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors">
      <div className="flex flex-col items-center text-center">
        <div className="p-3 rounded-full bg-background mb-4">
          <IconComponent className={`h-8 w-8 ${service.color}`} />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm">{service.description}</p>
      </div>
    </div>
  );
}

export default function ServicesOffered() {
  return (
    <Section
      id="services"
      title="Services Offered"
      description="Here's how I can help bring your ideas to life with quality engineering"
    >
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </Section>
  );
}
