import React, { useEffect, useRef } from 'react';

// useRef로 DOM에 직접 접근, 지양해야하는 것 중 하나.

const App = () => {
  const [value, setValue] = React.useState('');
  const ref = React.useRef();

  useEffect(
    () => {
      const onClick = () => {
        console.log(`현재 value는 ${ref.current.value}입니다!`);
      };
      document.addEventListener('click', onClick);
    },
    [
      // value
    ]
  );
  return (
    <>
      <input
        ref={ref}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};
export default App;
