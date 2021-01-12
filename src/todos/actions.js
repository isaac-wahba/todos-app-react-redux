export const CREATE_TODO = 'CREATE_TODO';

// 1) create a function that returns a json
// This will be triggered on the creation, pass the text as action
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: {text},
});

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = text =>({
    type: REMOVE_TODO,
    payload: {text},
});

