import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const StudentTable = () => {
  let fetchData = async () => {
    let res = await axios.get("https://6ad1cfec66cd28aed82cc47d.mockapi.io/e");
    return res.data;
  };
  let { data, isLoading, isError } = useQuery({
    queryKey: ["e"],
    queryFn: fetchData,
  });
  if (isLoading) {
    return <h1>... Loading</h1>;
  }
  if (isError) {
    return <h1>Something went wrong try again</h1>;
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>dept</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.name} </td>
                <td>{e.email} </td>
                <td>{e.dept} </td>
                <td>
                  <button onClick={() => handleEdit(e.id)}>edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(e.id)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default StudentTable;
