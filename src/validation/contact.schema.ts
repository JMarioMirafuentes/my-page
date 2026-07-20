import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),

  email: z.string().email('Ingresa un correo válido'),

  company: z.string().optional(),

  service: z.string().min(1, 'Selecciona un servicio'),
  message: z.string().min(20, 'El mensaje debe tener al menos 20 caracteres').max(1000, 'El mensaje es demasiado largo')
});

export type ContactSchema = z.infer<typeof contactSchema>;
