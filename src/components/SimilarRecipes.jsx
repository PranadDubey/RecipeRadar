import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useImageContext } from "../ImageContext"
import { useNavigate } from "react-router-dom"

const SimilarRecipes = () => {
  const { recipeId } = useParams()
  const [similarRecipe, setSimilarRecipe] = useState([])
  const { setImage } = useImageContext()
  const navigate = useNavigate()

  const getSimilar = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/similar?apiKey=59c78b300aa04bfa88162e1df9071d07&number=4`)
    const data = await api.json()
    console.log(data)
    setSimilarRecipe(data)
  }

  const handleRecipeClick = (recipeId, imageUrl) => {
    setImage(imageUrl)
    navigate(`/recipe/${recipeId}`)
  }

  useEffect(() => {
    getSimilar()
  }, [])

  return (
    <div>
      <div style={{ fontSize: "30px", display: "flex", justifyContent: "center", fontWeight: "600", marginTop: "8px" }}>Similar Recipes</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {similarRecipe.length === 0 ? (
          <div style={{ display: "flex", justifyContent: "end", fontSize: "20px", fontWeight: "600", marginTop: "40px" }}>No dishes found</div>
        ) : (
          similarRecipe.map((recipe) => (
            <div className="shadow rounded-3" style={{ margin: "20px", padding: "20px" }} key={recipe.id}>
              <img src={recipe.image} className="rounded-2" style={{ height: "200px", width: "300px" }} />
              <p className="mt-3" style={{ fontWeight: "700", fontSize: "20px" }}>
                {recipe.title}
              </p>
              <button
                onClick={() => handleRecipeClick(recipe.id, recipe.image)}
                className="ms-auto"
                style={{ display: "flex", justifyContent: "flex-end", backgroundColor: "green", border: "none", color: "white", padding: "8px", borderRadius: "8px" }}
              >
                See Detailed Instructions
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default SimilarRecipes
