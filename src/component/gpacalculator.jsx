import React, { useState } from "react";
import { useLocation } from "react-router-dom";


const gradePoints = {
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  C: 2.0,
  F: 0.0,
};

const GPACalculator = () => {
  const location = useLocation();
  const student = location.state;

  const [subjects, setSubjects] = useState([
    { subject: "", credit: "", grade: "" },
  ]);
  const [gpa, setGpa] = useState(null);

  const handleChange = (index, event) => {
    const values = [...subjects];
    values[index][event.target.name] = event.target.value;
    setSubjects(values);
  };

  const addRow = () => {
    setSubjects([...subjects, { subject: "", credit: "", grade: "" }]);
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach((sub) => {
      const credit = parseFloat(sub.credit);
      const gradePoint = gradePoints[sub.grade];

      if (!isNaN(credit) && gradePoint !== undefined) {
        totalCredits += credit;
        totalPoints += credit * gradePoint;
      }
    });

    if (totalCredits > 0) {
      setGpa((totalPoints / totalCredits).toFixed(2));
    }
  };

  return (
    <div className="page-wrapper">
      <div className="form-card gpa-card">

        {/* Student Info */}
        <div className="student-info">
          <p><b>University:</b> {student?.schoolName}</p>
          <p><b>Student Name:</b> {student?.studentName}</p>
          <p><b>Index No:</b> {student?.indexNo}</p>
        </div>

        <h2>University GPA Calculator</h2>

        <table className="gpa-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Credits</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((sub, index) => (
              <tr key={index}>
                <td>
                  <input
                    className="gpa-input"
                    type="text"
                    name="subject"
                    value={sub.subject}
                    onChange={(e) => handleChange(index, e)}
                  />
                </td>

                <td>
                  <input
                    className="gpa-input"
                    type="number"
                    name="credit"
                    value={sub.credit}
                    onChange={(e) => handleChange(index, e)}
                  />
                </td>

                <td>
                  <select
                    className="gpa-input"
                    name="grade"
                    value={sub.grade}
                    onChange={(e) => handleChange(index, e)}
                  >
                    <option value="">Select</option>
                    {Object.keys(gradePoints).map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="btn-group">
          <button onClick={addRow}>Add Subject</button>
          <button onClick={calculateGPA}>Calculate GPA</button>
        </div>

        {gpa && <h3 className="gpa-result">GPA: {gpa}</h3>}

      </div>
    </div>
  );
};

export default GPACalculator;
