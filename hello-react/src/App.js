import { useState, useRef, useCallback } from 'react';
import TodoInsert from './todo-components/TodoInsert';
import TodoList from './todo-components/TodoList';
import TodoTemplates from './todo-components/TodoTemplates';

// 많은 데이터 만들기
const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  }
  return array;
};

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // useState의 함수형 업데이트는 dependency array를 빈 배열로 만들 수 있다.
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // nextId 1씩 더하기
  }, []);

  // 삭제 기능: 같은 id인 todo를 배열에서 삭제
  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  // 수정 기능
  // addEventListener('toggle', (event) => {});
  // ontoggle = (event) => { };

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map(
        (todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo),
        // todo의 checked를 반대로 하는 객체를 생성하거나 그대로 반환
      ),
    );
  }, []);

  return (
    <TodoTemplates>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplates>
  );
};

export default App;
