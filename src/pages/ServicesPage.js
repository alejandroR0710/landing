import React from "react"
import { FaWater, FaWrench, FaLeaf, FaHandHoldingWater } from "react-icons/fa"

const servicesData = [
  {
    icon: <FaWater size={40} className="text-primary" />,
    title: "Suministro de Agua Potable",
    description:
      "Proveemos agua potable de alta calidad a hogares y empresas, asegurando un suministro constante y seguro.",
  },
  {
    icon: <FaWrench size={40} className="text-primary" />,
    title: "Mantenimiento de Redes",
    description:
      "Ofrecemos servicios de mantenimiento y reparación de redes de acueducto para garantizar un funcionamiento óptimo.",
  },
  {
    icon: <FaLeaf size={40} className="text-primary" />,
    title: "Tratamiento de Aguas Residuales",
    description:
      "Contamos con plantas de tratamiento de aguas residuales que aseguran el manejo adecuado y sostenible del agua.",
  },
  {
    icon: <FaHandHoldingWater size={40} className="text-primary" />,
    title: "Educación y Concientización",
    description:
      "Implementamos programas de educación y concientización sobre el uso responsable del agua y su conservación.",
  },
]

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center text-primary mb-8">
        Nuestros Servicios
      </h1>
      <p className="text-center text-secondary mb-12">
        Ofrecemos una amplia gama de servicios para garantizar el acceso al agua
        potable y el manejo sostenible de recursos hídricos.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-neutral-lightest p-6 rounded-lg shadow-lg text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-primary mb-2">
              {service.title}
            </h2>
            <p className="text-secondary-light">{service.description}</p>
          </div>
        ))}
      </div>
      {/* Llamada a la Acción */}
      <div className="mt-12 bg-secondary-light text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-primary mb-4">
          ¿Necesitas más información?
        </h2>
        <p className="text-primary mb-6">
          Contacta con nosotros para conocer más detalles sobre nuestros
          servicios y cómo podemos ayudarte.
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=573207864825&text=Hola,%20necesito%20solicitar%20el%20servicio%20de%20agua%20para%20mi%20hogar.%20¿Puede ayudarme?"
          className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition duration-300"
        >
          Contáctanos
        </a>
      </div>
    </div>
  )
}

export default ServicesPage
