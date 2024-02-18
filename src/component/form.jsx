import React, { useState, useEffect } from "react";
import "reactjs-popup/dist/index.css";
import Time from "./Tool/Time";
import State from "./Tool/state";
import Peoaple from "./Tool/people";
import Calender from "./Tool/calender";

const Form = (props, { selectedPerson }) => {
  console.log("Form");
  const [selectTime, setSelectTime] = useState([]);
  const [selectType, setSelectType] = useState([]);
  const [Colapse, setColapse] = useState(false);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [showForm, setShowform] = useState(true);
  const [tag, settag] = useState("");
  const [showCalen, setShowCalen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateSelect = (date) => {
    setSelectedDate(date.toDateString());
  };

  const handelReset = () => {
    setdescription("");
    settitle("");
    setShowform(!showForm);
  };

  function handleSelectType(e) {
    setSelectType(e.target.value);
    e.preventDefault();
  }

  const toggleColapseHandler = (e) => {
    const show = Colapse;
    setColapse(!show);

    e.preventDefault();
  };

  // const handleSelectTime = (selectedTime) => {
  //   setSelectTime(selectedTime);
  // };

  const TagHandler = (receivedTag, item) => {
    settag(item ? item.value : receivedTag);
  };

  const calen = (e) => {
    e.preventDefault();
    const show = showCalen;
    setShowCalen(!show);
  };
  return (
    <>
      {showForm && (
        <form className="form">
          <h5>ایجاد وظیفه</h5>
          <p className="lable">عنوان: </p>
          <input
            className="text"
            type="text"
            placeholder="عنوان وظیفه"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <hr className="solid" />
          {Colapse && (
            <div>
              <p className="lable">توضیحات: </p>
              <input
                className="text"
                type="text"
                placeholder="توضیحات"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
              <hr className="solid" />
            </div>
          )}

          {/* box */}
          <form className="box">
            {!Colapse && (
              <button class="btn " onClick={toggleColapseHandler}>
                افزودن توضیحات
              </button>
            )}

            <div className="boxdiv">
              <State TagHandler={TagHandler} />
              <p>{tag}</p>

              <button className="btn" onClick={calen}>
                زمان یادآوری
              </button>
              {showCalen && <Calender onSelectDate={handleDateSelect} />}
              <p className="text-center">{selectedDate}</p>
          

              <Peoaple />
              <p>{selectedPerson}</p>
            </div>
          </form>
          <div className="dropdown">
            <select
              onClick={handleSelectType}
              value={selectType}
              onChange={(e) => setSelectType(e.target.value)}
            >
              <option defaultChecked value="">
                پروژه|دسته بندی
              </option>
              <option value="عمومی">پروژه عمومی</option>
              <option value="خصوصی">پروژه خصوصی</option>
            </select>
          </div>

          <div className="btns">
            <button
              className="btn btn-success"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                props.Add({ title, description, selectTime, selectType });
                props.hideModalHandler();
              }}
            >
              ایجاد
            </button>
            <button
              className="btn btn-secondary"
              type="reset"
              onClick={() => {
                handelReset();
                props.hideModalHandler();
              }}
            >
              انصراف
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
