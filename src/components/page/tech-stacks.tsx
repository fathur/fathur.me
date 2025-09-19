'use client';
import Image from 'next/image';
import Section from './section';

const programmingLanguages = [
  { name: 'Python', logo: '/images/logo/python.png' },
  { name: 'PHP', logo: '/images/logo/php.png' },
  { name: 'Ruby', logo: '/images/logo/ruby.png' },
  // { name: "NodeJS", logo: "/images/logo/nodejs.png" },
  { name: 'GO', logo: '/images/logo/golang.png' },
  { name: 'Javascript', logo: '/images/logo/js.png' },
  { name: 'Typescript', logo: '/images/logo/typescript.png' },
  { name: 'Rust', logo: '/images/logo/rust.png' },
];

const frameworks = [
  { name: 'Django', logo: '/images/logo/django.png' },
  { name: 'Ruby on Rails', logo: '/images/logo/rails.png' },
  { name: 'CodeIgniter', logo: '/images/logo/codeigniter.png' },
  { name: 'Laravel', logo: '/images/logo/laravel.png' },
  { name: 'Gin', logo: '/images/logo/gin.png' },
  { name: 'NextJS', logo: '/images/logo/nextjs.png' },
];

const databases = [
  { name: 'MySQL', logo: '/images/logo/mysql.png' },
  { name: 'MariaDB', logo: '/images/logo/mariadb.png' },
  { name: 'PostgreSQL', logo: '/images/logo/postgres.png' },
  { name: 'Oracle', logo: '/images/logo/oracle.png' },
  // { name: "Sqlite", logo: "/images/logo/postgresql.png" },

  // { name: "SQL Server", logo: "/images/logo/postgresql.png" },
  { name: 'MongoDB', logo: '/images/logo/mongodb.png' },
  // { name: 'DynamoDB', logo: '/images/logo/dynamodb.png' },
  { name: 'Redis', logo: '/images/logo/redis.png' },
];

const cloudProviders = [
  { name: 'AWS', logo: '/images/logo/aws.png' },
  { name: 'GCP', logo: '/images/logo/gcp.png' },
  { name: 'Ali CLoud', logo: '/images/logo/alicloud.png' },
  // { name: "Azure", logo: "/images/logo/azure.png" },
  { name: 'DigitalOcean', logo: '/images/logo/digitalocean.png' },
  // { name: "Linode", logo: "/images/logo/linode.png" },
  { name: 'Vercel', logo: '/images/logo/vercel.png' },
  // { name: "Heroku", logo: "/images/logo/heroku.png" },
  // { name: "Cloudflare", logo: "/images/logo/cloudflare.png" },
];

interface TechStackItem {
  name: string;
  logo: string;
}

interface TechStackProps {
  items: TechStackItem[];
  className?: string;
}

function TechStack({ items }: TechStackProps) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-y-10 gap-x-15 md:gap-x-20`}
    >
      {items.map((tech, index) => (
        <div
          key={`tech-${index}`}
          className="flex-shrink-0 flex flex-col items-center justify-center"
        >
          <div className="text-6xl mb-2">
            <Image
              src={tech.logo}
              alt={tech.name}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function TechStacks() {
  return (
    <Section
      id="tech-stacks"
      className="bg-secondary/20"
      title="Tech Stacks"
      description={
        <span>
          My comprehensive toolkit <br />
          for building robust backend systems and frontend applications
        </span>
      }
    >
      <div className="flex flex-col gap-10">
        {/* <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div> */}
        {/* <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div> */}

        <TechStack items={programmingLanguages} />
        <TechStack items={frameworks} />
        <TechStack items={databases} />
        <TechStack items={cloudProviders} />
      </div>

      {/* <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
          width: calc(100% * 2);
        }
      `}</style> */}
    </Section>
  );
}
