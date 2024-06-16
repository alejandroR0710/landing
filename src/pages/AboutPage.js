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
                Proveer agua potable de la más alta calidad, asegurando el
                acceso a todos y contribuyendo al bienestar y desarrollo de la
                comunidad. Nos comprometemos a operar con transparencia,
                responsabilidad ambiental y social, y a mantener una mejora
                continua en nuestros procesos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Nuestra Visión
              </h2>
              <p className="text-secondary-light">
                Ser líderes en la gestión y distribución de recursos hídricos,
                promoviendo prácticas sostenibles y tecnológicas para un futuro
                mejor. Aspiramos a ser reconocidos como una organización
                innovadora y comprometida con la excelencia en el servicio y la
                satisfacción del cliente.
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
            Desde nuestra fundación en 1990, hemos trabajado incansablemente
            para proveer agua potable a nuestras comunidades. Con más de 30 años
            de experiencia, hemos evolucionado y crecido, adaptándonos a los
            cambios tecnológicos y ambientales para ofrecer un servicio de
            excelencia. Nuestros inicios humildes se han transformado en una red
            robusta que atiende a miles de clientes, garantizando siempre la
            calidad y continuidad del servicio.
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
      <section className="bg-white p-10">
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
      </section>

      {/* Video Institucional */}
      <section className="bg-neutral-lightest p-10 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Conoce más sobre nosotros
          </h2>
          <div className="relative pb-9/16">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video Institucional"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Llamada a la Acción */}
      <section className="bg-tertiary text-white p-10 text-center">
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
      </section>
    </div>
  )
}

export default AboutPage
