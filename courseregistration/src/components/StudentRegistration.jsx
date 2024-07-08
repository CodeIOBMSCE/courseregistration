import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../css/StudentRegistration.css';
import Header from './Header'; // Import the Header component

export default function StudentCourseRegistration() {
    const navigate = useNavigate();

    // Mock course data
    const [courses, setCourses] = useState([
        { id: 1, name: "Course 1", code: "CSE101", credit: 3, selected: false },
        { id: 2, name: "Course 2", code: "MATH201", credit: 4, selected: false },
        { id: 3, name: "Course 3", code: "PHYS101", credit: 4, selected: false },
        { id: 4, name: "Course 4", code: "CHEM101", credit: 4, selected: false },
        // Add more courses as needed
    ]);

    // Function to toggle course selection
    const toggleCourseSelection = (id) => {
        setCourses(
            courses.map((course) =>
                course.id === id ? { ...course, selected: !course.selected } : course
            )
        );
    };

    // Calculate total credits
    const totalCredits = courses.reduce((total, course) => {
        return course.selected ? total + course.credit : total;
    }, 0);

    const handleSubmit = () => {
        // Logic to handle form submission
        console.log("Form submitted!");
    };

    return (
        <div>
            <Header heading="Student Course Registration " />
            <div className="container">
                <div className="header">
                    <h1>All Courses Semester-6</h1> <span></span>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Credit</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.id}>
                                    <td>{course.id}</td>
                                    <td>{course.name}</td>
                                    <td>{course.code}</td>
                                    <td>{course.credit}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={course.selected}
                                            onChange={() => toggleCourseSelection(course.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Total Credits:</td>
                                <td>{totalCredits}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan="5">
                                    <button className="submit-btn" onClick={handleSubmit}>
                                        Submit
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}
