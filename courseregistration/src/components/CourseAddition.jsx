import React, { useState } from 'react';

function CourseAddition({ selectedSemester, onAddCourse }) {
  const [newCourse, setNewCourse] = useState({ name: '', id: '', credit: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = () => {
    if (newCourse.name && newCourse.id && newCourse.credit) {
      onAddCourse({ ...newCourse, semester: selectedSemester });
      setNewCourse({ name: '', id: '', credit: '' });
    }
  };

  return (
    <div>
      <h2>Add Course</h2>
      <input type="text" name="name" placeholder="Course Name" value={newCourse.name} onChange={handleInputChange} />
      <input type="text" name="id" placeholder="Course ID" value={newCourse.id} onChange={handleInputChange} />
      <input type="number" name="credit" placeholder="Credit" value={newCourse.credit} onChange={handleInputChange} />
      <button onClick={handleAddCourse}>Add Course</button>
    </div>
  );
}

export default CourseAddition;
