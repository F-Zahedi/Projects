import { useState } from "react";
import Form from "../form";
import Modall from "../Modal/Modall";


const NewTask = (props) => {

  console.log("NewTask");

  return (
    <>
    
        <Form
          Add={props.Add}
          click={() => {}}
          title={""}
          description={""}
          selectTime={""}
          persons={""}
          selectType={""}
          key={0}
          change={() => {}}
          changedescript={() => {}}
          changeTime={() => {}}
          changePerson={() => {}}
          changeType={() => {}}
        />
    
    </>
  );
};

export default NewTask;
