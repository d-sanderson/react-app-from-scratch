import { CREATE_COURSE, DELETE_COURSE } from "./actionTypes"
export function createCourse(course) {
  debugger;
  return { type: CREATE_COURSE, course };
}

export function deleteCourse(course) {
  return { type: DELETE_COURSE, course };
}

