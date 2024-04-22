import React, { useState } from "react"

const SearchIngredient = () => {
  const [ingredients, setIngredients] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [inputValue2, setInputValue2] = useState("")
  const [inputValue3, setInputValue3] = useState("")
  const [recipes, setRecipe] = useState([])

  const getRecipe = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=59c78b300aa04bfa88162e1df9071d07&ingredients=${inputValue},+${inputValue2},+${inputValue3}&number=2`)
    const data = await api.json()
    console.log(data)
    setRecipe(data)
  }

  const getIngredients = async (event) => {
    const query = event.target.value
    setInputValue(query)
    const api = await fetch(` https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=59c78b300aa04bfa88162e1df9071d07&query=${query}&number=5`)
    const data = await api.json()
    console.log(data)
    setIngredients(data)
  }

  const getIngredients2 = async (event) => {
    const query = event.target.value
    setInputValue2(query)
    const api = await fetch(` https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=59c78b300aa04bfa88162e1df9071d07&query=${query}&number=5`)
    const data = await api.json()
    console.log(data)
    setIngredients(data)
  }

  const getIngredients3 = async (event) => {
    const query = event.target.value
    setInputValue3(query)
    const api = await fetch(` https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=59c78b300aa04bfa88162e1df9071d07&query=${query}&number=5`)
    const data = await api.json()
    console.log(data)
    setIngredients(data)
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", padding: "0.8rem", fontWeight: "700", fontSize: "2rem" }}>Find Recipes With Available Ingredients</div>
      <div style={{ padding: "10px", display: "flex", justifyContent: "space-evenly" }}>
        <input
          list="ingredients"
          style={{ width: "300px", textDecoration: "none", padding: "0.6rem", borderRadius: "0.7rem" }}
          value={inputValue}
          placeholder="Type your available ingredient 1"
          onChange={getIngredients}
        />
        <datalist id="ingredients">
          {ingredients.map((ingredient) => (
            <option value={ingredient.name} key={ingredient.id}></option>
          ))}
        </datalist>
        <input
          list="ingredients"
          style={{ width: "300px", textDecoration: "none", padding: "0.6rem", borderRadius: "0.7rem" }}
          value={inputValue2}
          placeholder="Type your available ingredient 2"
          onChange={getIngredients2}
        />
        <datalist id="ingredients">
          {ingredients.map((ingredient) => (
            <option value={ingredient.name} key={ingredient.id}></option>
          ))}
        </datalist>
        <input
          list="ingredients"
          style={{ width: "300px", textDecoration: "none", padding: "0.6rem", borderRadius: "0.7rem" }}
          value={inputValue3}
          placeholder="Type your available ingredient 3"
          onChange={getIngredients3}
        />
        <datalist id="ingredients">
          {ingredients.map((ingredient) => (
            <option value={ingredient.name} key={ingredient.id}></option>
          ))}
        </datalist>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ backgroundColor: "green", padding: "8px", color: "white", border: "none", borderRadius: "0.6rem", marginTop: "8px" }} onClick={getRecipe}>
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
              <p className="mt-3" style={{ fontWeight: "700" }}>
                {recipe.title}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default SearchIngredient
