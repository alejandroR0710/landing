import React from "react"

const AboutPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-primary-light text-primary p-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold">Sobre Nosotros</h1>
          <p className="text-xl mt-4">
            Conoce más sobre nuestra misión y visión.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="bg-neutral-lightest p-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Nuestra Misión
              </h2>
              <p className="text-secondary-light">
                Proporcionar con calidad y eficiencia los servicios de agua potable y saneamiento básico para 
                contribuir al bienestar, la calidad y el entorno ecológico de los habitantes del corregimiento 
                de Ceilán del municipio de Bugalagrande, a través del desarrollo integral de nuestro personal 
                y en apego al marco legal aplicable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Nuestra Visión
              </h2>
              <p className="text-secondary-light">
                Garantizar el suministro de agua potable y saneamiento básico a las próximas 
                generaciones del corregimiento de Ceilán del municipio de Bugalagrande, 
                satisfacer las necesidades de nuestros clientes, y que nuestros indicadores 
                de gestión nos coloquen como organismo operador líder en el país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historia de la Empresa */}
      <section className="bg-white p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Nuestra Historia
          </h2>
          <p className="text-secondary-light mb-4">
            La Asociación de Usuarios de los Servicios Públicos del Corregimiento de Ceilán Municipio de 
            Bugalagrande departamento del Valle del Cauca República de Colombia "Servipublicos", 
            identificada con Nit: 821.000.380-2, fue constituida por documento privado del 18 de noviembre de 1996, 
            registrada en la cámara de comercio de Tuluá bajo el número 42 del libro del libro I del registro de 
            entidades sin ánimo de lucro el 23 de Diciembre de 1996.
          </p>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Historia de la Empresa"
              className="mx-auto rounded-lg shadow-lg mb-4"
            />
            <p className="text-secondary-light italic">
              Imagen representativa de nuestra historia y crecimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Objeto social y actividades */}
      <section className="bg-neutral-lightest p-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Objecto Social
              </h2>
              <p className="text-secondary-light">
                Responder porque la planta de tratamiento que surte el acueducto permanezca en buen estado.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Actividades
              </h2>
              <p className="text-secondary-light">
                Servipublicos, tendrá como objetivo primordial administrar y garantizar la prestación oportuna y organizada del servicio de acueducto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="bg-neutral-lightest p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Miembro del Equipo"
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Juan Pérez
              </h3>
              <p className="text-secondary-light">CEO y Fundador</p>
              <p className="text-secondary-light">
                Juan es el visionario detrás de nuestra empresa, liderando con
                pasión y dedicación para garantizar el acceso al agua potable
                para todos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Miembro del Equipo"
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-secondary mb-2">
                María López
              </h3>
              <p className="text-secondary-light">Directora de Operaciones</p>
              <p className="text-secondary-light">
                María se encarga de supervisar todas las operaciones diarias,
                asegurando que nuestros servicios se entreguen de manera
                eficiente y oportuna.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Miembro del Equipo"
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Carlos Martínez
              </h3>
              <p className="text-secondary-light">Jefe de Tecnología</p>
              <p className="text-secondary-light">
                Carlos lidera nuestro equipo tecnológico, implementando
                innovaciones y soluciones tecnológicas para mejorar nuestra
                infraestructura de acueducto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      {/* <section className="bg-white p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-lightest p-6 rounded-lg shadow-lg">
              <p className="text-secondary-light">
                "El servicio que ofrecen es excepcional. Siempre atentos a
                nuestras necesidades y con una calidad de agua inmejorable."
              </p>
              <p className="text-primary font-bold mt-4">- Ana Fernández</p>
            </div>
            <div className="bg-neutral-lightest p-6 rounded-lg shadow-lg">
              <p className="text-secondary-light">
                "Desde que contratamos sus servicios, hemos visto una mejora
                significativa en la eficiencia y calidad de nuestra red de
                agua."
              </p>
              <p className="text-primary font-bold mt-4">- Luis García</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Video Institucional */}
      <section className="bg-neutral-lightest p-10 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Conoce más sobre nosotros
          </h2>
          <div className="relative pb-9/16">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/LqoVJPFAbf4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video Institucional"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Llamada a la Acción */}
      {/* <section className="bg-tertiary text-white p-10 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para trabajar con nosotros?
          </h2>
          <a
            href="/contact"
            className="bg-accent text-primary font-bold py-2 px-6 rounded hover:bg-secondary-light transition duration-300"
          >
            Contáctanos
          </a>
        </div>
      </section> */}
    </div>
  )
}

export default AboutPage
