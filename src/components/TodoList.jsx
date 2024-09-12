import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, setFilter, toggleTodo } from '../redux/actions/todoActions';

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  
  // Состояние для чекбоксов
  const [filters, setFilters] = useState({
    all: true,
    completed: false,
    incomplete: false,
  });

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };


  const handleToggleCompleted = (id) => {
	 dispatch(toggleTodo(id));
	// Логика для переключения состояния
	setTodos((prevTodos) =>
	  prevTodos.map((todo) =>
		 todo.id === id ? { ...todo, completed: !todo.completed } : todo
	  )
	);
 };

  const handleFilterChange = (filter) => {
    const newFilters = { all: false, completed: false, incomplete: false, [filter]: !filters[filter] };
    setFilters(newFilters);

	 

    // Обновляем фильтр в Redux
    if (newFilters.all) {
      dispatch(setFilter('all'));
    } else if (newFilters.completed) {
      dispatch(setFilter('completed'));
    } else if (newFilters.incomplete) {
      dispatch(setFilter('incomplete'));
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filters.completed && todo.completed) return true;
    if (filters.incomplete && !todo.completed) return true;
    if (filters.all) return true;
    return false;
  });

  return (
    <div>
      <div className="inputs">
        
			 <label>
			 <input className="check-input"
            type="checkbox"
            checked={filters.all}
            onChange={() => handleFilterChange('all')}
          />
			 <span className="check-style"></span>
			
          Все
        </label>
		  <label>
			 <input className="check-input"
             type="checkbox"
				 checked={filters.completed}
				 onChange={() => handleFilterChange('completed')}
          />
			 <span className="check-style"></span>
			
         Выполненные
        </label>
		  <label>
			 <input className="check-input"
             type="checkbox"
				 checked={filters.incomplete}
				 onChange={() => handleFilterChange('incomplete')}
          />
			 <span className="check-style"></span>
			
          Невыполненные
        </label>
      </div>

      {filteredTodos.length === 0 ? (
        <p>Список задач пуст.</p>
      ) : (
        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button className= {`btn  ${todo.completed ? 'btn-completed' : 'btn-not-completed'}`}
 					onClick={() => handleToggleCompleted(todo.id)}>
                {todo.completed ? 'Пометить как невыполненное' : 'Выполнено'}
              </button>

				  
              <button className='btn btn-delete' onClick={() => handleRemove(todo.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;










