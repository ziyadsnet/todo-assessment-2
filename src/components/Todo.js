import React from "react";
import PropTypes from "prop-types";

const Todo = ({ handleComplete, handleDelete, completed, title }) => {
  return (
    <div
      // adding class to apply some css
      className="item"
      // applying some inline styles (background-color) upon complete
      style={{
        backgroundColor: completed ? "#ccccff" : "#f0f5f5"
      }}
    >
      <div className="itemTitle">
        <span
          // applying some inline styles (background-color) upon complete
          style={{
            textDecoration: completed ? "line-through" : "none"
          }}
        >
          {title}
        </span>
      </div>

      <div className="itemControls">
        <button onClick={handleComplete} disabled={completed}>
          Complete
        </button>
        <button onClick={handleDelete}>X</button>
      </div>
    </div>
  );
};
// some props type checking
Todo.propTypes = {
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default Todo;
