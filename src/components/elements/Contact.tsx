import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { sendContactEmail } from '../../../src/services/email.service';
import type { ContactSchema } from '../../../src/validation/contact.schema';
import { contactSchema } from '../../../src/validation/contact.schema';

const services = ['Desarrollo Web', 'Sistema Empresarial', 'API REST', 'Consultoría', 'Otro'];

// budget field removed per requirements

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    }
  });

  const message = watch('message') ?? '';

  const onSubmit = async (data: ContactSchema) => {
    try {
      console.log(data);

      await sendContactEmail(data);

      alert('Mensaje enviado correctamente.');

      reset();
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error.');
    }
  };

  return (
    <form id="contacto" onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-2xl bg-white p-8 shadow-lg">
      <div>
        <label className="mb-2 block font-medium">Nombre *</label>

        <input {...register('name')} type="text" placeholder="Juan Pérez" className="form-input w-full" />

        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="mb-2 block font-medium">Correo electrónico *</label>

        <input {...register('email')} type="email" placeholder="correo@empresa.com" className="form-input w-full" />

        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="mb-2 block font-medium">Empresa</label>

        <input {...register('company')} type="text" placeholder="Empresa (Opcional)" className="form-input w-full" />
      </div>

      <div>
        <label className="mb-2 block font-medium">Servicio requerido *</label>

        <select {...register('service')} className="form-input w-full">
          <option value="">Selecciona un servicio</option>

          {services.map(service => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>

        {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>}
      </div>

      {/* Presupuesto eliminado */}

      <div>
        <label className="mb-2 block font-medium">Mensaje *</label>

        <textarea {...register('message')} rows={6} placeholder="Cuéntame sobre tu proyecto..." className="form-input w-full resize-none" />

        <div className="mt-1 flex justify-between">
          <span className="text-sm text-red-500">{errors.message?.message}</span>

          <span className="text-sm text-gray-500">{message.length}/1000</span>
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50">
        {isSubmitting ? 'Enviando...' : '🚀 Enviar mensaje'}
      </button>
    </form>
  );
};

export default ContactForm;
