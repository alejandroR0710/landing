import React, { useContext } from "react"
import { ContextApp } from "../context/ContextApp"

const HomePage = () => {
  // const context = useContext(ContextApp)

  // if (!context) {
  //   throw new Error("ContextApp must be used within a ProviderApp")
  // }

  // const { state } = context

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-primary-light text-primary p-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold">Servicios de Acueducto</h1>
          <p className="text-xl mt-4">
            Proporcionando agua limpia y segura para todos.
          </p>
        </div>
      </section>

      {/* Descripción de Servicios */}
      <section className="bg-neutral-lightest p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Distribución de Agua"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Distribución de Agua
              </h3>
              <p className="text-secondary-light">
                Garantizamos la distribución de agua potable de alta calidad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Mantenimiento de Redes"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Mantenimiento de Redes
              </h3>
              <p className="text-secondary-light">
                Ofrecemos mantenimiento regular para asegurar la eficiencia de
                las redes de agua.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Consultoría y Asesoramiento"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Consultoría y Asesoramiento
              </h3>
              <p className="text-secondary-light">
                Brindamos asesoramiento profesional en proyectos de acueducto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-white p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Testimonios
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-lightest p-6 rounded-lg shadow-lg">
              <p className="text-secondary-light">
                "Excelente servicio y atención al cliente. El agua siempre llega
                a tiempo y en perfectas condiciones."
              </p>
              <p className="text-primary font-bold mt-4">- Juan Pérez</p>
            </div>
            <div className="bg-neutral-lightest p-6 rounded-lg shadow-lg">
              <p className="text-secondary-light">
                "Gracias a su mantenimiento regular, no hemos tenido problemas
                con nuestras redes de agua."
              </p>
              <p className="text-primary font-bold mt-4">- María López</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipos y Tecnología */}
      <section className="bg-neutral-lightest p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Equipos y Tecnología
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Tecnología avanzada"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Tecnología avanzada
              </h3>
              <p className="text-secondary-light">
                Utilizamos tecnología de punta para asegurar la mejor calidad
                del agua.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Equipos especializados"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Equipos especializados
              </h3>
              <p className="text-secondary-light">
                Contamos con equipos especializados para la instalación y
                mantenimiento de redes de agua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Recientes */}
      <section className="bg-white p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Proyectos Recientes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-lightest p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Proyecto 1"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Proyecto 1
              </h3>
              <p className="text-secondary-light">
                Descripción breve del proyecto reciente.
              </p>
            </div>
            <div className="bg-neutral-lightest p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Proyecto 2"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Proyecto 2
              </h3>
              <p className="text-secondary-light">
                Descripción breve del proyecto reciente.
              </p>
            </div>
            <div className="bg-neutral-lightest p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Proyecto 3"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Proyecto 3
              </h3>
              <p className="text-secondary-light">
                Descripción breve del proyecto reciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Llamada a la Acción */}
      <section className="bg-tertiary text-white p-10 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para obtener nuestros servicios?
          </h2>
          <button className="bg-accent text-primary font-bold py-2 px-6 rounded">
            Contáctanos
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
