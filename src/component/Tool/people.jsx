import { useState } from "react";
import "../Tasks/Tasks.css";
import Form from "../form";

const People = () => {
  const [show, setShow] = useState(false);
  const [person, setPerson] = useState([
    { Name: "ali" },
    { Name: "sara" },
    { Name: "saeed" },
  ]);
  const [selectedPerson, setSelectedPerson] = useState("");

  const personHandler = (e) => {
    const ishow = show;
    setShow(!ishow);
    e.preventDefault();
  };

  const ChosePerson = (e) => {
    setSelectedPerson(e.target.Name);
  };

  return (
    <>
      <button className="btn" onClick={personHandler}>
        مسئول انجام
      </button>

      {show && (
        <div className="popup4">
          <div className="pep">
            <div>
              <input
                className="text2"
                type="text"
                placeholder=" نام کاربر را وارد کنید"
                value={selectedPerson}
                onChange={(e) => setSelectedPerson(e.target.value)}
              />
            </div>

            <div className="cont">
              <div className="spann">
                <span>
                  {person.map((item, index) => (
                    <p className="pep2" key={index}
                     onClick={ChosePerson}
                    >
                      <span>{item.Name}</span>
                    </p>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <Form selectedPerson={selectedPerson} /> */}
    </>
  );
};

export default People;