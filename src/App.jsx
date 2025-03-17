
import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./index.css"; 

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [listBgColors, setListBgColors] = useState([]);


  const generateRandomColor = () => {
    const colors = ["#FF6B6B", "#FFB86C", "#FFD700", "#8AFF8A", "#70A9A1", "#6A5ACD", "#FF69B4"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();

    if (inputText.trim() === "") {
      alert("Please enter something valid!");
      return;
    }

    if (editIndex !== null) {
      let updatedTodos = [...todos];
      updatedTodos[editIndex] = inputText.trim();
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, inputText.trim()]);
      setListBgColors([...listBgColors, generateRandomColor()]);
    }

    setInputText("");

  
    document.body.style.backgroundColor = generateRandomColor();
  };

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>
      <form onSubmit={handleTodoSubmit} className="todo-form">
        <input type="text" onChange={inputHandler} value={inputText} placeholder="Enter a task..." />
        <button>{editIndex !== null ? "Update Todo" : "Add Todo"}</button>
      </form>
      <TodoItem todos={todos} setTodos={setTodos} setInputText={setInputText} setEditIndex={setEditIndex} listBgColors={listBgColors} />
    </div>
  );
};

export default App;
