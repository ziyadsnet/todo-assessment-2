import { connect } from 'react-redux';
import { completeTodo } from '../actions';
import { deleteTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, "SHOW_ALL")
})


const mapDispatchToProps = dispatch => ({
  completeTodo: id => dispatch(completeTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)