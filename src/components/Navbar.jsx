import React from "react";

const Navbar = () => {
  const total = 25000;
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
              <button className="btn btn-outline-light mx-1" type="submit">
                🍕Home
              </button>
            </li>

            {token == false? <>
                        <li className="nav-item">
              <button
                className={`btn btn-outline-light mx-1 `}
                type="submit"
              >
                🔓Profile
              </button>
            </li>
            <li className="nav-item dropdown">
              <button
                className={`btn btn-outline-light mx-1 `}
                type="submit"
              >
                🔒Logout
              </button>
            </li>
            </> : <>
            <li className="nav-item">
              <button
                className={`btn btn-outline-light mx-1 `}
                type="submit"
              >
                🔐Login
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`btn btn-outline-light mx-1 `}
                type="submit"
              >
                🔐Register
              </button>
            </li>
            
            </>}



          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-info" type="submit">
              🛒Total: ${Intl.NumberFormat().format(total)}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
