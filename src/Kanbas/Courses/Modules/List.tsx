import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { ModuleLesson, modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
      <li className="list-group-item">
        <div className="d-inline-flex">
        <input value={module.name} className="form-control inline"
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <button className="btn btn-primary inline" 
                onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                className="btn btn-success inline">Add</button>
        </div>
        <textarea value={module.description} className="form-control"
          onChange={(e) => setModule({
            ...module, description: e.target.value })}
        />
      </li>
        {moduleList.filter((module) => module.course === courseId)
          .map((module, index) => (
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
                <div>
                <button className="btn wd-btn-special"
                    onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                  </button>
                </div>
                <div>
                <button className="btn btn-success"
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
            {selectedModule._id === module._id && (
              <ul className="wd-module-items">
                {module.lessons?.map((lesson:ModuleLesson, index:number) => (
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

