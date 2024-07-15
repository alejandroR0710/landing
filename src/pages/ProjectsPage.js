import React from "react";
import images from "../utils/imageLoader";
import getStatusClass from "../utils/status";

const projectsData = [
  {
    image: "Improvements/improvements_01.webp",
    title: "Acueducto - Planta de Tratamiento de Agua",
    description: "",
    status: "Completado",
  },
  {
    image: "Improvements/improvements_02.webp",
    title: "Acueducto - Planta de Tratamiento de Agua",
    description: "",
    status: "Completado",
  },
  {
    image: "Improvements/improvements_03.webp",
    title: "PTAR - Planta de Tratamiento de Aguas Residuales",
    description: "",
    status: "Completado",
  },
  {
    image: "Improvements/improvements_04.webp",
    title: "Antigua bocatoma vereda las violetas",
    description: "",
    status: "Antes",
  },
  {
    image: "Improvements/improvements_05.webp",
    title: "Construcion de nueva bocatoma",
    description: "",
    status: "Nuevo",
  },
  {
    image: "Improvements/improvements_06.webp",
    title: "Nueva bocatoma",
    description: "",
    status: "Nuevo",
  },
  {
    image: "Improvements/improvements_07.webp",
    title: "Señalizacion de reductores de velocidad",
    description: "",
    status: "Antes",
  },
  {
    image: "Improvements/improvements_08.webp",
    title: "Señalizacion de reductores de velocidad",
    description: "",
    status: "Ahora",
  },
  {
    image: "Improvements/improvements_09.webp",
    title: "Señalizacion de reductores de velocidad",
    description: "",
    status: "Terminado",
  },
  {
    image: "Improvements/improvements_10.webp",
    title: "Señalizacion de reductores de velocidad",
    description: "",
    status: "Terminado",
  },
  // viejos
  {
    image: "Improvements/improvements_11.webp",
    title: "Limpieza de la Bocatoma antes",
    description: "",
    status: "Completado",
  },
  {
    image: "Improvements/improvements_12.webp",
    title: "Limpieza de la Bocatoma despues",
    description: "",
    status: "Completado",
  },
  {
    image: "Improvements/improvements_13.webp",
    title: "Trabajo Realizado - Cambio de tapa de Alcantarillado antes",
    description: "",
    status: "Antes",
  },
  {
    image: "Improvements/improvements_14.webp",
    title: "Trabajo Realizado - Cambio de tapa de Alcantarillado despues",
    description: "",
    status: "Ahora",
  },
  {
    image: "Improvements/improvements_15.webp",
    title: "Trabajos Realizados - Mantenimiento de Alcantarillado",
    description: "",
    status: "Completado",
  },
  {
    image: "Improvements/improvements_16.webp",
    title: "Trabajos Realizados - Mantenimiento de Alcantarillado",
    description: "",
    status: "Completado",
  },
  // videos
  {
    image: "Improvements/improvements_01.webp",
    video: "https://www.youtube.com/embed/s20SVl4hADA?modestbranding=1&showinfo=0&rel=0",
    title: "Extrategias de mitigacion ante la escases de agua por el fenomeno del niño",
    description: "",
    status: "Completado",
  },
  {
    image: "Improvements/improvements_01.webp",
    video: "https://youtube.com/embed/K6MO0i-NMg0?modestbranding=1&showinfo=0&rel=0",
    title: "Trabajos Realizados - Mantenimiento de Alcantarillado",
    description: "",
    status: "Completado",
  },
  {
    image: "Improvements/improvements_01.webp",
    video: "https://youtube.com/embed/9OaIdRsamdU?modestbranding=1&showinfo=0&rel=0",
    title: "Extrategias de mitigacion ante la escases de agua por el fenomeno del niño",
    description: "",
    status: "Completado",
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center text-primary mb-8">Mejoras</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-neutral-lightest p-6 rounded-lg shadow-lg">
            {project.video ? (
              <div className="video-wrapper mb-4">
                <iframe
                  className="w-full h-48"
                  src={project.video}
                  title={project.title}
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  // allow="accelerometer; encrypted-media; gyroscope;"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            ) : (
              <img
                src={images[project.image]}
                alt={project.title}
                className="rounded-t-lg mb-4 w-full h-48 object-cover"
              />
            )}
            <h2 className="text-2xl font-semibold text-primary mb-2">{project.title}</h2>
            <p className="text-secondary-light mb-4">{project.description}</p>
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getStatusClass(project.status)}`}
            >
              {project.status}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-secondary-light text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-primary mb-4">¿Interesado en nuestros proyectos?</h2>
        <p className="text-primary mb-6">
          Contáctanos para obtener más información sobre nuestros proyectos y cómo pueden beneficiar a tu comunidad.
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
  );
};

export default ProjectsPage;