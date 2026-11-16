import { NavLink } from "react-router-dom";

function Menus() {
  return (
    <nav>
      <NavLink to="/" end>
        Inicio
      </NavLink>
      <NavLink to="/destinos">
        Destinos
      </NavLink>
      <NavLink to="/nosotros">
        Nosotros
      </NavLink>
    </nav>
  );
}

export default Menus;
