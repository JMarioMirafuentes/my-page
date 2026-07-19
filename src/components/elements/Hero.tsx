const HeroPage: React.FC = () => {
  return (
    <div>
      <section id="inicio" className="hero min-h-[calc(100vh-80px)] flex items-center">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 max-w-2xl">
            <p className="uppercase text-sm tracking-wider text-accent-600 mb-2">Full Stack Developer</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-accent-600">Mario Sánchez</h1>

            <p className="mt-4 text-lg text-gray-700">
              Desarrollo aplicaciones empresariales con .NET, React, Node.js, SQL Server y Azure. ~5 años de experiencia construyendo soluciones
              escalables.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#proyectos" className="btn-primary">
                Ver Proyectos
              </a>
              <a href="#contacto" className="btn-ghost">
                Contactarme
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="hero-image-wrapper shadow-xl rounded-2xl overflow-hidden">
              <img src="/assets/hero.jpg" alt="Mario Sanchez" className="hero-image object-cover w-80 h-80 lg:w-96 lg:h-96" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
