import { useState, useEffect } from "react";
import Tasklist from "./TaskList";
import axios from "axios";
import "./Tasks.css";
import Modallform from "../Modal/ModalForm";
import TaskItem from "./TaskItem";

const Tasks = (props) => {
  const [Tasks, setTasks] = useState([props]);
  const [modalOpen, setModalOpen] = useState(false);

  const hideModalHandler = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const sendReuest = async () => {
      const response = await fetch(" http://localhost:8000/Tasks");
      const responseData = await response.json();
      console.log(responseData);

      setTasks(responseData);
    };
    sendReuest();
  }, []);

  //Add
  const AddTask = async ({ ...obj }) => {
    console.log(obj);
    const response = await axios("http://localhost:8000/Tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      data: JSON.stringify({ ...obj }),
    });
    const responseData = await response.json;

    setTasks([...Tasks, responseData]);
    setTasks((prevTasks) => [...prevTasks, responseData]);
  };

  //Delete
  const deleteTasks = async (id) => {
    await axios(`http://localhost:8000/Tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(Tasks.filter((item) => item.id !== id));
  };

  //Update
  const updateTasks = async (id, updatedTask) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/Tasks/${id}`,
        updatedTask
      );
      const updatedTasksArray = Tasks.map((Tasks) =>
        Tasks.id === id ? response.data : Tasks
      );
      setTasks(updatedTasksArray);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      {/*Add New Task */}

      <button
        className="btn btn-success"
        dir="rtl"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        + ایجاد وظیفه
      </button>

      <Modallform
        open={modalOpen}
        modalStateSetter={setModalOpen}
        add={(obj) => AddTask(obj)}
      />

      {/* TaskList */}
      <div className="listtask">
        <Tasklist tasks={Tasks} onDelete={deleteTasks} onUpdate={updateTasks} />
        
      </div>
     
    </>
  );
};

export default Tasks;
