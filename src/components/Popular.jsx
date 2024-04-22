import React, { useEffect, useState } from "react"

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=59c78b300aa04bfa88162e1df9071d07&number=8`)
    const data = await api.json()
    console.log(data)
    setPopular(data.recipes)
  }

  return (
    <div>
      <div className="fs-2 mt-3" style={{ display: "flex", justifyContent: "center", fontWeight: "600" }}>
        Popular Recipes
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {popular.map((recipe) => {
          return (
            <div className="shadow rounded-3" style={{ margin: "20px", padding: "20px" }}>
              <img src={recipe.image} className="rounded-2" style={{ height: "200px", width: "300px" }} />
              <p className="mt-3" style={{ fontWeight: "700" }}>
                {recipe.title}
              </p>
              <p>Cooking Time : {recipe.readyInMinutes}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Popular
