import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        Recipe
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/home"
                className="nav-link active"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/about"
                className="nav-link"
                aria-current="page"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <a
                href="https://github.com/mmehel52"
                className="nav-link"
                aria-current="page"
              >
                Github
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/"
                className="nav-link"
                aria-current="page"
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
