import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/Images/LogoHeader.webp"
import logoSmall from "../assets/Images/favicon.webp"
import { ContextApp } from "../context/ContextApp"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const context = useContext(ContextApp)

  if (!context) {
    throw new Error("ContextApp must be used within a ProviderApp")
  }

  const { state } = context
  const { width } = state
  const isMobile = width <= 900

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-primary flex justify-between items-center h-24 pl-10 pr-10">
      <div className="logo">
        <Link to="/">
          <picture>
            <source srcSet={logoSmall} media="(max-width: 1100px)" />
            <img src={logo} alt="Logo" className="h-16 md:h-20" />
          </picture>
        </Link>
      </div>
      {isMobile && (
        <button className="text-white absolute right-10" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes color="white" size={24} />
          ) : (
            <FaBars color="white" size={24} />
          )}
        </button>
      )}
      <nav
        className={`relative ${isMobile ? "absolute" : "flex"} ${
          isMobile ? "top-[96px] left-0 w-40" : "md:items-center md:space-x-4"
        } ${isOpen && isMobile ? "block" : isMobile ? "hidden" : ""}`}
      >
        <ul
          className={`${isMobile ? "bg-primary" : "bg-transparent md:flex"} ${
            isMobile ? "" : "md:static w-auto"
          }`}
        >
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-white block py-2 px-4 md:py-0"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-white block py-2 px-4 md:py-0"
            >
              Acerca de
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="text-white block py-2 px-4 md:py-0"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="text-white block py-2 px-4 md:py-0"
            >
              Mejoras
            </Link>
          </li>
          {/* <li>
            <Link
              to="/testimonials"
              onClick={() => setIsOpen(false)}
              className="text-white block py-2 px-4 md:py-0"
            >
              Testimonios
            </Link>
          </li> */}
          <li>
            <Link
              to="/faqs"
              onClick={() => setIsOpen(false)}
              className="text-white block py-2 px-4 md:py-0"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-white block py-2 px-4 md:py-0"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
