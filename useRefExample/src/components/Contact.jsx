import React, { useRef } from "react";

const Contact = () => {
  let userName = useRef(null);
  let userEmail = useRef(null);
  let password = useRef(null);
  let confirmPassword = useRef(null);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("userName", userName.current.value);
    console.log("userEmail", userEmail.current.value);
    console.log("submitted");
  };
  return (
    <div className="contact">
      <h1>registeration forms</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="enter your name" ref={userName} />
        <input type="text" placeholder="enter your email" ref={userEmail} />
        <input
          type="password"
          placeholder="enter your password"
          ref={password}
        />
        <input
          type="password"
          placeholder="enter your confirm password"
          ref={confirmPassword}
        />
        <button>register</button>
      </form>
    </div>
  );
};

export default Contact;
