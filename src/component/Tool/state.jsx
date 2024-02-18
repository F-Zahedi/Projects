import { useState } from "react";
import "../Tasks/Tasks.css";
const State = ({ TagHandler }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [Bookmark, setBookmark] = useState([
    { value: "درحال انجام" },
    { value: "انجام شده" },
  ]);

  const open = (e, item) => {
    const show = showPopup;
    setShowPopup(!show);
    TagHandler(item ? item.value : null, item);
  };

  const tag = Bookmark;

  return (
    <>
      <div style={{ margin: "3px" }}>
        <img
          src="./img/bookmark-plus-fill.svg"
          style={{ width: "30px" }}
          onClick={(e) => open(e, null)}
        ></img>
      </div>
      {showPopup && (
        <div className="popup3">
          <div className="states">
            <div>
              <input className="text2" type="text" placeholder="فیلتر برچسب" />
            </div>

            <div>
              <hr />
              <div className="spann ">
                <span>
                  {Bookmark.map((item, index) => (
                    <p
                      className="state"
                      key={index}
                      onClick={(e) => open(e, item)}
                    >
                      <span className="check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          onClick={(e) => open(e, item)}
                        />
                      </span>
                      <span>{item.value}</span>

                      <img
                        src="./img/icons8-edit-24.png"
                        style={{ width: "30px" }}
                      ></img>
                    </p>
                  ))}
                </span>
              </div>
            </div>
            <hr />
            <div className="time">
              <button className="btn btnadd ">+ ایجاد برچسب </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default State;
