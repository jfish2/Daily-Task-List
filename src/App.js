import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import AddTodo from "./components/AddTodo";
import React from "react";
import CurrentDate from "./components/CurrentDate";

function App() {
    const [todos, setTodos] = React.useState([
        { id: 1, text: "Study Go", done: false },
        { id: 2, text: "Study React", done: false },
        { id: 3, text: "Workout", done: false }
    ]);
  return (
    <div className="App">
      <h1><strong>JF's to do list</strong></h1>
        <CurrentDate />
        <List todos={todos} setTodos={setTodos}/>
        <AddTodo setTodos={setTodos}/>
    </div>
  );
}

export default App;
