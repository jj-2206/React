import TodoListitem from './TodoListitem';
import './TodoList.scss';

const TodoList = () => {
  return (
    <div classname="TodoList">
      <TodoListitem />
      <TodoListitem />
      <TodoListitem />
    </div>
  );
};

export default TodoList;
