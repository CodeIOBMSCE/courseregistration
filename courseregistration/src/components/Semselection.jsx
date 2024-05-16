import React from 'react';
import '../css/semesterselection.css'; // Make sure this path matches your project structure

function Semselection({ onSelectSemester }) {
  const handleSemesterChange = (e) => {
    const selectedSemester = e.target.value;
    onSelectSemester(selectedSemester);
  };

  return (
    <div className="semselection-container">
      <label htmlFor="semester">Select Semester:</label>
      <select id="semester" onChange={handleSemesterChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
    </div>
  );
}

export default Semselection;
