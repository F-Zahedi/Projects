import TaskItem from "../Tasks/TaskItem";
import { useState, useEffect } from "react";
import "./Modal.css";
const Modals = (props) => {
  const [task, setTask] = useState({});

  useEffect(() => {
    setTask(props.data);
  }, [props.data]);

  const handleUpdate = (updatedTask) => {
    props.onUpdate(task.id, updatedTask);
    props.hideModalHandler();
  };



  return (
    <>
      <div
        className={`modal  
      ${props.open ? "modal-show" : "modal-hide"}
      `}
      >
        <div className="modal-content">

          <TaskItem
            title={props.data.title}
            description={props.data.description}
            selectType={props.data.selectType}
            selectTime={props.data.selectTime}
            open={props.open}
            hideModalHandler={() => {
              props.hideModalHandler();
            }}
            onUpdate={handleUpdate}
          />
        </div>
      </div>
    </>
  );
};

export default Modals;
