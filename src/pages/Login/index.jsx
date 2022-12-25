import React, { useEffect, useState } from "react";
import "../../styles/style.css";
import AlertMessage from "../../Components/AlertMessage";
import AuthErrorMessage from "../../Components/AuthErrorMessage"

const Auth = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isUsernamePasswordError, setIsUsernamePasswordError] = useState(false);

  const [isLogin, setIsLogin] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      if (username === "") {
        setIsUsernameEmpty(true);
        setIsUsernamePasswordError(false);
      }
      if (password === "") {
        setIsPasswordEmpty(true);
        setIsUsernamePasswordError(false);
      }
    } else {
      if (username === "admin" && password === "admin") {
        setIsLoading(true);
        setTimeout(() => {
          setIsLogin(true);
          console.log(isLogin);
          return props.onLogin({
            username,
            password,
            isLogin,
          });
        }, 3000);
      } else {
        setIsPasswordEmpty(false);
        setIsUsernameEmpty(false);
        setIsUsernamePasswordError(true);
      }
    }
  };

  const onChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="container mt-5 shadow rounded border border-primary">
      <div className="text-center bg-primary text-white p-3">
        <h3>Enigma Camp</h3>
      </div>
      <div className="text-center mt-3">{isUsernamePasswordError && <AuthErrorMessage />}</div>
      <form onSubmit={submitForm} className="p-5">
        <div className="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input name="username" type={"text"} className="form-control" placeholder={"username"} onChange={onChange} />
          {isUsernameEmpty && <AlertMessage label="username" />}
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input name="password" type={"password"} className="form-control" placeholder={"password"} onChange={onChange} />
          {isPasswordEmpty && <AlertMessage label="password" />}
        </div>
        <button className={isLoading ? "btn btn-primary btn-block btn-lg" : "btn btn-primary btn-block btn-lg"} disabled={isLoading}>
          {isLoading ? "loading ... " : "login"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
