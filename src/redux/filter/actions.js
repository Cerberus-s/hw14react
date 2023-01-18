import {FILTER_TODO} from "./types";

export const filterTodoActionCreator = (filter) => ({
    type: FILTER_TODO,
    payload: filter
})