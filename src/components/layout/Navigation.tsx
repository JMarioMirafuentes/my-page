import React from "react";
import { menuItems } from "../../config/menu";

const Navigation: React.FC = () => {
  
  return (
    <nav>
      <ul className="flex gap-8">
        {menuItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;