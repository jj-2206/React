import { useReducer, useRef, useCallback } from 'react';
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

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // const [state, dispatch] = useReducer(reducer, initialArg, init);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  // props로 함수를 전달할 때에는 useCallback을 사용해서 전달하기
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // useState의 함수형 업데이트는 dependency array를 빈 배열로 만들 수 있다.
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; // nextId 1씩 더하기
  }, []);

  // 삭제 기능: 같은 id인 todo를 배열에서 삭제
  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  // 수정 기능
  // addEventListener('toggle', (event) => {});
  // ontoggle = (event) => { };

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplates>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplates>
  );
};

export default App;
