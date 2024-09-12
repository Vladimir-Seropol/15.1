import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';

function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();


  
  const handleSubmit = (e) => {
	e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы
 
	// Проверяем, заполнено ли поле
	if (text.trim() === '') {
	  alert('Пожалуйста, добавте новую запись.');
	  return; // Выходим из функции, если поле пустое
	}
 
	// Если поле не пустое, добавляем задачу
	dispatch(addTodo(text));
	setText(''); // Очищаем поле ввода
 };


  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Добавте новую запись" />
      <button className='btn' type="submit">Добавить</button>
		
    </form>
  );
}

export default AddTodo;


