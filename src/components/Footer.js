import React from "react"
import { Link } from "react-router-dom"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"
import logo from "../assets/Images/LogoFooter.webp"

const FooterPage = () => {
  return (
    <footer className="bg-primary text-white py-10 px-10 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo e Información de la Empresa */}
        <div className="mb-6 md:mb-0 flex flex-col items-start text-center">
          <Link to="/">
            <img src={logo} alt="LogoFooter" className="h-52" />
          </Link>
          <p className="mt-2 text-secondary-light">
            Brindando servicios de acueducto de calidad desde 1990.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
          <ul>
            <li className="mb-2">
              <Link
                to="/"
                className="text-white hover:text-secondary-light transition duration-300"
              >
                Inicio
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/about"
                className="text-white hover:text-secondary-light transition duration-300"
              >
                Acerca de
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/services"
                className="text-white hover:text-secondary-light transition duration-300"
              >
                Servicios
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/projects"
                className="text-white hover:text-secondary-light transition duration-300"
              >
                Mejoras
              </Link>
            </li>
            {/* <li className="mb-2">
              <Link
                to="/testimonials"
                className="text-white hover:text-secondary-light transition duration-300"
              >
                Testimonios
              </Link>
            </li> */}
            <li className="mb-2">
              <Link
                to="/faqs"
                className="text-white hover:text-secondary-light transition duration-300"
              >
                FAQs
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/contact"
                className="text-white hover:text-secondary-light transition duration-300"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Información de Contacto */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold mb-4">Contáctanos</h4>
          <p className="text-secondary-light mb-2">
            CORR DE CEILAN CL 4 27 INSTALACIONES GALERIA
          </p>
          <p className="text-secondary-light mb-2">+57 3137111140</p>
          <p className="text-secondary-light">
            servipublicosceilan@gmail.com
          </p>
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary-light transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary-light transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary-light transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary-light transition duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 border-t border-secondary-light pt-4">
        <p className="text-secondary-light">
          ©2024 Servipublicos E.S.P. Todos los derechos reservados.
        </p>
        <p className="text-secondary-light mt-2">
          Creado por{" "}
          <a
            href="https://portafolio.coat-su.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary-light transition duration-300"
          >
            <strong>ATSU</strong>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default FooterPage
