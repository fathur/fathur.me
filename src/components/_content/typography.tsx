import React from 'react';
import classNames from 'classnames';
type Type = {
  className?: string;
};
export const H1: React.FC<Type> = ({ children, className }) => {
  return (
    <h1 className={classNames([className, 'text-7xl font-bold font-raleway'])}>
      {children}
    </h1>
  );
};

export const H2: React.FC<Type> = ({ children, className }) => {
  return (
    <div className={'relative leading-loose'}>
      <div
        className={
          'absolute z-10 bg-emerald-500 rounded-full h-16 w-16 -left-5 top-1'
        }
      />
      <h2
        className={classNames([
          className,
          'relative inline-block z-20 text-5xl font-bold mt-4 mb-6 pb-3 font-raleway ',
          'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-yellow-300 to-yellow-600 dark:text-white',
        ])}
      >
        {children}
      </h2>
    </div>
  );
};

export const H3: React.FC<Type> = ({ children, className }) => {
  return (
    <h3
      className={classNames([
        className,
        'relative z-20 text-3xl font-medium mt-4 mb-5 font-raleway',
      ])}
    >
      {children}
    </h3>
  );
};

export const H4: React.FC<Type> = ({ children, className }) => {
  return (
    <h4
      className={classNames([
        className,
        'relative z-20 text-2xl font-medium mt-2 mb-4 font-raleway',
      ])}
    >
      {children}
    </h4>
  );
};

export const Paragraph: React.FC<Type> = ({ children, className }) => {
  return (
    <p
      className={classNames([
        className,
        'text-normal md:text-lg mb-2 dark:text-white',
      ])}
    >
      {children}
    </p>
  );
};
