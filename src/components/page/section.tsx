import { ReactNode } from 'react';
import classNames from 'classnames';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
  titleLocation?: 'center' | 'left' | 'right';
}

export default function Section({
  children,
  id,
  className = '',
  title,
  description,
  titleLocation = 'center',
}: SectionProps) {
  return (
    <section
      id={id}
      className={classNames('py-20 px-4 sm:px-6 lg:px-8', className)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {children}
      </div>
    </section>
  );
}
