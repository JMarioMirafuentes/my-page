import React, { useState } from 'react';

const experience = [
  {
    company: 'Hersotek',
    role: 'Desarrollador Full Stack',
    period: '10/2025 - Actual',
    summary: 'Desarrollo de aplicaciones empresariales con Angular, .NET y Node.js enfocadas en automatización de procesos.',
    details: [
      'Diseño y desarrollo de aplicaciones empresariales utilizando Angular, .NET y Node.js.',
      'Diseño e implementación de APIs REST escalables con arquitectura limpia.',
      'Integración de componentes DevExtreme para interfaces empresariales.',
      'Optimización de rendimiento en aplicaciones productivas.',
      'Gestión de código con Git en entornos ágiles.'
    ]
  },
  {
    company: 'Ectotec SA de CV',
    role: 'Desarrollador Full Stack',
    period: '01/2023 - 10/2025',
    summary: 'Desarrollo de sistemas empresariales con .NET, integración con Oracle y APIs REST.',
    details: [
      'Desarrollo con C#, ASP.NET Core y .NET 7.',
      'Integración con Ellucian Banner y Oracle.',
      'Optimización de SQL Server y performance.',
      'Desarrollo frontend con Angular, React y JS.',
      'Despliegue en Windows Server y Linux.'
    ]
  }
];
const HomePage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      <section id="inicio" className="hero min-h-[calc(100vh-80px)] flex items-center">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 max-w-2xl">
            <p className="uppercase text-sm tracking-wider text-accent-600 mb-2">Full Stack Developer</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">Mario Sánchez</h1>

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
              <img src="/src/assets/hero.jpg" alt="Mario Sanchez" className="hero-image object-cover w-80 h-80 lg:w-96 lg:h-96" />
            </div>
          </div>
        </div>
      </section>
      <section id="sobre-mi" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Sobre mí</h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Soy <span className="font-semibold">Full Stack Developer</span> con experiencia en el desarrollo de sistemas empresariales y soluciones
              a medida para industrias como salud, energía, construcción y logística.
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
              <h3 className="text-2xl font-bold">+3</h3>
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

      <section id="experiencia" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Experiencia profesional</h2>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="border rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>

                    <p className="text-gray-600">
                      {job.company} • {job.period}
                    </p>

                    <p className="mt-2 text-gray-700">{job.summary}</p>
                  </div>

                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="text-sm px-3 py-1 border rounded-md hover:bg-gray-100">
                    {openIndex === index ? 'Ocultar' : 'Ver detalles'}
                  </button>
                </div>

                {openIndex === index && (
                  <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                    {job.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="tecnologias" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">🛠 Tecnologías & Herramientas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Frontend */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'AngularJS', 'React', 'Bootstrap', 'Tailwind'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-900 rounded-full text-sm text-yellow-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['.NET', 'C#', 'Node.js', 'Java', 'Python', 'Express'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-900 rounded-full text-sm text-yellow-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bases de Datos */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Bases de Datos</h3>
              <div className="flex flex-wrap gap-2">
                {['SQL Server', 'MySQL', 'PostgreSQL', 'Azure SQL', 'MariaDB', 'MongoDB'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-900 rounded-full text-sm text-yellow-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['Azure', 'GCP', 'Docker', 'Linux', 'Windows Server', 'IIS', 'Apache', 'nginx', 'IONOS'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-900 rounded-full text-sm text-yellow-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Testing & QA */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Testing</h3>
              <div className="flex flex-wrap gap-2">
                {['Selenium', 'Unit Testing', 'Jasmine'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-900 rounded-full text-sm text-yellow-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Herramientas</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Power BI'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-900 rounded-full text-sm text-yellow-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="proyectos" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Proyectos destacados</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1 */}
            <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <img src="/src/assets/revesa.png" alt="ERP Revesa Energy" className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">ERP Revesa Energy</h3>
                <p className="text-sm text-gray-500 mt-1">Cliente: Revesa Energy</p>
                <p className="text-gray-600 mt-3 text-sm">
                  Sistema de administracionesde clientes, contactos, cotizxaciones, ordenes de compra, remisiones y entregas
                </p>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <img src="/src/assets/pmp.png" alt="Mantenimiento perforación" className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">Mantenimiento de equipos de perforación</h3>
                <p className="text-sm text-gray-500 mt-1">Industria petrolera</p>
                <p className="text-gray-600 mt-3 text-sm">
                  Sistema para control de mantenimiento preventivo y correctivo de equipos, con trazabilidad de operaciones.
                </p>
              </div>
            </div>

            {/* Proyecto 3 */}
            <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <img src="/src/assets/nutri.png" alt="Sistema Nutricional" className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">Sistema Nutricional</h3>
                <p className="text-sm text-gray-500 mt-1">Sector salud</p>
                <p className="text-gray-600 mt-3 text-sm">
                  Plataforma para seguimiento nutricional de pacientes con planes alimenticios personalizados.
                </p>
              </div>
            </div>

            {/* Proyecto 4 */}
            <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <img src="/src/assets/hospital.png" alt="Gestión Hospitalaria" className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">Sistema Gestión Hospitalaria</h3>
                <p className="text-sm text-gray-500 mt-1">Clínica privada</p>
                <p className="text-gray-600 mt-3 text-sm">Control de pacientes, citas médicas, expedientes y administración interna hospitalaria.</p>
              </div>
            </div>

            {/* Proyecto 5 */}
            <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <img src="src/assets/obras.png" alt="Administración de Obras" className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">Sistema Administración de Obras</h3>
                <p className="text-sm text-gray-500 mt-1">Construcción</p>
                <p className="text-gray-600 mt-3 text-sm">
                  Plataforma para control de avances de obra, materiales, costos y seguimiento de proyectos constructivos.
                </p>
              </div>
            </div>
            {/* Proyecto 6 */}
            <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <img src="/src/assets/tag.png" alt="Sistema de Mantenimiento de Barcos" className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">Sistema de Mantenimiento de Barcos</h3>

                <p className="text-sm text-gray-500 mt-1">Industria marítima</p>

                <p className="text-gray-600 mt-3 text-sm">
                  Plataforma para la gestión de mantenimiento preventivo y correctivo de embarcaciones, control de bitácoras técnicas, historial de
                  reparaciones y programación de servicios para asegurar la operatividad de la flota.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="servicios" className="py-20 bg-surface-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">Desarrollo Web</div>
            <div className="card">APIs y Backend</div>
            <div className="card">Arquitectura en la Nube</div>
          </div>
        </div>
      </section> */}

      {/* <section id="testimonios" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">"Excelente trabajo" — Cliente X</div>
            <div className="card">"Entrega puntual y calidad" — Cliente Y</div>
          </div>
        </div>
      </section> */}

      <section id="contacto" className="py-20 bg-accent-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Contacto</h2>
          <p className="mb-6">¿Listo para trabajar juntos? Mándame un mensaje.</p>
          <form className="max-w-xl">
            <input className="form-input" placeholder="Tu nombre" />
            <input className="form-input" placeholder="Tu correo" />
            <textarea className="form-input" placeholder="Tu mensaje" rows={5} />
            <div className="mt-4">
              <button className="btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
