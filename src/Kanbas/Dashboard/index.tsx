import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { FaNewspaper, FaEllipsisV} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CourseType } from "../Database";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse } : 
  {
    courses: CourseType[],
    course: CourseType,
    setCourse: (course:CourseType) => void,
    addNewCourse: () => void,
    deleteCourse: (courseId:string) => void,
    updateCourse: () => void
  }
) {
  return (
    <div className="p-4">
        <div className="container">
        <h1>Dashboard</h1> 
        <h5>Course</h5>
        <input value={course.title} className="form-control" 
               onChange={(e) => setCourse({ ...course, title: e.target.value }) } />
        <input value={course.number} className="form-control" 
               onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
        <input value={course.subtitle} className="form-control" 
               onChange={(e) => setCourse({ ...course, subtitle: e.target.value }) }/>
        <input value={course.term} className="form-control" 
              onChange={(e) => setCourse({ ...course, term: e.target.value }) }/>
        <button className="btn wd-btn"onClick={addNewCourse} >
          Add
        </button>
        <button className="btn wd-btn" onClick={updateCourse} >
          Update
        </button>
        <hr />
          <h2>Published Courses (12)</h2> <hr />
          <div className="d-flex flex-row">
            {courses.map((course: CourseType) => (
                <div className="card ">
                    <Link className="wd-kanbas-card-link" to={`/Kanbas/Courses/${course._id}/Home`}>
                        <div className="wd-kanbas-dashboard-card-top card-img-top">
                        {Object.hasOwn(course, "image") && (<img src={`/images/${course.image}`} className="wd-kanbas-dashboard-card-top"/>)}
                        <button type="button" className="btn">
                            <FaEllipsisV/>
                        </button>
                        </div>
                        <div className="card-body">
                      <div className="card-text">
                                <div className="wd-kanbas-dashboard-card-title ellipsis">
                                {course.title}
                                </div>
                                <div className="wd-kanbas-dashboard-card-subtitle">{course.subtitle}</div>
                                <div className="wd-kanbas-dashboard-card-term">{course.term}</div>
                            </div>
        
                            <div className="wd-kanbas-dashboard-card-assignments-link">
                            <Link to={`/Kanbas/Courses/${course._id}/Assignments`}>
                                <FaNewspaper className="card-text"/>
                            </Link>
                              <button className="btn wd-btn" onClick={(event) => {
                                  event.preventDefault();
                                  setCourse(course);
                                }}>
                                Edit
                              </button>
                            <button className="btn wd-btn" onClick={(event) => {
                                      event.preventDefault();
                                      deleteCourse(course._id);
                                    }}>
                                    Delete
                            </button>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
         </div>
        </div>
    </div>
  );
}
export default Dashboard;

