import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const [moduleList, setModuleList] = useState(modules);
  const [module, setModule] = useState({
    _id: "0",
    name: "New Module",
    description: "New Description",
    course: courseId || "",
  });
  const addModule = (module: any) => {
    const newModule = { ...module,
      _id: new Date().getTime().toString() };
    const newModuleList = [newModule, ...moduleList];
    setModuleList(newModuleList);
  };
  const deleteModule = (moduleId: string) => {
    const newModuleList = moduleList.filter(
      (module) => module._id !== moduleId );
    setModuleList(newModuleList);
  };
  const updateModule = () => {
    const newModuleList = moduleList.map((m) => {
      if (m._id === module._id) {
        return module;
      } else {
        return m;
      }
    });
    setModuleList(newModuleList);
  };
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
      <li className="list-group-item">
        <div className="d-inline-flex">
        <input value={module.name} className="form-control inline"
          onChange={(e) => setModule({
            ...module, name: e.target.value })}
        />
        <button className="btn btn-primary inline" onClick={updateModule}>
                Update
        </button>
        <button onClick={() => { addModule(module) }}
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
                    onClick={() => deleteModule(module._id)}>
                    Delete
                  </button>
                </div>
                <div>
                <button className="btn btn-success"
                    onClick={(event) => { setModule(module); }}>
                    Edit
                  </button>
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

