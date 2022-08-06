// quiz 4-6

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
      // console.log(value);
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
      {count === 0 && `값은 ${value}입니다.`}
      {/* count value가 0일 때 value값 출력 */}
    </div>
  );
};

export default App;
