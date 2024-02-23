import ModuleList from "./List";
import { FaEllipsisV, FaCheckCircle, FaPlus } from "react-icons/fa";
function Modules() {
  return (
    <div className="flex-fill wd-course-main-content">
        <div className="wd-course-modules">
            <div className="wd-course-modules-header">
                <div>
                    <div>
                        <button className="wd-btn" type="button">Collapse All</button>
                        <button className="wd-btn"type="button">View Progress</button>
                        <button className="wd-btn dropdown-toggle" type="button" id="publish-all" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FaCheckCircle className="text-success"/> Publish All 
                        </button>
                        <button className="wd-btn wd-btn-special" type="button">
                            <FaPlus/> Module
                        </button>
                        <button className="wd-btn" type="button">
                            <FaEllipsisV/>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <hr/>
                <ModuleList />
            </div>
        </div>
    </div>
  );
}
export default Modules;