import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentTable = () => {
  let [students, setStudents] = useState([]);
  let [loading, setLoading] = useState(true);
  const fetchData = async () => {
    let res = await axios.get(
      "https://6ad1cfec66cd28aed82cc47d.mockapi.io/student",
    );
    // console.log(res.data);

    if (res.status === 200) {
      setStudents(res.data);
        setLoading(false);
    }
  };
  console.log(students);
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <h1>...Loading</h1>;
  }
  return (
    <>
      <h1>Student Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>deparment</th>
            <th>email</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.dept}</td>
                <td>{student.email}</td>
                <td>{student.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default StudentTable;
