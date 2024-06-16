/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react"
import emailjs from "emailjs-com"
import Popup from "../components/PopUp"
import MapComponent from "../components/MapComponent"

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [popup, setPopup] = useState({ show: false, type: "", message: "" })

  useEffect(() => {
    if (popup.show) {
      const timer = setTimeout(() => {
        setPopup({ show: false, type: "", message: "" })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [popup])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .send(
        "service_sfzi0ih", // Reemplaza con el Service ID al momento de configurar l;a cuenta en EmailJS
        "template_atg0zhj", // Reemplaza con tu Template ID al momento de configurar la cuenta en EmailJS
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "wdyZuWLhARRiqTK8T" // Reemplaza con tu User ID / en este caso de la version se configura el API KEY
      )
      .then(
        (result) => {
          setPopup({
            show: true,
            type: "success",
            message: "Mensaje enviado con éxito!",
          })
          setForm({ name: "", email: "", message: "" })
        },
        (error) => {
          setPopup({
            show: true,
            type: "error",
            message:
              "Error al enviar el mensaje. Por favor, inténtelo de nuevo.",
          })
        }
      )
  }

  return (
    <div className="font-sans">
      {popup.show && <Popup type={popup.type} message={popup.message} />}
      {/* Hero Section */}
      <section className="bg-primary-light text-primary p-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold">Contáctanos</h1>
          <p className="text-xl mt-4">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros.
          </p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="bg-neutral-lightest p-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Información de Contacto
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Dirección
              </h3>
              <p className="text-secondary-light">
                123 Calle Principal, Ciudad, País
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Teléfono
              </h3>
              <p className="text-secondary-light">+1 (123) 456-7890</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-secondary mb-2">
                Email
              </h3>
              <p className="text-secondary-light">
                contacto@acueductoservicios.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="bg-white p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Formulario de Contacto
          </h2>
          <form
            className="max-w-lg mx-auto bg-neutral-lightest p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-secondary font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                className="w-full p-3 rounded bg-white border border-secondary-light"
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-secondary font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-3 rounded bg-white border border-secondary-light"
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Tu email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-secondary font-bold mb-2"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                className="w-full p-3 rounded bg-white border border-secondary-light"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tu mensaje"
                required
              ></textarea>
            </div>
            <button
              className="bg-primary text-white font-bold py-3 px-6 rounded"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-neutral-lightest p-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Nuestra Ubicación
          </h2>
          <MapComponent />
        </div>
      </section>

      {/* Llamada a la Acción */}
      <section className="bg-tertiary text-white p-10 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            ¿Tienes alguna pregunta? ¡Estamos aquí para ayudarte!
          </h2>
          <button className="bg-accent text-primary font-bold py-2 px-6 rounded">
            Envíanos un mensaje
          </button>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
