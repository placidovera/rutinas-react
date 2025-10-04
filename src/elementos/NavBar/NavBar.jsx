import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <strong>
           
             Entrenador personal Luca Vera
            
          </strong>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item">
             
                 Principiantes
              
              </li>
              <li className="nav-item">
                
                  Intermedios
             
              </li>
              <li className="nav-item">
              
                  Avanzados
             
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
