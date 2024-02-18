import { React, useState, useEffect } from "react";
import "./Tasks.css";
import Progress from "../Tool/progressbar";
import axios from "axios";
import State from "../Tool/state";
import Time from "../Tool/Time";
import Peoaple from "../Tool/people";
import Calender from "../Tool/calender";

const TaskItem = (props) => {
  const [showForm, setShowform] = useState(true);
  const [edit, setedit] = useState(false);
  const [showbutt, setShowbutt] = useState(true);
  const [showCalen, setShowCalen] = useState(false);
  const [reports, setReports] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedState, setSelectedState] = useState(null);
  const [textvalue, setTextvalue] = useState({
    title: props.title,
    description: props.description,
  });

  const submitform = (e) => {
    e.preventDefault();
    setReports("");

    setShowform(!showForm);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const handelReset = () => {
    setReports("");
    setShowform(!showForm);
  };

  const handelEdit = (e) => {
    e.preventDefault();
    const show = edit;
    setedit(!show);
    setShowbutt(false);
    setTextvalue(e.target.value);
  };
  const reporthandler = (e) => {
    setShowbutt(false);
    setReports(e.target.value);
  };
  const showReportHandle = (e) => {
    props.Add({ reports });
    setReports("");
    setReports(...reports);
  };

  const TagHandler = (value, item) => {
    setSelectedState(value);
  };

  const calen = (e) => {
    e.preventDefault();
    const show = showCalen;
    setShowCalen(!show);
  };

  useEffect(() => {
    setTextvalue({
      title: props.title,
      description: props.description,
    });
  }, [props.title, props.description]);

  //report

  // useEffect(() => {
  //   const sendReuest = async () => {
  //     const response = await fetch(" http://localhost:8000/Reports");
  //     const responseData = await response.json();
  //     console.log(responseData);

  //     setReports(responseData);
  //   };
  //   sendReuest();
  // }, []);

  const AddReport = async (reports) => {
    const response = await axios("http://localhost:8000/Reports", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      data: JSON.stringify(reports),
    });
    const responseData = await response.json;

    setReports([...reports, responseData]);
  };

  const handleUpdate = (id, updatedTask) => {
    if (updatedTask && updatedTask.title && updatedTask.description) {
      props.onUpdate(id, updatedTask);
      props.hideModalHandler();
      setTextvalue({
        title: updatedTask.title,
        description: updatedTask.description,
      });
    }
  };

  return (
    <div>
      {/* {showForm && ( */}
      <form className="form-item" onSubmit={submitform}>
        <div className="header">
          <h4>مشخصات وظیفه</h4>
          {showbutt && (
            <button className="btnedit" onClick={handelEdit}>
              ویرایش
              <img src="./img/icons8-edit.gif" style={{ width: "25px" }} />
            </button>
          )}
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1" />

          <p className="titles">عنوان فعالیت :</p>
        </div>
        <input className="txt" value={textvalue.title} onChange={handelEdit} />
        <hr className="solid"></hr>

        <p className="discription">توضیحات:</p>
        <input
          className="txt"
          value={textvalue.description}
          onChange={handelEdit}
        />

        {/* box */}
        <div className="box">
           <State TagHandler={TagHandler} />
        <p>{selectedState || props.State}</p>
        
          <Peoaple />

          <button className="btn" onClick={calen}>
            زمان یادآوری
          </button>
          {showCalen && <Calender onSelectDate={handleSelectDate} />}
          <p className="text-center">{selectedDate.toDateString()}</p>
        </div>

        <Progress />

        <div className="divpro">
          <p className="titles">نوع پروژه:</p>
          <p>{props.selectType}</p>
        </div>
        <hr className="line" />

        <div className="box2">
          <p> ثبت گزارش</p>
          <input
            className="txt"
            type="text"
            placeholder="درج گزارش یا نظر شما..."
            onChange={reporthandler}
            name="report"
            value={reports}
          />

          {!showbutt && (
            // <button
            //   className="btnreport"
            //   onClick={showReportHandle}
            //   Add={AddReport}
            // >
            //   ثبت و ارسال گزارش
            // </button>
            <button className="btnreport" onClick={showReportHandle}>
              ثبت و ارسال گزارش
            </button>
          )}
        </div>

        {/* btns */}
        {showbutt && (
          <button
            className="btnclose"
            onClick={() => {
              handelReset();
              props.hideModalHandler();
            }}
          >
            بستن
          </button>
        )}

        {!showbutt && (
          <div className="btns">
            <button
              className="btnupdate"
              type="submit"
              onClick={() => {
                handleUpdate(textvalue);
                props.hideModalHandler();
              }}
            >
              بروزرسانی
            </button>

            <button
              className="btnclancle "
              onClick={() => {
                handelReset();
                props.hideModalHandler();
              }}
            >
              انصراف
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default TaskItem;
