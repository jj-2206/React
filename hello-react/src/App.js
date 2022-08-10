import TodoInsert from './todo-components/TodoInsert';
import TodoList from './todo-components/TodoList';
import TodoTemplates from './todo-components/TodoTemplates';

const App = () => {
  return (
    <TodoTemplates>
      <TodoInsert />
      <TodoList />
    </TodoTemplates>
  );
};

export default App;
