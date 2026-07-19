const AboutPage: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Sobre mí</h2>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Soy <span className="font-semibold">Full Stack Developer</span> con experiencia en el desarrollo de sistemas empresariales y soluciones a
            medida para industrias como salud, energía, construcción y logística.
          </p>

          <p>
            Me especializo en el diseño y desarrollo de aplicaciones web utilizando tecnologías como
            <span className="font-semibold"> .NET, Angular, React y SQL Server</span>, enfocadas en la eficiencia operativa, automatización de
            procesos y mejora de la trazabilidad de la información.
          </p>

          <p>
            He participado en el desarrollo de sistemas como ERP empresariales, plataformas de mantenimiento industrial, sistemas hospitalarios y
            soluciones de control operativo, trabajando tanto en backend como frontend.
          </p>

          <p>
            Tengo experiencia en la implementación de APIs, integración de bases de datos relacionales, despliegue en entornos Windows Server e IIS,
            así como en servicios en la nube como Azure.
          </p>
        </div>

        {/* Highlights tipo CV */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 border rounded-xl">
            <h3 className="text-2xl font-bold">+6</h3>
            <p className="text-gray-600">Años de experiencia</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-gray-600">Sistemas desarrollados</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="text-2xl font-bold">Full Stack</h3>
            <p className="text-gray-600">Backend + Frontend</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
