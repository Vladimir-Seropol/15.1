import { combineReducers } from "@reduxjs/toolkit";



// Типы действий
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const SET_FILTER = 'SET_FILTER';
const TOGGLE_TODO = 'TOGGLE_TODO';


// Начальное состояние
const initialState = {
  todos: [],
  filter: 'all',
};

// Редьюсеры
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload }]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
		case SET_FILTER:
	  return {
		 ...state,
		 filter: action.payload,
	  };
	  case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
		};
    default:
      return state;
  }
};

// Селекторы
export const selectTodos = (state) => state.todo.todos;

// Комбинирование редьюсеров
const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;










//import { createSlice } from "@reduxjs/toolkit";

//// Создание среза для задач
//const todoSlice = createSlice({
//  name: "todos",
//  initialState: {
//    todos: [],
//  },
//  reducers: {
//    addTodo: (state, action) => {
//      state.todos.push({ id: Date.now(), text: action.payload });
//    },
//    removeTodo: (state, action) => {
//      state.todos = state.todos.filter(todo => todo.id !== action.payload);
//    },
//  },
//});

//// Экспорт действий
//export const { addTodo, removeTodo } = todoSlice.actions;

//// Селектор для получения списка задач
//export const selectTodos = (state) => state.todos.todos;

//// Экспорт редьюсера
//export default todoSlice.reducer;





