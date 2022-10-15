import { createSelector } from "@reduxjs/toolkit";
// Dùng thư viện reselect

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;
// Nếu mà selector phụ thuộc vào 1 selector khác thì ta truyền nó vào làm tham số
// cho selector đó và tham số cuối cùng là 1 cái function
export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  filterPrioritySelector,
  searchTextSelector,
  (todoList, status, priorities, searchText) => {
    // status => 'All' 'Completed' 'Todo'
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        (status === "Completed" ? todo.completed === true : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);

// Cách phổ thông
// export const  todoListSelector = (state) =>{
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filters.search);
//     })
//     return todoRemaining;
// }
// export const searchTextSelector = (state) => state.filters.search
