import React, { useState, useEffect } from "react";
import "./Tasks.css";
import Modals from "../Modal/Modals";
import axios from "axios";

const Tasklist = (props) => {
  const [ShowItem, setShowitem] = useState([]);
  const [modalOpen, setModalOpen] = useState(props.isOpen);

  useEffect(() => {
    setModalOpen(props.isOpen);
  }, [props.isOpen]);

  const showItem = (id) => {
    const sendReuest = async () => {
      const response = await axios
        .get(`http://localhost:8000/Tasks/${id}`)
        .then((response) => {
          const responseData = response.data;
          console.log(responseData);
          setShowitem(responseData);
          debugger;
          setModalOpen(true);
        });
    };
    sendReuest();
  };

  //list of tasks
  const list = props.tasks?.map((item) => {
    return (
      <div onClick={() => showItem(item.id)}>
        <span className="list">
          {" "}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          {item?.title}
          <span className="des">{item?.description}</span>
          <span className="type">{item?.selectType}</span>
          <span>
            <button
              className="btn btndel "
              onClick={() => props.onDelete(item.id)}
            >
              <img src="./img/trash-fill.svg" style={{ width: "20px" }} />
            </button>
          </span>
        </span>
      </div>
    );
  });

  return (
    <>
      <Modals
        data={ShowItem}
        open={modalOpen}
        hideModalHandler={() => {
          setModalOpen(false);
        }}
        onUpdate={props.onUpdate}
      />

      <div>
        <p className="btnlist">لیست وظایف</p>
        <div>{list}</div>
      </div>
    </>
  );
};
export default Tasklist;
