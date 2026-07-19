const ContactPage = () => {
  return (
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
  );
};

export default ContactPage;
