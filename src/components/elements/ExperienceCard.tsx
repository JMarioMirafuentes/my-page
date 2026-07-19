import type { Experience } from '../../interfaces/types';

interface Props {
  job: Experience;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ExperienceCard({ job, isOpen, onToggle }: Props) {
  return (
    <article className="card">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="md:w-3/12 text-left">
          <p className="text-sm text-gray-500">{job.period}</p>
          <p className="mt-2 text-sm font-semibold text-accent-600">{job.role}</p>
          <p className="text-sm text-gray-600 mt-1">{job.company}</p>
        </div>

        <div className="md:w-9/12">
          <div className="flex justify-end md:justify-start">
            <button onClick={onToggle} className="text-sm px-3 py-1 border rounded-md hover:bg-surface-50" style={{ borderColor: 'var(--border)' }}>
              {isOpen ? 'Ocultar' : 'Ver detalles'}
            </button>
          </div>

          {isOpen ? (
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700 text-left">
              {job.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-gray-600">
              {job.details[0].slice(0, 120)}
              {job.details[0].length > 120 ? '...' : ''}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
