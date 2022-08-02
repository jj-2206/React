// quiz 3-1
// useRef
// ref는 dom을 담을 때만 쓸 수 있다? -> X
// ref는 값이 바뀌어도 컴포넌트가 re-render 되지 않는다? -> O
// react에 의한 re-render가 아닌, 실제 document에 존재하는 element를 직접 접근하여 수정
// react state로는 관리할 수 없는 경우에만 사용하는 것이 적절

import React from 'react';

const App = () => {
  const input = React.useRef(null);
  const [value, setValue] = React.useState('');
  const handleClick = () => {
    setValue('');
    if (input.current) {
      input.current.focus();
    }
  };
  return (
    <div>
      <input type="text" ref={input} value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Click to Reset and Focus!
      </button>
    </div>
  );
};

export default App;
