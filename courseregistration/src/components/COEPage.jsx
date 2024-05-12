import React, { useState } from 'react';
import SemesterSelection from './SemesterSelection';
import CourseForm from './CourseForm'; // Assuming you have a CourseForm component
import "../css/COE.css";

function COEPage() {
  const [selectedSemester, setSelectedSemester] = useState('');
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ name: '', id: '', credit: '' });

  const handleSemesterSelect = (semester) => {
    setSelectedSemester(semester);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = () => {
    if (newCourse.name && newCourse.id && newCourse.credit) {
      // Create a copy of the courses array and add the new course to it
      const updatedCourses = [...courses, { ...newCourse }];
      // Update the courses list
      setCourses(updatedCourses);
      // Clear the input fields
      setNewCourse({ name: '', id: '', credit: '' });
    }
  };

  return (
    <div className="coe-page">
      <header className="header">
        <h1 className="coe-heading">COE Department will add Courses here</h1>
      </header>
      <div className="main-content">
        <div className="left-content">
          <h2>Semester Selection</h2>
          <SemesterSelection className="semester-selection" onSelectSemester={handleSemesterSelect} />
        </div>
        <div className="right-content">
          <h2>Add Course</h2>
          <CourseForm
            className="course-form"
            selectedSemester={selectedSemester}
            newCourse={newCourse}
            onInputChange={handleInputChange}
            onAddCourse={handleAddCourse}
          />
          <h2>Added Courses</h2>
          <ul className="courses-list">
            {courses.map((course, index) => (
              <li className="course-item" key={index}>
                {course.name} - {course.credit} credits - ID: {course.id}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default COEPage;
