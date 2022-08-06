// quiz 4-5

// useEffect함수가 리턴하는 함수가 clear 함수!
// 3초가 지나면 -1초가 되는 타이머를 멈춰줘야하기 때문에,
// line 20에 clearInterval(intervalTimer) 작성.

import React, { useEffect } from 'react';

const App = () => {
  const [count, setCount] = React.useState('');
  const [value, setValue] = React.useState('');

  useEffect(() => {
    setCount(3);
    const intervalTimer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    const timerId = setTimeout(() => {
      console.log(value);
      clearInterval(intervalTimer);
    }, 3000);
    return () => {
      clearInterval(intervalTimer);
      clearTimeout(timerId);
    };
  }, [value]);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <br />
      {`남은 시간 ${count}초`}
    </div>
  );
};

export default App;
