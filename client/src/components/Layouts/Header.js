import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaShopware } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand"><FaShopware /> G-shop</Link>

                 { /* Search Bar */}
                <form className="d-flex ms-3" role="search" style={{width:"500px",height:"40px",margin:"auto",borderRadius:"2px",color:"black",border:"1px solid rgba(0,0,0,0.1)",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px",alignContent:"center"}}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search products"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
              </li>
              <div className="nav-item">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                  </ul>
                </li>
              </div>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">Cart(0)</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
