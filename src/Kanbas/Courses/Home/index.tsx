import Modules from "../Modules";
import "./index.css"
import { RiNumber1 } from "react-icons/ri";
import { FaCalendar, FaBan, FaCheckCircle, FaFileImport, FaGlobe, FaBullhorn, FaBell } from "react-icons/fa";
import { FaRightFromBracket, FaChartSimple, FaXmark } from "react-icons/fa6";

function Home() {
  return (
    <div className="flex-fill d-block d-md-flex">
      <Modules/>
      <div className="flex-grow-0 me-2 d-none d-lg-block wd-course-secondary-content ">
                <div>
                    <h2>Course Status</h2>
                    <div className="row wd-publish-status">
                        <button className="wd-btn col-6"><FaBan/> Unpublish</button>
                        <button className="wd-btn wd-btn-green col-6"><FaCheckCircle/> Published</button>
                    </div>
                    <button className="wd-btn wd-btn-span"><FaFileImport/> Import Existing Content</button>
                    <button className="wd-btn wd-btn-span"><FaRightFromBracket/> Import from Commons</button>
                    <button className="wd-btn wd-btn-span"><FaGlobe/> Choose Course Home Page</button>
                    <button className="wd-btn wd-btn-span"><FaChartSimple/> View Course Stream</button>
                    <button className="wd-btn wd-btn-span"><FaBullhorn/> New Announcement</button>
                    <button className="wd-btn wd-btn-span"><FaChartSimple/> New Analytics</button>
                    <button className="wd-btn wd-btn-span"><FaBell/> View Course Notifications</button>
                    <div className="wd-course-todo-list">
                        <h2><span>To Do</span></h2>
                        <ul>
                            <li>
                                <div className="wd-course-todo-item">
                                    <RiNumber1 style={{color: "#b52828"}}/>
                                    <div className="wd-course-todo-item-info">
                                        <div className="wd-course-todo-item-title">
                                            <a href="">Grade A1 - ENV + HTML</a>
                                        </div>
                                        <div className="wd-course-todo-item-info-list">
                                            300 Points • Sep 18 at 11:59pm
                                        </div>
                                    </div>
                                    <div className="wd-course-todo-item-close">
                                        <span>
                                            <button>
                                                <FaXmark/>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="wd-course-todo-list">
                        <h2><span>Coming Up</span></h2>
                        <ul>
                            <li>
                                <div className="wd-course-todo-item">
                                    <FaCalendar className="me-2"/>
                                    <div className="wd-course-todo-item-info">
                                        <div className="wd-course-todo-item-title">
                                            <a href="#">Lecture</a>
                                        </div>
                                        <div className="wd-course-todo-item-info-list wd-course-todo-item-subtitle">
                                            CS4550.12621.202430
                                        </div>
                                        <div className="wd-course-todo-item-info-list">
                                            300 Points • Sep 18 at 11:59pm
                                        </div>
                                    </div>
                                </div>
                                <div className="wd-course-todo-item">
                                    <FaCalendar className="me-2"/>
                                    <div className="wd-course-todo-item-info">
                                        <div className="wd-course-todo-item-title">
                                            <a href="#">CS5610 06 SP23 Lecture</a>
                                        </div>
                                        <div className="wd-course-todo-item-info-list wd-course-todo-item-subtitle">
                                            CS4550.126241.202430
                                        </div>
                                        <div className="wd-course-todo-item-info-list">
                                            Sep 11 at 6pm
                                        </div>
                                    </div>
                                </div>
                                <div className="wd-course-todo-item">
                                    <FaCalendar className="me-2"/>
                                    <div className="wd-course-todo-item-info">
                                        <div className="wd-course-todo-item-title">
                                            <a href="#">CS5610 Web Development Summer 1 2023 - LECTURE</a>
                                        </div>
                                        <div className="wd-course-todo-item-info-list wd-course-todo-item-subtitle">
                                            CS4550.126241.202430
                                        </div>
                                        <div className="wd-course-todo-item-info-list">
                                            Sep 11 at 7pm
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  );
}
export default Home;