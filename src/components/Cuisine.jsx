// import React, { useState } from "react"
// import { NavLink } from "react-router-dom"

// function Cuisine() {
//   const [activeColor, setColor] = useState("white")

//   useEffect(() => {
//     getDishes()
//   }, [])

//   const getDishes = async () => {
//     const api = await fetch("")
//   }

//   return (
//     <div>
//       <div className="fs-2 mt-3" style={{ display: "flex", justifyContent: "center", fontWeight: "600" }}>
//         Explore Cuisines
//       </div>
//       <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
//         <NavLink
//           className="shadow rounded-5"
//           style={{ margin: "20px", padding: "20px", textDecoration: "none", color: "black", fontWeight: "600", height: "50px", width: "120px", backgroundColor: { activeColor } }}
//           to={"/cuisine/Italian"}
//         >
//           Italian
//         </NavLink>
//         <NavLink
//           className="shadow rounded-5"
//           style={{ margin: "20px", padding: "20px", textDecoration: "none", color: "black", fontWeight: "600", height: "50px", width: "120px" }}
//           to={"/cuisine/American"}
//         >
//           American
//         </NavLink>
//         <NavLink
//           className="shadow rounded-5"
//           style={{ margin: "20px", padding: "20px", textDecoration: "none", color: "black", fontWeight: "600", height: "50px", width: "120px" }}
//           to={"/cuisine/Thai"}
//         >
//           Thai
//         </NavLink>
//         <NavLink
//           className="shadow rounded-5"
//           style={{ margin: "20px", padding: "20px", textDecoration: "none", color: "black", fontWeight: "600", height: "50px", width: "120px" }}
//           to={"/cuisine/Japanese"}
//         >
//           Japanese
//         </NavLink>
//         <div className=""></div>
//       </div>
//     </div>
//   )
// }

// export default Cuisine
import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

function Cuisine() {
  const [activeCuisine, setActiveCuisine] = useState(null)
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    // Fetch dishes when activeCuisine changes
    if (activeCuisine) {
      getDishes(activeCuisine)
    }
  }, [activeCuisine])

  const getDishes = async (cuisine) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=59c78b300aa04bfa88162e1df9071d07&cuisine=${cuisine}&number=8`)
    const data = await api.json()
    console.log(data.results)
    setDishes(data.results)
  }

  const handleCuisineClick = (cuisine) => {
    setActiveCuisine(cuisine)
    setDishes([])
  }

  return (
    <div>
      <div className="fs-2 mt-3" style={{ display: "flex", justifyContent: "center", fontWeight: "600" }}>
        Explore Cuisines
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <div
          className="shadow rounded-5"
          style={{
            margin: "20px",
            padding: "20px",
            textDecoration: "none",
            color: "black",
            fontWeight: "600",
            height: "50px",
            width: "120px",
            backgroundColor: activeCuisine === "Italian" ? "green" : "white",
          }}
          onClick={() => handleCuisineClick("Italian")}
        >
          Italian
        </div>
        <div
          className="shadow rounded-5"
          style={{
            margin: "20px",
            padding: "20px",
            textDecoration: "none",
            color: "black",
            fontWeight: "600",
            height: "50px",
            width: "120px",
            backgroundColor: activeCuisine === "Chinese" ? "green" : "white",
          }}
          onClick={() => handleCuisineClick("Chinese")}
        >
          Chinese
        </div>
        <div
          className="shadow rounded-5"
          style={{
            margin: "20px",
            padding: "20px",
            textDecoration: "none",
            color: "black",
            fontWeight: "600",
            height: "50px",
            width: "120px",
            backgroundColor: activeCuisine === "Indian" ? "green" : "white",
          }}
          onClick={() => handleCuisineClick("Indian")}
        >
          Indian
        </div>
        <div
          className="shadow rounded-5"
          style={{
            margin: "20px",
            padding: "20px",
            textDecoration: "none",
            color: "black",
            fontWeight: "600",
            height: "50px",
            width: "120px",
            backgroundColor: activeCuisine === "American" ? "green" : "white",
          }}
          onClick={() => handleCuisineClick("American")}
        >
          American
        </div>
      </div>
      {dishes && dishes.length > 0 && (
        <div>
          <ul>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
              {dishes.map((dish, index) => (
                <div className="shadow rounded-3" style={{ margin: "20px", padding: "15px" }}>
                  <img src={dish.image} className="rounded-2" style={{ height: "200px", width: "300px" }} />
                  <p className="mt-3" style={{ fontWeight: "700" }}>
                    {dish.title}
                  </p>
                </div>
              ))}
            </div>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Cuisine
