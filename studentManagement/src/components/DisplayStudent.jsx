import React, { useEffect, useState } from "react";
import axios from "axios";
import { getStudents, deleteStudent } from "../services/studentServices";
import { useNavigate } from "react-router-dom";

const DisplayStudents = () => {
  let Navigate = useNavigate();
  let [students, setStudents] = useState([]);
  let fetchStudents = async () => {
    try {
      let data = await getStudents();
      console.log(data);

      setStudents(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);
  let handleEdit = (id) => {
    Navigate(`/edit/${id}`);
  };
  let handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      let data = await getStudents();
      setStudents(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>sid</th>
            <th>sname</th>
            <th>semail</th>
            <th>dept</th>
            <th>phNo</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.sid}>
                <td>{student.sid}</td>
                <td>{student.sname} </td>
                <td>{student.semail} </td>
                <td>{student.dept} </td>
                <td>{student.phNo} </td>
                <td>
                  <button onClick={() => handleEdit(student.id)}>edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(student.id)}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayStudents;
