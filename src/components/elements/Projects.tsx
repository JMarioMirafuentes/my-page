const ProjectsPage = () => {
  return (
    <section id="proyectos" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Proyectos destacados</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <img src="/assets/revesa.png" alt="ERP Revesa Energy" className="h-48 w-full object-cover" />
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
            <img src="/assets/pmp.png" alt="Mantenimiento perforación" className="h-48 w-full object-cover" />
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
            <img src="/assets/nutri.png" alt="Sistema Nutricional" className="h-48 w-full object-cover" />
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
            <img src="/assets/hospital.png" alt="Gestión Hospitalaria" className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-lg">Sistema Gestión Hospitalaria</h3>
              <p className="text-sm text-gray-500 mt-1">Clínica privada</p>
              <p className="text-gray-600 mt-3 text-sm">Control de pacientes, citas médicas, expedientes y administración interna hospitalaria.</p>
            </div>
          </div>

          {/* Proyecto 5 */}
          <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <img src="/assets/obras.png" alt="Administración de Obras" className="h-48 w-full object-cover" />
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
            <img src="/assets/tag.png" alt="Sistema de Mantenimiento de Barcos" className="h-48 w-full object-cover" />
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
  );
};
export default ProjectsPage;
