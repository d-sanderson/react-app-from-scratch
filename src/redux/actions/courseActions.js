import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "./actionTypes";
import * as courseApi from "../../api/courseApi.js";

export function loadCoursesSuccess(courses) {
  return { type: LOAD_COURSES_SUCCESS, courses };
}

export function createCourse(course) {
  debugger;
  return { type: CREATE_COURSE, course };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((err) => {
        throw err;
      });
  };
}
