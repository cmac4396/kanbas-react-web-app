import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus, FaCaretDown } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import '../Modules/index.css'
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="flex-fill wd-course-main-content">
        <div className="wd-course-modules">
            <div className="wd-course-modules-header">
                <div className="wd-course-modules-header-left">
                    <input
                            type="text"
                            placeholder="Search for Assignment"
                            className="form-control"
                            // onChange={handleChange}
                            // value={searchInput} 
                    />
                </div>
                <div>
                    <div>
                        <button className="wd-btn" type="button">
                            <FaPlus/> Group
                        </button>
                        <button className="wd-btn wd-btn-special" type="button">
                            <FaPlus/> Assignment
                        </button>
                        <button className="wd-btn" type="button">
                            <FaEllipsisV/>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <hr/>
                <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div className="wd-module-header">
                    <span className="ellipsis">
                    <FaEllipsisV className="ms-2" />
                    <FaCaretDown className="ms-2" />
                    ASSIGNMENTS
                    </span>
                    <div>
                        <FaPlus className="ms-2"/>
                    </div>
                    <div>
                        <FaEllipsisV className="ms-2"/>
                    </div>
                    </div>
                    <ul className="wd-module-items">
                    {assignmentList.map((assignment, index) => (
                        <li className="list-group-item" key={index}>
                            <div className="wd-module-item-row">
                                <div className="wd-module-item-info">
                                    <FaEllipsisV/>
                                    <FaNewspaper className="text-success"/> 
                                    <Link className="wd-assignment-link"
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                    </Link>
                                </div>
                                <div className="wd-module-item-icons-right">
                                <FaCheckCircle className="text-success" />
                                <FaEllipsisV className="ms-2" />
                            </div>
                            </div>
                        </li>))}
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    </div>

);}
export default Assignments;