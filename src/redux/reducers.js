import { combineReducers } from "redux";
import FiltersReducer from "../components/Filters/FiltersSlice";
import TodoListReducer from "../Todo/TodoListSlice";

// const rootReducer = (state={} , action) => {
//   return {
//     filters: (FiltersReducer(state.filters,action)),
//     todoList: (TodoListReducer(state.todoList, action))

//   };
// };
const rootReducer = combineReducers({
  filters: FiltersReducer,
  todoList:TodoListReducer
})
export default rootReducer;
