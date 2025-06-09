import React from "react";

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Pizzería Mamma Mia!
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li class="nav-item">
              <button class="btn btn-outline-light mx-1" type="submit">
                🍕Home
              </button>
            </li>

            {token == false? <>
                        <li class="nav-item">
              <button
                className={`btn btn-outline-light mx-1 `}
                type="submit"
              >
                🔓Profile
              </button>
            </li>
            <li class="nav-item dropdown">
              <button
                className={`btn btn-outline-light mx-1 `}
                type="submit"
              >
                🔒Logout
              </button>
            </li>
            </> : <>
            <li class="nav-item">
              <button
                className={`btn btn-outline-light mx-1 `}
                type="submit"
              >
                🔐Login
              </button>
            </li>

            <li class="nav-item">
              <button
                className={`btn btn-outline-light mx-1 `}
                type="submit"
              >
                🔐Register
              </button>
            </li>
            
            </>}



          </ul>
          <form class="d-flex">
            <button class="btn btn-outline-info" type="submit">
              🛒Total: ${Intl.NumberFormat().format(total)}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
