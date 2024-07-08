import React, { useState, useEffect } from 'react';
import { Select, Button } from '@chakra-ui/react';
import CourseTable from './courselist'; // Assuming you have a CourseTable component
import '../css/semesterselection.css';
import '../css/ad.css';

function Semselection({ onSelectSemester, onNextStep }) {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(localStorage.getItem('selectedDepartment') || '');
  const [selectedYear, setSelectedYear] = useState(localStorage.getItem('selectedYear') || '');
  const [selectedSemester, setSelectedSemester] = useState(localStorage.getItem('selectedSemester') || '');
  const [courses, setCourses] = useState([]);

  // Fetch departments from the backend
  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await fetch('http://localhost:5000/departments');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDepartments(data.departments);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  // Fetch courses based on department, year, and semester
  useEffect(() => {
    if (selectedDepartment && selectedYear && selectedSemester) {
      fetch(`http://localhost:5000/courses?department=${selectedDepartment}&year=${selectedYear}&semester=${selectedSemester}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Fetched courses:', data);
          setCourses(data.courses);
        })
        .catch((error) => console.error('Error fetching courses:', error));
    }
  }, [selectedDepartment, selectedYear, selectedSemester]);

  const handleDepartmentChange = (value) => {
    setSelectedDepartment(value);
    localStorage.setItem('selectedDepartment', value);
    setSelectedYear('');
    setSelectedSemester('');
  };

  const handleYearChange = (value) => {
    setSelectedYear(value);
    localStorage.setItem('selectedYear', value);
    setSelectedSemester('');
  };

  const handleSemesterChange = (value) => {
    setSelectedSemester(value);
    localStorage.setItem('selectedSemester', value);
    onSelectSemester(selectedDepartment, selectedYear, value);
  };

  const handleAddEditClick = () => {
    onNextStep(selectedDepartment, selectedYear, selectedSemester);
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
        {departments.map((dept) => (
          <option key={dept.dept_id} value={dept.dept_id}>
            {dept.dept_name}
          </option>
        ))}
      </Select>

      {selectedDepartment && (
        <>
          <label htmlFor="year">Select Year:</label>
          <Select
            id="year"
            onChange={(e) => handleYearChange(e.target.value)}
            value={selectedYear}
            isDisabled={!selectedDepartment}
          >
            <option value="">Select Year</option>
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={2020 + i}>
                {2020 + i}
              </option>
            ))}
          </Select>
        </>
      )}

      {selectedYear && (
        <>
          <label htmlFor="semester">Select Semester:</label>
          <Select
            id="semester"
            onChange={(e) => handleSemesterChange(e.target.value)}
            value={selectedSemester}
            isDisabled={!selectedYear}
          >
            <option value="">Select Semester</option>
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Semester {i + 1}
              </option>
            ))}
          </Select>
        </>
      )}

      {selectedSemester && courses.length > 0 && (
        <>
          <CourseTable courses={courses} /> {/* Display selected courses */}

          <Button colorScheme="blue" mt={4} onClick={handleAddEditClick}>
            Add/Edit Courses
          </Button>
        </>
      )}
    </div>
  );
}

export default Semselection;
