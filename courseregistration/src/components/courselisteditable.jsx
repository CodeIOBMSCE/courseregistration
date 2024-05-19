import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import '../css/courseaddition.css';


function CoursetableEditable({ courses }) {
  const [editableCourses, setEditableCourses] = useState(courses.map(course => ({ ...course, isEditing: false })));

  const handleEditClick = (id) => {
    setEditableCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === id ? { ...course, isEditing: true } : course
      )
    );
  };

  const handleSaveClick = (id) => {
    setEditableCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === id ? { ...course, isEditing: false } : course
      )
    );
  };

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Course Name</Th>
          <Th>Course ID</Th>
          <Th>Credits</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {editableCourses.map(course => (
          <Tr key={course.id}>
            <Td>
              {course.isEditing ? (
                <input
                  type="text"
                  value={course.name}
                  onChange={(e) => setEditableCourses(prevCourses => prevCourses.map(c => (c.id === course.id ? { ...c, name: e.target.value } : c)))}
                />
              ) : (
                course.name
              )}
            </Td>
            <Td>
              {course.isEditing ? (
                <input
                  type="text"
                  value={course.id}
                  onChange={(e) => setEditableCourses(prevCourses => prevCourses.map(c => (c.id === course.id ? { ...c, id: e.target.value } : c)))}
                />
              ) : (
                course.id
              )}
            </Td>
            <Td>
              {course.isEditing ? (
                <input
                  type="number"
                  value={course.credits}
                  onChange={(e) => setEditableCourses(prevCourses => prevCourses.map(c => (c.id === course.id ? { ...c, credits: e.target.value } : c)))}
                />
              ) : (
                course.credits
              )}
            </Td>
            <Td>
              {course.isEditing ? (
                <button className='editbutton' onClick={() => handleSaveClick(course.id)}>Save</button>
              ) : (
                <button  className='editbutton' onClick={() => handleEditClick(course.id)}>Edit</button>
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default CoursetableEditable;
