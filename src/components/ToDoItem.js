import { useState } from 'react';

const ToDoItem = (prop) => {
  const {
    todo, handleChange, delTodo, setUpdate,
  } = prop;
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  return (

    <li className="item">
      <div style={viewMode}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChange(todo.id)}
        />
        <button onClick={handleEditing} type="button">Edit</button>
        <button onClick={() => delTodo(todo.id)} type="button">Delete</button>
        {todo.title}
      </div>

      <input
        type="text"
        value={todo.title}
        className="textInput"
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, todo.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>

  );
};

export default ToDoItem;
