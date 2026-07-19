import React from 'react';
import { menuItems } from '../../config/menu';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-6 items-center">
        {menuItems.map(item => (
          <li key={item.href}>
            <a href={item.href} className="text-muted text-gray-600 hover:text-accent-600 transition-colors px-2 py-1 rounded-md">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
