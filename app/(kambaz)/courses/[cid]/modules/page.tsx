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
  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(courseId);
    setModules(modules);
  };
  useEffect(() => {
    fetchModules();
  }, [courseId]);
  const addModule = async () => {
    const newModule = await client.createModuleForCourse(courseId, { name: moduleName });
    setModules([...modules, newModule]);
    setModuleName("");
  };
  const deleteModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    setModules(modules.filter((m) => m._id !== moduleId));
  };
  const editModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  };
  const updateModule = (module: CourseModule) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };
  const saveModule = async (module: CourseModule) => {
    await client.updateModule(module);
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };
  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
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
