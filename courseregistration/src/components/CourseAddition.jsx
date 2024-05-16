import React from 'react';
import CoursetableEditable from './courselisteditable';

function CourseAddition() {
  // Dummy courses data for testing
  const courses = [
    { id: 1, name: 'Artificial Intelligence', credits: 3 },
    { id: 2, name: 'Cryptography', credits: 4 },
    { id: 3, name: 'Machine Learning', credits: 2 },
    { id: 4, name: 'Machine Learning', credits: 2 },
    { id: 5, name: 'Machine Learning', credits: 1 },
  ];

  return (
    <div>
      <h1>Course Addition Page</h1>
      <CoursetableEditable courses={courses} />
    </div>
  );
}

export default CourseAddition;
