import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { guessColor } from '../../constants';

type Type = {
  className?: string;
  bg?: string;
};
const Section: React.FC<PropsWithChildren<Type>> = (props) => {
  const { children, className, bg } = props;
  // const { bgColor, textColor } = guessColor(bg);

  return (
    <div
      {...props}
      className={classNames([className, 'relative z-10 dark:bg-black'])}
    >
      {children}
    </div>
  );
};

// Section.defaultProps = {
// bg: 'indigo',
// };

export default Section;
