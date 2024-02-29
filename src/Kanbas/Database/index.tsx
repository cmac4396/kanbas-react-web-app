import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";

export type CourseType = {
  _id:string, 
  title:string, 
  subtitle: string, 
  term: string, 
  number: string,
  image?: string | undefined
}

export interface DB {
  courses: CourseType[];
  modules: object;
  assignments: object;
}

const db:DB = {
  courses: courses,
  modules: modules,
  assignments: assignments
}

export default db;

export {
  courses, assignments, modules
}

