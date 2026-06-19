import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50  border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-white">Mario Sánchez</h1>
        </div>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
