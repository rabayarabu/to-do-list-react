import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoItem from './ToDoItem';
import InputTodo from './InputTodo';
import '../style/app.css';
// import Modal from './Modal';

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };
  const addTodoItem = (title) => {
  // update state with user's input
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    );
  };
  return (
    <div className="todocontainer">
      {/* <Modal /> */}
      <h1 className="header">ToDoS</h1>
      <InputTodo addTodoItem={addTodoItem} />
      <ul className="todolist">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            handleChange={handleChange}
            delTodo={delTodo}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
