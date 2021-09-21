import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
type Type = {
  className?: string;
  danger?: boolean;
  size?: 'md' | 'lg';
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
};
const Button: React.FC<Type> = ({
  children,
  className,
  danger,
  size,
  href,
  target,
}) => {
  let btnColor =
    'bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-500 focus:ring-emerald-600';
  if (danger) {
    btnColor =
      'bg-red-500 hover:bg-red-600 focus:bg-red-500 focus:ring-red-600 ';
  }

  let style: string;
  switch (size) {
    case 'lg':
      style = 'text-lg px-6 py-3';
      break;
    default:
      style = 'text-normal px-5 py-2';
  }

  if (href) {
    return (
      <Link href={href}>
        <a
          href={href}
          target={target}
          className={classNames([
            className,
            style,
            'transition-all duration-300 ease-in-out text-white rounded-full',
            'dark:bg-black dark:text-white',
            btnColor,
            'focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1',
          ])}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={classNames([
        className,
        style,
        'transition-all duration-300 ease-in-out text-white rounded-full',
        'dark:bg-black dark:text-white',
        btnColor,
        'focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1',
      ])}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: 'md',
  target: '_self',
};

export default Button;
