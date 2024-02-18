import Input from "../Tool/Input";
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import * as yup from "yup";
import { Schema } from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  console.log('Login')
  const [login, setLogin] = useState({
    account: {
      email: "",
      password: "",
    },
  });
  const [errors, setError] = useState([]);
  const [sending, setsending] = useState(false);
  const navigate = useNavigate();

  const Schema = yup.object().shape({
    email: yup.string().email("not correct").required("necessary"),
    password: yup.string().min(4, "atleast 4 char"),
  });

  const validate = async () => {
    try {
      const result = await Schema.validate(login.account, {
        abortEarly: false,
      });

      return result;
    } catch (error) {
      console.log(error.errors);
      setError({ errors: error.errors });
    }
  };

  const goDashboard = () => {
    navigate("/dashboard");
  };

  const handelsubmit = async (e) => {
    e.preventDefault();
    const result = await validate();
    debugger;
    console.log(result);
    if (result) {
      try {
        setsending({ sending: true });
        const response = await axios.post(
          "http://localhost:8000/User",
          result
        );
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        {
          goDashboard();
        }

        setsending({ sending: false });
        console.log(response);
      } catch (error) {
        setsending({ sending: false });
        setError({ errors: ["email or password not correct"] });
      }
    }
  };

  const handelchange = async ({ currentTarget: input }) => {
    const account = { ...login.account };

    account[input.name] = input.value;
    setLogin({ account: login.account });
  };

  function debug() {
    const e = errors;
    debugger;
  }

  const { email, password } = login.account;

  return (
    <>
      {(() => debug(errors))()}
      {errors.length !== 0 && (
        <div className="alert alert-danger">
          <ul>
            {(() =>
              errors.errors.map((e, i) => {
                debugger;
                return <li key={i}>{e}</li>;
              }))()}
          </ul>
        </div>
      )}
      <form onSubmit={handelsubmit}>
        <Input
          name="email"
          value={login.email}
          lable="Email"
          onchange={handelchange}
        />
        <Input
          name="password"
          value={login.password}
          lable="Password"
          onchange={handelchange}
        />
        
        <button disabled={sending} className="btn btn-info" type="handelsubmit">
          submit
        </button>
      </form>
    </>
  );
};

export default Login;
