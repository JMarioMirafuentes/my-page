import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../interfaces/contact';

export const sendContactEmail = async (data: ContactFormData) => {
  return await emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      company: data.company,
      service: data.service,
      message: data.message
    },
    import.meta.env.VITE_EMAIL_PUBLIC_KEY
  );
};
