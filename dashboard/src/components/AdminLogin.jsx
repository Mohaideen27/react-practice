import React, { useState } from "react";

const AdminLogin = () => {
  let [state, setState] = useState({
    username: "",
    password: "",
  });
  function handleChange(e) {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  console.log(state);

  return (
    <div>
      <h1>Admin Login</h1>
      <form action="">
        <input
          type="text"
          placeholder="enter the username"
          name="username"
          value={state.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="enter the password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default AdminLogin;
