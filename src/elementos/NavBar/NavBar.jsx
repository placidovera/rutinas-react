import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <strong>
           <Link to="/">
             Entrenador personal Luca Vera
            </Link>
          </strong>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item">
             <Link to="/categorias/principiantes">
                 Principiantes
              </Link>
              </li>
              <li className="nav-item">
                <Link to="/categorias/intermedios">
                  Intermedios
             </Link>
              </li>
              <li className="nav-item">
              <Link to="/categorias/avanzados">
                  Avanzados
             </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
