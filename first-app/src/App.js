// quiz 4-4

import React, { useEffect } from 'react';

// cleanup 함수로 clearTimeout() 를 합니다.
// 타이머 기능!

const App = () => {
  const [value, setValue] = React.useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log(value);
    }, 3000);
    return () => {
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
    </div>
  );
};

export default App;
