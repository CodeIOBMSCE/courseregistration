import React, { useState } from 'react';
import CourseTableEditable from './courselisteditable';
import '../css/courseaddition.css';


function CourseAddition() {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Artificial Intelligence', credits: 3 },
    { id: 2, name: 'Cryptography', credits: 4 },
    { id: 3, name: 'Machine Learning', credits: 2 },
    { id: 4, name: 'Machine Learning', credits: 2 },
    { id: 5, name: 'Machine Learning', credits: 1 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newCourse, setNewCourse] = useState({ id: '', name: '', credits: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = () => {
    setCourses([...courses, newCourse]);
    setNewCourse({ id: '', name: '', credits: '' });
    setShowForm(false);
  };

  return (
    <div>
      <h1>Course Addition Page</h1>
      <CourseTableEditable courses={courses} />

      <button onClick={() => setShowForm(true)}>Add Course</button>

      {showForm && (
        <form>
          <input type="text" name="name" placeholder="Course Name" value={newCourse.name} onChange={handleInputChange} />
          <input type="text" name="id" placeholder="Course ID" value={newCourse.id} onChange={handleInputChange} />
          <input type="number" name="credits" placeholder="Credits" value={newCourse.credits} onChange={handleInputChange} />
          <button type="button" onClick={handleAddCourse}>Save Course</button>
        </form>
      )}
    </div>
  );
}

export default CourseAddition;
