import React from "react"
// import projectImage1 from "../assets/Images/project1.jpg";
// import projectImage2 from "../assets/Images/project2.jpg";
// import projectImage3 from "../assets/Images/project3.jpg";

const projectsData = [
  {
    image: "https://via.placeholder.com/150",
    title: "Ampliación de la Planta de Tratamiento",
    description:
      "Este proyecto incluye la expansión de nuestra planta de tratamiento para aumentar la capacidad y mejorar la calidad del agua procesada.",
    status: "Completo",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Modernización de Redes de Distribución",
    description:
      "Hemos modernizado las redes de distribución para reducir las pérdidas de agua y asegurar un suministro más eficiente.",
    status: "En Progreso",
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Programa de Conservación de Agua",
    description:
      "Implementamos programas educativos y de infraestructura para promover la conservación del agua en comunidades locales.",
    status: "Planeado",
  },
]

const ProjectsPage = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center text-primary mb-8">
        Nuestros Proyectos
      </h1>
      <p className="text-center text-secondary mb-12">
        Descubre algunos de los proyectos clave en los que hemos trabajado para
        mejorar el suministro y la gestión del agua.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-lightest p-6 rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-lg mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-2xl font-semibold text-primary mb-2">
              {project.title}
            </h2>
            <p className="text-secondary-light mb-4">{project.description}</p>
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                project.status === "Completo"
                  ? "bg-green-200 text-green-800"
                  : project.status === "En Progreso"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {project.status}
            </span>
          </div>
        ))}
      </div>
      {/* Llamada a la Acción */}
      <div className="mt-12 bg-secondary-light text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-primary mb-4">
          ¿Interesado en nuestros proyectos?
        </h2>
        <p className="text-primary mb-6">
          Contáctanos para obtener más información sobre nuestros proyectos y
          cómo pueden beneficiar a tu comunidad.
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

export default ProjectsPage
