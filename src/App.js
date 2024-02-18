import Navbar from "./component/Navigation/Navbar";
import { Route, Routes } from "react-router-dom";
import Tasks from "./component/Tasks/Tasks";
import Dashboard from "./component/Navigation/dashboard";
import NotFound from "./component/Navigation/not-found";
import Login from "./component/Navigation/Login";
import { Navigate } from "react-router-dom";
import AddTask from "./component/AddTask/AddTask";
import Note from "./component/Navigation/note";
import SidebarMenue from "./component/Navigation/Sidebar";
import Modals from "./component/Modal/Modals";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  console.log("App");
  return (
    <>
      <Navbar />

      <div className="col-1">
        {" "}
        <SidebarMenue />{" "}
      </div>

      <div className="container col-8 mt-4">
        <Routes>
          <Route path="/Login" Component={Login} />
          <Route path="/addTask" Component={AddTask} />
          <Route path="/Tasks" Component={Tasks} />
          <Route path="/Dashboard" Component={Dashboard} />
          <Route path="/Modals" Component={Modals} />
          <Route path="/note" Component={Note} />
          <Route path="/not-found" Component={NotFound} />
          <Route
            path="/customer"
            element={<Navigate to="/Dashboard" replace />}
          />
          <Route path="/" exact Component={Dashboard} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
