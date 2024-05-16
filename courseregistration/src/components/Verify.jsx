import React, { useState } from 'react';
import CourseTable from './courselist'; // Assuming the CourseTable component is in a file named courselist.jsx
import '../css/verify.css';

function Verify({ courses }) {
  // Dummy course details for testing
  const dummyCourses = [
    { id: 1, name: 'Artificial Intelligence', credits: 3 },
    { id: 2, name: 'Cryptography', credits: 4 },
    { id: 3, name: 'Machine Learning', credits: 2 },
    { id: 4, name: 'Machine Learning', credits: 2 },
    { id: 5, name: 'Machine Learning', credits: 1 },
  ];

  // State to track if the submission is successful
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Your logic for handling submission goes here
    setIsSubmitted(true);
  };

  return (
    <div className="verify-container">
      <h2 className="verify-header">Verify Courses</h2>
      {courses && courses.length > 0 ? (
        <div className="course-list">
          <CourseTable courses={courses} />
        </div>
      ) : null}

      {/* Dummy courses for testing */}
      <div className="course-list">
        <CourseTable courses={dummyCourses} />
      </div>

      {/* Submit button */}
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>

      {/* Display submission status */}
      {isSubmitted && <p>Submission successful!</p>}
    </div>
  );
}

export default Verify;
