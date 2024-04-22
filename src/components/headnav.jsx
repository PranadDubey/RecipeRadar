import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom"

const headnav = () => {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar navbar-expand-lg z-3 w-100 start-0 fs-5">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand ms-4">
                RecipeRadar
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto gap-5">
                  <li className="nav-item">
                    <Link to="/search-recipe" className="nav-link">
                      Search Your Recipe
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/meal-of-the-day" className="nav-link">
                      Meal of the Day
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/find-your-recipe" className="nav-link me-4" aria-current="page">
                      Find Your Dish
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </body>
    </html>
  )
}

export default headnav
