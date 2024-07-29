const statusClasses = {
    "Antes": "bg-red-200 text-red-800",
    "Nuevo": "bg-blue-200 text-blue-800",
    "Ahora": "bg-green-200 text-green-800",
    "Completado": "bg-green-200 text-green-800",
    "En Progreso": "bg-orange-200 text-orange-800",
    "Terminado": "bg-yellow-200 text-yellow-800",
    "default": "bg-gray-200 text-gray-800"
};

const getStatusClass = (status) => statusClasses[status] || statusClasses["default"];

export default getStatusClass;