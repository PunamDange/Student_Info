import React from 'react'
import { NavLink } from 'react-router-dom'

function StudentNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
    <div className="container-fluid">
        <NavLink className="navbar-brand text-primary" to="/">Student App</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/create">create Student</NavLink>
            <NavLink className="nav-link" to="/list">Show Student</NavLink>
        </div>
        </div>
    </div>
    </nav>
  )
}

export default StudentNavBar