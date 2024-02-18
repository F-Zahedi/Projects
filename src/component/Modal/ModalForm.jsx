import React from "react";
import Modal from "react-modal";
import "./Modal.css";
import Form from "../form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "auto",
    
  },
};

function Modallform(props) {
  return (
    <div className={`App  ${props.open ? "modal-show" : "modal-hide"}`}>
      <Modal isOpen={props.open} style={customStyles}>
        <Form
          hideModalHandler={() => {
            props.modalStateSetter(false);
          }}
          Add={(e) => props.add(e)}
        />
      </Modal>
    </div>
  );
}
export default Modallform;
