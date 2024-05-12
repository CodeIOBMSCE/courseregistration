import React, { useState } from 'react';

function CourseForm({ onAddCourse }) {
  const [courseName, setCourseName] = useState('');
  const [credit, setCredit] = useState('');
  const [courseId, setCourseId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      name: courseName,
      credit: credit,
      id: courseId,
    };
    onAddCourse(newCourse);
    setCourseName('');
    setCredit('');
    setCourseId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="courseName">Course Name:</label>
      <input type="text" id="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
      <label htmlFor="credit">Credit:</label>
      <input type="number" id="credit" value={credit} onChange={(e) => setCredit(e.target.value)} required />
      <label htmlFor="courseId">Course ID:</label>
      <input type="text" id="courseId" value={courseId} onChange={(e) => setCourseId(e.target.value)} required />
      <button type="submit">Add Course</button>
    </form>
  );
}

export default CourseForm;
