import React from "react"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const testimonialsData = [
  {
    name: "Carlos Ramírez",
    position: "Propietario de Restaurante",
    testimonial:
      "El servicio de acueducto ha sido excelente. El agua siempre llega a tiempo y con la mejor calidad. Estoy muy satisfecho con la atención al cliente.",
  },
  {
    name: "María Fernanda López",
    position: "Gerente de Planta Industrial",
    testimonial:
      "Gracias a Servipublicos E.S.P., nuestra planta cuenta con un suministro constante de agua potable, lo cual es crucial para nuestras operaciones diarias.",
  },
  {
    name: "José Pérez",
    position: "Residente de la Ciudad",
    testimonial:
      "El equipo de Servipublicos E.S.P. es muy profesional. Respondieron rápidamente a un problema con el suministro de agua y lo solucionaron eficientemente.",
  },
]

const TestimonialsPage = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center text-primary mb-8">
        Testimonios
      </h1>
      <p className="text-center text-secondary mb-12">
        Comentarios y testimonios de nuestros clientes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-neutral-lightest p-6 rounded-lg shadow-lg"
          >
            <FaQuoteLeft size={24} className="text-primary mb-4" />
            <p className="text-secondary-light mb-4">
              {testimonial.testimonial}
            </p>
            <FaQuoteRight size={24} className="text-primary mb-4" />
            <h2 className="text-2xl font-semibold text-primary mb-1">
              {testimonial.name}
            </h2>
            <p className="text-secondary">{testimonial.position}</p>
          </div>
        ))}
      </div>
      {/* Llamada a la Acción */}
      <div className="mt-12 bg-secondary-light text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-primary mb-4">
          ¿Quieres compartir tu experiencia?
        </h2>
        <p className="text-primary mb-6">
          Nos encantaría escuchar tu opinión. Contáctanos para dejar tu
          testimonio.
        </p>
        <a
          href="/contact"
          className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition duration-300"
        >
          Contáctanos
        </a>
      </div>
    </div>
  )
}

export default TestimonialsPage
