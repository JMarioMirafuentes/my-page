import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="font-semibold">
            Mario Sánchez
          </h3>

          <p className="text-sm text-gray-500">
            Full Stack Developer
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-4 md:mt-0">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;