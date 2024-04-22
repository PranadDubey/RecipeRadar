// ImageContext.js
import React, { createContext, useState, useContext } from "react"

const ImageContext = createContext()

export const useImageContext = () => useContext(ImageContext)

export const ImageProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState("")

  const setImage = (url) => {
    setImageUrl(url)
  }

  return <ImageContext.Provider value={{ imageUrl, setImage }}>{children}</ImageContext.Provider>
}
