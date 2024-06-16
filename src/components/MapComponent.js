/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { FaHotel } from "react-icons/fa"

const Map = () => {
  useEffect(() => {
    const handleMapsLoaded = () => {
      if (!window.google) {
        console.error("Google Maps JavaScript API not loaded")
        return
      }

      const location = { lat: 4.636284828186035, lng: -74.18932342529297 }
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
      })

      // En este caso usamos un icono de la libreria de react-icons
      // renderToStaticMarkup: Convierte el componente de react-icons a una cadena SVG.
      const iconSVG = renderToStaticMarkup(
        <FaHotel color="#003366" size="32" />
      )
      //btoa: Codifica la cadena SVG en base64 para usarla como una URL de datos.
      const iconURL = `data:image/svg+xml;base64,${btoa(iconSVG)}`

      new window.google.maps.Marker({
        map,
        position: location,
        title: "My location",
        icon: {
          url: iconURL, // pasamos el icono en svg , pero se puede usar url
          // scaledSize: new window.google.maps.Size(62, 62), // y si quiere configurar las dimensiones del icono , no es obligatorio y solo se usa con urls
        },
      })
    }

    if (window.initMapLoaded) {
      handleMapsLoaded()
    } else {
      window.addEventListener("google-maps-loaded", handleMapsLoaded)
    }

    return () => {
      window.removeEventListener("google-maps-loaded", handleMapsLoaded)
    }
  }, [])

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>
}

export default Map
