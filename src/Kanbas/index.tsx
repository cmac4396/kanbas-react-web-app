import KanbasNavigation from "./Navigation";
import "./styles.css"
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
      "_id":"CS1200",
     "title":"CS1200 12982 First Year Seminar SEC 14 Fall 2020 [VTL-1-OL]",
     "number":"CS1200",
     "subtitle": "CS1200.12982.202110",
     "term": "202110_1 Fall 2020 Semester Full Term"
  });
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <div className="wd-kanbas-container">
      <KanbasNavigation />
      <div className="main">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
            } />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
          </Routes>
      </div>
    </div>
  );
}


export default Kanbas;
