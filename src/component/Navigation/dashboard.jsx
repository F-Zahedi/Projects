import SidebarMenue from "./Sidebar";
import "./sidebar.css";
import Tasklist from "../Tasks/TaskList";
import Chatcom from "../Tool/chat";

const Dashboard = () => {
  return (
    <>
      <h1 className="content">میزکار شما</h1>
      <div className="contents">
        <div className="form2">
          <div className="header1">کارهای من</div>

          <Tasklist />
          
        </div>
        <div className="form2">
          <div className="header2">پیگیری از دیگران</div>
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;
