import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div className="App">
    <div className="wrapper">
      <AddTodo />
      <VisibleTodoList />
    </div>
  </div>
)

export default App;
