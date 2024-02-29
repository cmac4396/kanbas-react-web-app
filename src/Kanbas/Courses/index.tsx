import { courses } from "../../Kanbas/Database";
import { HiMiniBars3, HiXMark} from "react-icons/hi2";
import { FaChevronDown, FaGlasses } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CourseNavigation from "./Navigation";
import "./Navigation/course_navigation.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { CourseType } from "../../Kanbas/Database";
function Courses({ courses } : { courses: CourseType[]}) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <>
    <div className= "wd-course-content-header d-none d-md-flex">
        <button>
            <HiMiniBars3 className="fs-2"/>
        </button>
        <div className="wd-course-nav-crumbs">
            <ul>
                <li>
                    <Link to={`/Kanbas/Courses/${course?._id}/Home`}>
                        {course?.subtitle}
                    </Link> 
                </li>
                <li>
                    <FaChevronRight/>
                </li>
                <li>
                    <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<div> Modules</div>} />
                            <Route path="Modules" element={<div> Modules</div>} />
                            <Route path="Piazza" element={<div> Piazza</div> } />
                            <Route path="Assignments" element={<div> Assignments</div>} />
                            <Route path="Assignments/:assignmentId" element={<div> Assignment Editor</div>} />
                            <Route path="Grades" element={<div> Grades</div>} />
                    </Routes>
                </li>
            </ul>
        </div>
        <div>
            <button className="wd-btn">
                <FaGlasses/> Student View
            </button>  
        </div>
    </div>
    <div className="d-block d-md-flex">
        <div className="wd-course-nav collapse collapse-horizontal d-none d-md-block show" id="wd-course-nav">
            <span className="wd-kanbas-courses-nav-term ellipsis">{course?.term}</span>
            <nav
            className="overflow-y-scroll bottom-0 end-0"
            style={{ left: "320px", top: "50px" }} 
            >
            <CourseNavigation />
            </nav>
        </div>
        <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
        </Routes>
    </div>
    </>
  );
}
export default Courses;