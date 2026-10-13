import React, { useRef, useState } from "react";

const Emp = () => {
  const [empName, setEmpName] = useState("");
  const [empId, setEmpId] = useState("");
  const [empDept, setempDept] = useState("");
  const [empSal, setEmpSal] = useState("");
  const [empData, setEmpData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let newEmp = {
      eName: empName,
      eId: empId,
      eDept: empDept,
      eSal: empSal,
    };
    setEmpData([...empData, newEmp]);
    console.log("employee details entered");
    console.log(empData);
    setEmpName("");
    setEmpId("");
    setempDept("");
    setEmpSal("");
  };
  const editEmp = (eId) => {
    console.log(eId);
  };
  const delEmp = (eId) => {
    console.log(eId);
    const newEmpData = empData.filter((emp) => {
      console.log(emp);
      console.log(emp.eId != eId);

      return emp.eId != eId;
    });
    setempDept(newEmpData);
    console.log(empData);
  };
  return (
    <div>
      <main>
        <div className="left">
          <h1>Emp Task</h1>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="enter emp name"
              value={empName}
              onChange={(e) => setEmpName(e.target.value)}
            />
            <input
              type="text"
              placeholder="enter emp id"
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
            />
            <input
              type="text"
              placeholder="enter emp dept"
              value={empDept}
              onChange={(e) => setempDept(e.target.value)}
            />
            <input
              type="text"
              placeholder="enter emp salary"
              value={empSal}
              onChange={(e) => setEmpSal(e.target.value)}
            />
            <button>submit</button>
          </form>
        </div>
        <div className="right">
          <table>
            <thead>
              <tr>
                <th>emp name</th>
                <th>emp id</th>
                <th>emp dept</th>
                <th>emp salary</th>
              </tr>
            </thead>
            <tbody>
              {empData.map((emp) => {
                return (
                  <tr key={emp.eId}>
                    <td>{emp.eId}</td>
                    <td>{emp.eName}</td>
                    <td>{emp.eDept}</td>
                    <td>{emp.eSal}</td>
                    <td>
                      <button onClick={() => editEmp(emp.eId)}>edit</button>
                    </td>
                    <td>
                      <button onClick={() => delEmp(emp.eId)}>delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Emp;
