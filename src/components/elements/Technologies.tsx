const Technologies: React.FC = () => {
  return (
    <section id="tecnologias" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">🛠 Tecnologías & Herramientas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Frontend */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'AngularJS', 'React', 'Bootstrap', 'Tailwind'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-surface-50 border rounded-full text-sm text-accent-600 border-var(--border)">
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
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-50 border rounded-full text-sm text-accent-600"
                  style={{ borderColor: 'var(--border)' }}>
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
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-50 border rounded-full text-sm text-accent-600"
                  style={{ borderColor: 'var(--border)' }}>
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
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-50 border rounded-full text-sm text-accent-600"
                  style={{ borderColor: 'var(--border)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testing & QA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Testing & QA</h3>
            <div className="flex flex-wrap gap-2">
              {['Selenium', 'Unit Testing', 'xUnit', 'NUnit', 'Jasmine', 'Unix'].map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-50 border rounded-full text-sm text-accent-600"
                  style={{ borderColor: 'var(--border)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Herramientas</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'GitHub', 'Power BI', 'Postman', 'Azure DevOps', 'CI/CD'].map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-50 border rounded-full text-sm text-accent-600"
                  style={{ borderColor: 'var(--border)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
