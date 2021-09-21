import React from 'react';

const Badge: React.FC = ({ children }) => {
  return (
    <div className="inline-block rounded-full px-3 py-1 bg-emerald-500 text-white text-xs">
      {children}
    </div>
  );
};

export default Badge;
