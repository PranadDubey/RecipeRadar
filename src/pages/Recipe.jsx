import React, { useEffect, useState } from "react"
import Headnav from "../components/headnav"
import { useParams } from "react-router-dom"
import { useImageContext } from "../ImageContext"
import SimilarRecipes from "../components/SimilarRecipes"

const Recipe = () => {
  const { recipeId } = useParams()
  const { imageUrl } = useImageContext()
  const [recipe, setRecipe] = useState({})

  const getRecipe = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=59c78b300aa04bfa88162e1df9071d07`)
    const data = await api.json()
    console.log(data)
    console.log(imageUrl)
    if (data.length > 0) {
      setRecipe(data[0])
    }
  }

  useEffect(() => {
    getRecipe()
  }, [])

  return (
    <div>
      <Headnav />
      <div>
        <h2>{recipe.name}</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <div style={{ display: "flex", justifyContent: "center", marginTop: "150px" }}>
                <img style={{ height: "300px" }} src={imageUrl} alt="Recipe" />
              </div>
            </div>
            <div className="col-8 mt-5">
              {recipe.steps &&
                recipe.steps.map((step, index) => (
                  <div key={index}>
                    <h5>Step {step.number}</h5>
                    <div style={{ margin: "20px", fontSize: "20px" }}>{step.step}</div>
                    {step.length && (
                      <p>
                        Time required: {step.length.number} {step.length.unit}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <SimilarRecipes></SimilarRecipes>
    </div>
  )
}

export default Recipe
