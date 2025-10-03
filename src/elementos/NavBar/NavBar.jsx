import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <strong>
           
              GYM PRO ONE-LINE
            
          </strong>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item">
             
                  Proteinas
              
              </li>
              <li className="nav-item">
                
                  Creatinas
             
              </li>
              <li className="nav-item">
              
                  Quemadores
             
              </li>
              <li className="nav-item">
                
                  Pre-Entrenos
               
                 </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
