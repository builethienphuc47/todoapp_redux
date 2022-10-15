export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId
    }
}
// action creator => function   
export const searchFillterChange = (text) => {
    return{
        type:'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = (priorities) => {
    return {
        type: 'filters/priorityFilterChange',
        payload: priorities
    }

}