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
        <option value="1 st">1</option>
        <option value="2 nd">2</option>
        <option value="3 rd">3</option>
        <option value="4 th">4</option>
        <option value="5 th">5</option>
        <option value="6 th">6</option>
        <option value="7 th">7</option>
        <option value="8 th">8</option>
      </select>
    </div>
  );
}

export default SemesterSelection;
