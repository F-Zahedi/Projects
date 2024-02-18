const Chatcom = () => {
  return (
    <>
      <p>chat</p>
      <div className={"divcontent"}>
        <div className="chatpage">
          <input className="textt" onChange={(e) => e.target.value} />
        </div>
        <div className='chattype'>
          <input className="inptext" placeholder="type.." />
          <button className="btn">
            {" "}
            <img src="/img/icons8-send-32.png" style={{ width: "35px" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatcom;
