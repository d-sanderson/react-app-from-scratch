import { CREATE_COURSE } from "../actions/actionTypes";
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COURSE :
      debugger;
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
