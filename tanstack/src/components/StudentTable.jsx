import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const StudentTable = () => {
  let fetchData = async () => {
    let res = await axios.get(
      "https://6ad1cfec66cd28aed82cc47d.mockapi.io/studnt",
    );
    return res.data;
  };
  let { data, isLoading, isError } = useQuery({
    queryKey: ["student"],
    queryFn: fetchData,
  });
  if (isLoading) {
    return <h1>... Loading</h1>;
  }
  if (isError) {
    return <h1>Something went wrong try again</h1>;
  }
  return <div>{"students data"}</div>;
};

export default StudentTable;
