import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {

  const navigate = useNavigate();

  const [student, setStudent] = useState({
    schoolName: "",
    indexNo: "",
    studentName: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const goToGpaPage = () => {
    navigate("/gpa", { state: student });
  };

  return (
    <div className="page-wrapper">
      <div className="form-card">
        <h2>Student Basic Details</h2>

        <input
          type="text"
          name="schoolName"
          placeholder="University / School Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="indexNo"
          placeholder="Index Number"
          onChange={handleChange}
        />

        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          onChange={handleChange}
        />

        <button onClick={goToGpaPage}>
          Calculate GPA
        </button>
      </div>
    </div>
  );
};

export default FormPage;
