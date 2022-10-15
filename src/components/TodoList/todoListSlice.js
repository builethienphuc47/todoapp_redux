// const initState = [
//   { id: 1, name: "Learn Yoga", completed: false, priority: "High" },
//   { id: 2, name: "Learn Redux", completed: false, priority: "Medium" },
//   { id: 3, name: "Learn JavaScript", completed: true, priority: "Low" },
// ];

// const TodoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
    
//       case "todoList/toggleTodoStatus":
//       return state.map((item) =>
//         item.id === action.payload
//           ? { ...item, completed: !item.completed }
//           : item
//       );
    
//       default:
//       return state;
//   }
// };
// export default TodoListReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice( {
  name: 'todoList',
  initialState : [
  { id: 1, name: "Learn Yoga", completed: false, priority: "High" },
  { id: 2, name: "Learn Redux", completed: false, priority: "Medium" },
  { id: 3, name: "Learn JavaScript", completed: true, priority: "Low" },
],
  reducers: { //IMMER
    addTodo: (state,action) => {
      state.push(action.payload);
    },// action creators
    toggleTodoStatus: (state,action) => {
      const currentTodo = state.find(todo => todo.id === action.payload)
      currentTodo.completed = !currentTodo.completed;
    }
  }
})