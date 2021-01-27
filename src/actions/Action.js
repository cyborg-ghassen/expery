import { ADD_EXPERT, DELETE_EXPERT,SEARCH_EXPERT,EDIT_EXPERT } from "./ActionType";

export function addExpert(payload) {
  return { type: ADD_EXPERT, payload };
}
export function DeleteExpert(payload) {
  return { type: DELETE_EXPERT, payload };
}

export function SearchExpert(payload) {
  return { type: SEARCH_EXPERT, payload };
}



export function EditExpert(payload) {
  return { type: EDIT_EXPERT, payload };
}


