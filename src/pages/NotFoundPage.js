import React from "react"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-lightest text-center">
      <h1 className="text-6xl font-bold text-primary mb-4 animate-bounce">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-secondary mb-4">
        Página No Encontrada
      </h2>
      <p className="text-secondary-light mb-8">
        La página que estás buscando no existe.
      </p>
      <Link
        to="/"
        className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary-light transition duration-300"
      >
        Volver al Inicio
      </Link>
    </div>
  )
}

export default NotFoundPage
