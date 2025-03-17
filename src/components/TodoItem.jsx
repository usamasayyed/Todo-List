
import React from "react";

const TodoItem = ({ todos, setTodos, setInputText, setEditIndex, listBgColors }) => {
  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => index !== i));
  };

  const handleUpdate = (index) => {
    setInputText(todos[index]);
    setEditIndex(index);
  };

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className="todo-item" style={{ backgroundColor: listBgColors[index] || "#fff" }}>
          <span>{todo}</span>
          <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
          <button className="edit-btn" onClick={() => handleUpdate(index)}>Update</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;



