const Input = ({ name, value, lable, onchange }) => {
    return (
      <div className="mb-3">
        <lable htmlfor="email">{lable}</lable>
        <input
          onchange={onchange}
          value={value}
          id={name}
          name={name}
          className="form-control"
          type="text"
        />
      </div>
    );
  };
  
  export default Input;