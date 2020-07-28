export function createCourse(course) {
  return { type: "CREATE_COURSE", course };
}

export function deleteCourse(course) {
  return { type: "DELETE_COURSE", course };
}

