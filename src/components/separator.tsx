import React from 'react';

const Separator: React.FC = () => {
  return (
    <div
      className={'py-5 bg-repeat-x bg-center dark:bg-black'}
      style={{
        backgroundImage: "url('/border-dark.png')",
        backgroundSize: 'auto 6px',
      }}
    />
  );
};

export default Separator;
