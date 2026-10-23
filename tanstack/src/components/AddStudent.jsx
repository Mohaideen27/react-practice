import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const AddStudent = () => {
  let [state, setState] = useState({ name: "", email: "", dept: "" });
  console.log(state);
  let myQueryClient = useQueryClient();
  function handleChange(e) {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  async function dataServer(newData) {
    let res = await axios.post(
      "https://6ad1cfec66cd28aed82cc47d.mockapi.io/student",
      newData,
    );
    return res.data;
  }
  let mutation = useMutation({
    mutationFn: dataServer,
    onSuccess: () => {
      console.log("data created successfully");
      myQueryClient.invalidateQueries({
        queryKey: ["student"],
      });
      setState({ name: "", email: "", dept: "" });
    },
    onError: () => {
      console.log("data not added");
    },
  });
  async function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate(state);
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          placeholder="name..."
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={state.email}
          placeholder="email..."
          onChange={handleChange}
        />
        <select
          name="dept"
          value={state.dept}
          placeholder="dept..."
          onChange={handleChange}
          id=""
        >
          <option value="" hidden>
            Select Department
          </option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="MECH">MECH</option>
          <option value="EEE">EEE</option>
          <option value="ECE">ECE</option>
        </select>
        <button
          disabled={state.name && state.email && state.dept ? false : true}
        >
          Add user
        </button>
      </form>
    </>
  );
};

export default AddStudent;
