import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useImageContext } from "../ImageContext"

const SearchRecipeTab = () => {
  const [inputValue, setInputValue] = useState("")
  const [recipes, setRecipe] = useState([])
  const [searchRecipe, setSearchRecipe] = useState([])
  const navigate = useNavigate()
  const { setImage } = useImageContext()

  const getRecipe = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=59c78b300aa04bfa88162e1df9071d07&query=${inputValue}&number=4`)
    const data = await api.json()
    console.log(data)
    setRecipe(data.results)
  }

  const autocompleteRecipe = async (event) => {
    const query = event.target.value
    setInputValue(query)
    const api = await fetch(`https://api.spoonacular.com/recipes/autocomplete?apiKey=59c78b300aa04bfa88162e1df9071d07&number=5&query=${query}`)
    const data = await api.json()
    console.log(data)
    setSearchRecipe(data)
  }

  const handleRecipeClick = (recipeId, imageUrl) => {
    setImage(imageUrl)
    navigate(`/recipe/${recipeId}`)
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", fontSize: "32px", fontWeight: "650", marginTop: "0.8rem" }}> Search Recipes </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "1.2rem" }}>
        <input list="recipes" placeholder="Enter Dish Name" value={inputValue} style={{ width: "600px", height: "40px", borderRadius: "0.4rem 0 0 0.4rem" }} onChange={autocompleteRecipe} />
        <datalist id="recipes">
          {searchRecipe.map((recipe) => (
            <option value={recipe.title} key={recipe.id}></option>
          ))}
        </datalist>
        <button style={{ height: "40px", borderRadius: "0 0.4rem 0.4rem 0", backgroundColor: "green", color: "white", border: "none" }} onClick={getRecipe}>
          Search
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {recipes.length === 0 ? (
          <div style={{ display: "flex", justifyContent: "end", fontSize: "20px", fontWeight: "600", marginTop: "40px" }}>No dishes found</div>
        ) : (
          recipes.map((recipe) => (
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

export default SearchRecipeTab
