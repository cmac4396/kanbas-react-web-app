import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";
import { FaNewspaper, FaEllipsisV} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
function Dashboard() {
  return (
    <div className="p-4">
        <div className="container">
        <h1>Dashboard</h1> <hr />
          <h2>Published Courses (12)</h2> <hr />
          <div className="d-flex flex-row">
            {courses.map((course) => (
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

