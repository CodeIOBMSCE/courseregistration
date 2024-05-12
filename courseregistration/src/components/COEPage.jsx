import React, { useState } from 'react';
import SemesterSelection from './SemesterSelection';
import CourseForm from './CourseForm';

function COEPage() {
  const [selectedSemester, setSelectedSemester] = useState('');
  const [courses, setCourses] = useState([]);

  const handleSemesterSelect = (semester) => {
    setSelectedSemester(semester);
  };

  const handleAddCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  return (
    <div>
      <h1>COE Page</h1>
      <SemesterSelection onSelectSemester={handleSemesterSelect} />
      {selectedSemester && (
        <>
          <h2>{selectedSemester} Semester Courses</h2>
          <CourseForm onAddCourse={handleAddCourse} />
          <ul>
            {courses.map((course, index) => (
              <li key={index}>
                {course.name} - {course.credit} credits - ID: {course.id}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default COEPage;
