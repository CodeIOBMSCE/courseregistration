import React, { useState } from 'react';
import { Select, Button } from '@chakra-ui/react';
import CourseTable from './courselist'; // Assuming your CourseTable component is in a file named CourseTable.js
import '../css/semesterselection.css';

function Semselection({ onSelectSemester, onNextStep }) {
  const [selectedDepartment, setSelectedDepartment] = useState(
    localStorage.getItem('selectedDepartment') || ''
  );
  const [selectedSemester, setSelectedSemester] = useState(
    localStorage.getItem('selectedSemester') || ''
  );
  const [courses, setCourses] = useState([
    { id: 1, name: 'Artificial Intelligence', credits: 3 },
    { id: 2, name: 'Cryptography', credits: 4 },
    { id: 3, name: 'Machine Learning', credits: 2 },
    { id: 4, name: 'Machine Learning', credits: 2 },
    { id: 5, name: 'Machine Learning', credits: 1 },
  ]);

  const handleDepartmentChange = (value) => {
    setSelectedDepartment(value);
    localStorage.setItem('selectedDepartment', value);
  };

  const handleSemesterChange = (value) => {
    setSelectedSemester(value);
    localStorage.setItem('selectedSemester', value);
    onSelectSemester(selectedDepartment, value);
  };

  // Calculate total credits
  const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);

  const handleAddEditClick = () => {
    // Retain and pass department and semester props
    onNextStep(selectedDepartment, selectedSemester);
  };

  return (
    <div className="semselection-container">
      <label htmlFor="department">Select Department:</label>
      <Select
        id="department"
        onChange={(e) => handleDepartmentChange(e.target.value)}
        value={selectedDepartment}
      >
        <option value="">Select Department</option>
        <option value="dept1">Department 1</option>
        <option value="dept2">Department 2</option>
      </Select>

      {selectedDepartment && (
        <div className="semselection-container">
          <label htmlFor="semester">Select Semester:</label>
          <Select
            id="semester"
            onChange={(e) => handleSemesterChange(e.target.value)}
            value={selectedSemester}
          >
            <option value="">Select Semester</option>
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Semester {i + 1}
              </option>
            ))}
          </Select>

          {selectedSemester && courses.length > 0 && (
            <>
              <CourseTable courses={courses} totalCredits={totalCredits} /> {/* Pass totalCredits as prop to CourseTable */}

              <Button colorScheme="blue" mt={4} onClick={handleAddEditClick}>
                Add/Edit Courses
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Semselection;
