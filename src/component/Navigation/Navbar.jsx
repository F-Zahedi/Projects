import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import SidebarMenue from "./Sidebar";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navv " dir="rtl">
        <NavLink className="navbar-brand " to="/">
          <img
            src="./img/icons8-menu-64 (1).png"
            style={{ width: "25px" }}
            onClick={toggleSidebar}
          ></img>
        </NavLink>
       
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="/">
            داشبورد
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                  ورود
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/Users">
                  کاربران
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/tasks">
                  وظایف
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className="col-1">
          <SidebarMenue show={showSidebar} toggleSidebar={toggleSidebar} />
        </div> */}
    </>
  );
};

export default Navbar;
