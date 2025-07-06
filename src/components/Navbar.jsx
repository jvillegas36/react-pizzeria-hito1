import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const {  total } = useContext(CartContext)
  
  // const total = 25000;
  const token = false;
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mia!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className="btn btn-outline-light mx-1" type="submit" to="/">
                🍕Home
              </Link>
            </li>

            {token == false? <>
                        <li className="nav-item">
              <Link
                className={`btn btn-outline-light mx-1 `}
                type="submit" to="profile"
              >
                🔓Profile
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className={`btn btn-outline-light mx-1 `}
                type="submit" 
              >
                🔒Logout
              </Link>
            </li>
            </> : <>
            <li className="nav-item">
              <Link
                className={`btn btn-outline-light mx-1 `}
                type="submit" to="login"
              >
                🔐Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`btn btn-outline-light mx-1 `}
                type="submit" to="register"
              >
                🔐Register
              </Link>
            </li>
            
            </>}



          </ul>
          <form className="d-flex">
            <Link className="btn btn-outline-info" type="submit" to="cart">
              🛒Total: ${Intl.NumberFormat().format(total)}
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
