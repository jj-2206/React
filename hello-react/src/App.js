import { useState, useRef, useCallback } from 'react';
import TodoInsert from './todo-components/TodoInsert';
import TodoList from './todo-components/TodoList';
import TodoTemplates from './todo-components/TodoTemplates';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트의 기초 알아보기', checked: true },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  // 삭제 기능: 같은 id인 todo를 배열에서 삭제
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  // 수정 기능
  // addEventListener('toggle', (event) => {});
  // ontoggle = (event) => { };

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map(
          (todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo,
          // todo의 checked를 반대로 하는 객체를 생성하거나 그대로 반환
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplates>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplates>
  );
};

export default App;
