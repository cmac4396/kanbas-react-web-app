import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
        {modulesList.map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <div className="wd-module-header">
                <span className="ellipsis">
                    <FaEllipsisV className="ms-2" />
                    <FaCaretDown className="ms-2" />
                    {module.name}
                </span>
                <div>
                    <FaCheckCircle className="text-success" />
                </div>
                <div>
                    <FaPlusCircle className="ms-2" />
                </div>
                <div>
                    <FaEllipsisV className="ms-2" />
                </div>
              </div>
            </div>
            {selectedModule._id === module._id && (
              <ul className="wd-module-items">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <div className="wd-module-item-row">
                        <div className="wd-module-item-info">
                            <FaEllipsisV/>{lesson.name}
                        </div>
                        <div className="wd-module-item-icons-right">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                        </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;

