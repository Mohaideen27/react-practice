import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [mail, setMail] = useState("");
  let [pass, setpass] = useState("");
  const navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("logged in");
    if (!mail || !pass) {
      toast.warning("please fill all the fields", {
        autoClose: 1000,
      });
      return;
    }
    let userEmail = localStorage.getItem("userEmail");
    let userPass = localStorage.getItem("userPass");
    if (userEmail === mail && userPass === pass) {
      toast.success("login done successffully", {
        autoClose: 800,
      });
      navigate("/Home");
    } else {
      toast.error("wrong credentials", {
        autoClose: 800,
      });
    }
  };
  return (
    <div className="signup-container">
      <form className="signup-form" action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="mail"
          id="email"
          placeholder="enter your email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          id="password"
          placeholder="enter your password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
