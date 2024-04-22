import React from "react"
import HomePage from "./HomePage"
import Category from "./Category"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import FindRecipe from "./FindRecipe"
// import Headnav from "../components/headnav"
import SearchRecipe from "./SearchRecipe"
import Recipe from "./Recipe"
import { ImageProvider } from "../ImageContext"

const Pages = () => {
  return (
    <div>
      <ImageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/find-your-recipe" element={<FindRecipe />}></Route>
            <Route path="/search-recipe" element={<SearchRecipe></SearchRecipe>}></Route>
            <Route path="/recipe/:recipeId" element={<Recipe></Recipe>}></Route>
          </Routes>
        </BrowserRouter>
      </ImageProvider>
    </div>
  )
}

export default Pages
