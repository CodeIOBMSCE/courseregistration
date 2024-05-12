import React from 'react';

function SemesterSelection({ onSelectSemester }) {
  const handleSemesterChange = (e) => {
    const selectedSemester = e.target.value;
    onSelectSemester(selectedSemester);
  };

  return (
    <div>
      <label htmlFor="semester">Select Semester:</label>
      <select id="semester" onChange={handleSemesterChange}>
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="fall">Fall</option>
      </select>
    </div>
  );
}

export default SemesterSelection;
