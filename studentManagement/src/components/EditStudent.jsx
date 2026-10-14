import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addStudent, getStudentById } from "../services/studentServices";

const EditStudent = () => {
  let [student, setStudent] = useState({
    sname: "",
    sid: "",
    semail: "",
    phNo: "",
    dept: "",
  });
  let { sname, sid, semail, phNo, dept } = student;
  const { id } = useParams();
  console.log(id);
  let fetchStudent = async () => {
    try {
      let data = await getStudentById(id);
      setStudent(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchStudent();
  }, []);

  let handleChange = (e) => {
    let { value, name } = e.target;
    setStudent({ ...student, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!sname || !sid || !semail || !phno || !dept)
        return alert("Fill all the inputs");
      console.log(student);
      await addStudent(student);
      alert("register done");
      setStudent({
        sname: "",
        sid: "",
        semail: "",
        phNo: "",
        dept: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="addStudent">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter your name :"
            value={sname}
            onChange={handleChange}
            name="sname"
          />
          <input
            type="text"
            placeholder="enter your id :"
            value={sid}
            onChange={handleChange}
            name="sid"
          />
          <input
            type="text"
            placeholder="enter your email :"
            value={semail}
            onChange={handleChange}
            name="semail"
          />
          <input
            type="text"
            placeholder="enter your phone number :"
            value={phNo}
            onChange={handleChange}
            name="phNo"
          />
          <input
            type="text"
            placeholder="enter your department :"
            value={dept}
            onChange={handleChange}
            name="dept"
          />
          <button>Update</button>
        </form>
      </div>
    </>
  );
};

export default EditStudent;
