import { Link, Outlet } from "react-router-dom";
import "./styles/index.scss";

export default function App() {
  return (
    <div>
      <h1 className="heading">Proyectos</h1>
      <nav className="menu-pro">
        <Link to="/web" className="link-pro">
          Web
        </Link>
        <Link to="/mobile" className="link-pro">
          Mobile
        </Link>
        <Link to="/totem" className="link-pro">
          Totem
        </Link>
        <Link to="/api" className="link-pro">
          Api
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
