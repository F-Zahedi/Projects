// import { useState } from "react";
// import "../Tasks/Tasks.css";
// import Calender from "./calender";

// const Time = (props) => {
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");
//   const [selectedRepeat, setSelectedRepeat] = useState("");
//   const [showTime, setShowTime] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [showDay, setShowDay] = useState(false);
//   const [timeTable, setTimeTable] = useState(false);
//   const [showDate, setShowDate] = useState(false);
//   const [showCalen, setShowCalen] = useState(false);
//   const [showRepeat, setshowRepeat] = useState(false);
//   const [Repeat, setRepeat] = useState([
//     { value: "روزانه" },
//     { value: "هفتگی" },
//     { value: "ماهانه " },
//     { value: "سالانه " },
//     { value: "تکرار نمی شود " },
//   ]);
//   const [Time, setTime] = useState([
//     { value: "8صبح" },
//     { value: "10صبح" },
//     { value: "12ظهر" },
//     { value: "2 بعد از ظهر" },
//     { value: "4 بعد از ظهر" },
//   ]);

//   // const showHandel = (e) => {
//   //   e.preventDefault();
//   //   const show = showDay;
//   //   setShowDay(!show);
//   //   setTimeTable(!show);
//   //   setshowRepeat(!show);
//   //   setShowPopup(!show);
//   // };
//   const showHandel = (e, repeatValue) => {
//     e.preventDefault();
//     const show = showDay;
//     setShowDay(!show);
//     setTimeTable(!show);
//     setshowRepeat(!show);
//     setShowPopup(!show);
//     setShowTime(!showTime);
//     if (repeatValue) {
//       setSelectedRepeat(repeatValue);
//     }
//   };

//   const TimeHandel = (e) => {
//     const show = showDay;
//     setShowDay(!show);
//     // setShowTime(!showTime);
//   };

//   const showDateHandel = (e, date, time) => {
//     e.preventDefault();
//     setShowDate(!showDate);

//     if (date) {
//       setSelectedDate(date);
//     }
//     if (time) {
//       setSelectedTime(time);
//       setShowTime(false);
//     }
//   };

//   const calen = () => {
//     const show = showCalen;
//     setShowCalen(!show);
//     // setShowDate(!showDate);
//   };

//   const handelRepeat = (e) => {
//     const show = showRepeat;
//     setshowRepeat(!show);
//   };

//   const submitform = (e) => {
//     setShowPopup(false);
//     e.preventDefault();

//     const selectedTime = e.target.time.value;
//     props.onSelectTime(selectedTime);

//     console.log("submit", selectedTime);
//   };
//   const open = (e) => {
//     e.preventDefault();
//     const show = showPopup;
//     setShowPopup(!show);
//   };
//   return (
//     <>
//       <button className="btn" onClick={open} onChange={timeTable}>
//         {selectedDate || "زمان یادآوری"}
//       </button>
//       {/* Table */}
//       {showPopup && (
//         <div className="popup">
//           <div className="times">
//             <ul className="time">زمان یادآوری</ul>
//             <hr />
//             <ul className="time" onClick={TimeHandel}>
//               امروز
//             </ul>
//             <ul className="time" onClick={submitform}>
//               فردا
//             </ul>
//             <ul className="time" onClick={submitform}>
//               پس فردا
//             </ul>
//             <hr />
//             <ul className="time" onClick={showDateHandel}>
//               انتخاب تاریخ
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* day */}
//       {showDay && (
//         <div className="popup2">
//           <div className="times">
//             <ul className="time" onClick={showHandel}>
//               <img src="./img/icons8-right-50.png" style={{ width: "30px" }} />
//               امروز
//             </ul>
//             <hr />

//             {Time.map((item, index) => (
//               <ul
//                 className="time"
//                 key={index}
//                 onClick={(e) => showDateHandel(e, null, item.value)}
//               >
//                 <span>{item.value}</span>
//               </ul>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Date */}
//       {showDate && (
//         <div className="popup">
//           <div className="date">
//             <form onSubmit={submitform}>
//               <ul
//                 className="time"
//                 onClick={(e) => showDateHandel(e, selectedDate)}
//               >
//                 <img
//                   src="./img/icons8-right-50.png"
//                   style={{ width: "30px" }}
//                 />
//                 تاریخ و زمان
//               </ul>
//               <hr />
//               <ul>
//                 {selectedDate || "تقویم"}
//                 <span className="cal" onClick={calen}>
//                   {" "}
//                   <img
//                     src="./img/icons8-today-24.png"
//                     style={{ width: "30px" }}
//                   />
//                 </span>
//               </ul>
//               {/* <div className="popup2">{showCalen && <Calender />}</div> */}
//               <div className="popup2">
//                 {showCalen && <Calender onSelectDate={setSelectedDate} />}
//                 {selectedDate && (
//                   <p className="text-center">{selectedDate.toDateString()}</p>
//                 )}
//               </div>
//               <hr />
//               <ul>
//                 <span className="icon">
//                   <input
//                     className="txtinput"
//                     placeholder="ساعت(مثال: 14:00)"
//                     name="time"
//                     value={selectedTime}
//                   />
//                   <img
//                     onClick={TimeHandel}
//                     src="./img/icons8-down-arrow-32.png"
//                     style={{ width: "30px" }}
//                   />
//                 </span>
//               </ul>
//               <hr />
//               <ul onClick={handelRepeat}>{selectedRepeat || "تکرار"}</ul>

//               <button className="sucsessbtn" onClick={submitform}>
//                 تایید
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* repeat */}
//       {showRepeat && (
//         <div className="popup2">
//           <div className="times">
//             <ul className="time" onClick={showHandel}>
//               <img src="./img/icons8-right-50.png" style={{ width: "30px" }} />
//               تکرار
//             </ul>
//             <hr />
//             {Repeat.map((item, index) => (
//               <ul
//                 className="time"
//                 key={index}
//                 onClick={(e) => showHandel(e, item.value)}
//               >
//                 <span>{item.value}</span>
//               </ul>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Time;
