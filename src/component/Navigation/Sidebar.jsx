import { NavLink } from "react-router-dom";
import "./sidebar.css";


const SidebarMenue = ({ show, toggleSidebar }) => {
 
  return (
    <>
      <nav className="sidebar" style={{ left: show ? "0px" : "-250px" }}>
        <ul className="side">
          <img src="./img/icons8-chat-50.png" style={{ width: "25px" }}></img>

          <NavLink className="nav-link" to="/">
            گفتگو
          </NavLink>
        </ul>
        <ul className="side">
          <img
            src="./img/icons8-project-50.png"
            style={{ width: "25px" }}
          ></img>
          <NavLink className="nav-link" to="/tasks">
            پروژه ها
          </NavLink>
        </ul>
        <ul className="side">
          <img src="./img/icons8-task-50.png" style={{ width: "25px" }}></img>
          <NavLink className="nav-link" to="/tasks">
            وظایف
          </NavLink>
        </ul>
        <ul className="side">
          <img
            src="./img/icons8-notepad-50.png"
            style={{ width: "25px" }}
          ></img>
          <NavLink className="nav-link" to="/note">
            یادداشت های من
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default SidebarMenue;
