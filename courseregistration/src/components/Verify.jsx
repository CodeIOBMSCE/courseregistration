import React from 'react';

function Verify({ courses }) {
  return (
    <div>
      <h2>Verify Courses</h2>
      {courses && courses.length > 0 ? (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              {course.name} - {course.credit} credits - ID: {course.id}
            </li>
          ))}
        </ul>
      ) : (
        <p>No courses to verify.</p>
      )}
    </div>
  );
}

export default Verify;
