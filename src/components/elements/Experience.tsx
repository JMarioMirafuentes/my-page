import { useState } from 'react';
import { experience } from '../../data/experience.data';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="experiencia" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-left text-accent-600">Experiencia</h2>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <ExperienceCard
              key={job.company + job.period}
              job={job}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
