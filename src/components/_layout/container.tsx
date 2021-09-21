import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
type Type = {
  className?: string;
};
const Container: React.FC<PropsWithChildren<Type>> = (props) => {
  const { children, className } = props;
  return (
    <div
      {...props}
      className={classNames([
        className,
        'container mx-auto px-4 md:px-2 py-8 md:py-16',
      ])}
    >
      {children}
    </div>
  );
};

export default Container;
