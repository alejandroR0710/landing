import React from "react"
import { createRoot } from "react-dom/client"
import 'tailwindcss/tailwind.css';
import "./index.css"
import App from "./App"

const container = document.getElementById("root")

if (!container) {
  throw new Error("The #root element was not found in the document.")
}

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
