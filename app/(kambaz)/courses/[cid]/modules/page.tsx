// The Modules screen loads this course's modules from the server
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import * as client from "../../client";
import { type CourseModule } from "../../client";
export default function Modules() {
  const { cid } = useParams();
  const courseId = String(cid);
  const [modules, setModules] = useState<CourseModule[]>([]);
  const [moduleName, setModuleName] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchModules = async () => {
    setLoading(true);
    try {
      const modules = await client.findModulesForCourse(courseId);
      setModules(modules);
      setErrorMessage("");
    } catch {
      setErrorMessage("Unable to load the modules. Is the server running?");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchModules();
  }, [courseId]);
  const addModule = async () => {
    try {
      const newModule = await client.createModuleForCourse(courseId, { name: moduleName });
      setModules([...modules, newModule]);
      setModuleName("");
    } catch {
      setErrorMessage("The server did not save the new module. Try again.");
    }
  };
  const deleteModule = async (moduleId: string) => {
    try {
      await client.deleteModule(moduleId);
      setModules(modules.filter((m) => m._id !== moduleId));
    } catch {
      setErrorMessage("The server did not delete that module. Try again.");
    }
  };
  const editModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  };
  const updateModule = (module: CourseModule) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };
  const saveModule = async (module: CourseModule) => {
    try {
      await client.updateModule(module);
      setModules(modules.map((m) => (m._id === module._id ? module : m)));
    } catch {
      setErrorMessage("The server did not save that module. Try again.");
    }
  };
  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
      {errorMessage && (
        <p id="wd-modules-error" className="mb-3 rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      {loading && (
        <p id="wd-modules-loading" className="mb-3 text-neutral-500">
          Loading modules from the server...
        </p>
      )}
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            module={module}
            deleteModule={deleteModule}
            editModule={editModule}
            updateModule={updateModule}
            saveModule={saveModule}
          />
        ))}
      </ul>
    </div>
  );
}
