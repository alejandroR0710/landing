import React, { useState } from "react"

const faqsData = [
  {
    question: "¿Cómo puedo contratar el servicio de acueducto?",
    answer:
      "Para contratar el servicio de acueducto, puede comunicarse con nuestro departamento de atención al cliente a través de nuestro sitio web o llamando al número de contacto proporcionado en la sección de contacto.",
  },
  {
    question: "¿Qué debo hacer en caso de una fuga de agua?",
    answer:
      "En caso de una fuga de agua, debe comunicarse inmediatamente con nuestro equipo de soporte técnico. Proporcionaremos asistencia rápida para solucionar el problema.",
  },
  {
    question: "¿Cómo se factura el servicio de acueducto?",
    answer:
      "El servicio de acueducto se factura mensualmente. Puede recibir su factura por correo electrónico o en formato físico, según su preferencia.",
  },
  /* {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos diversos métodos de pago, incluyendo transferencias bancarias, tarjetas de crédito y débito, y pagos en efectivo en puntos de atención autorizados.",
  }, */
  {
    question: "¿Cómo puedo reportar un problema con mi servicio?",
    answer:
      "Puede reportar cualquier problema con su servicio a través de nuestro portal en línea o llamando a nuestro centro de atención al cliente.",
  },
]

const FAQsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center text-primary mb-8">FAQs</h1>
      <p className="text-center text-secondary mb-12">
        Respuestas a preguntas frecuentes.
      </p>
      <div className="bg-neutral-lightest p-6 rounded-lg shadow-lg">
        {faqsData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-2xl font-semibold text-primary p-4 bg-white rounded-lg shadow-md focus:outline-none"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-secondary-light p-4 border-l-4 border-primary bg-white rounded-lg shadow-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Llamada a la Acción */}
      <div className="mt-12 bg-secondary-light text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-primary mb-4">
          ¿Tienes más preguntas?
        </h2>
        <p className="text-primary mb-6">
          Si no encuentras la respuesta que buscas, no dudes en ponerte en
          contacto con nosotros.
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

export default FAQsPage
