import Cuisine from "../components/Cuisine"
import Popular from "../components/Popular"
import Headnav from "../components/headnav"
import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <>
      <Headnav></Headnav>
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          height: "100vh",

          backgroundSize: "100% 130%",
        }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 col-lg-6 col-md-6 h-100 position-relative">
              <div className="box position-absolute top-50 rounded text-dark shadow p-4" style={{ background: "rgba(0,0,0,0)", backdropFilter: "blur(25px)", transform: "translateY(-40%)" }}>
                <div className="heading mb-3" style={{ fontSize: "70px" }}>
                  Discover endless recipes with ease.
                </div>
                <Link to="/find-your-recipe" className="p-3 rounded-3 d-flex justify-content-center fs-5" style={{ backgroundColor: "green", color: "white", textDecoration: "none" }}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popular></Popular>
      <Cuisine></Cuisine>
    </>
  )
}

export default HomePage
