import React from "react"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"

const Popup = ({ type, message }) => {
  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === "success"
          ? "bg-green-100 border border-green-400 text-green-700"
          : "bg-red-100 border border-red-400 text-red-700"
      }`}
    >
      <div className="flex items-center">
        {type === "success" ? (
          <FaCheckCircle className="mr-2" />
        ) : (
          <FaTimesCircle className="mr-2" />
        )}
        <span>{message}</span>
      </div>
    </div>
  )
}

export default Popup
