

export const addTodo = (text) =>( {
 type: 'ADD_TODO',
 payload: text
});

export const removeTodo = (id) =>( {
	type: 'REMOVE_TODO',
	payload: id
  });
  

  
  // filterActions.js

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter,
});



export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});