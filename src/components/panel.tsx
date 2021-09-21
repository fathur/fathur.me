import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

const Panel: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classNames([
        className,
        'rounded-none md:rounded-xl px-5 py-5 -mx-4 md:mx-0 mb-1 md:mb-5 border border-gray-200 ',
      ])}
    >
      {children}
    </div>
  );
};

export default Panel;
