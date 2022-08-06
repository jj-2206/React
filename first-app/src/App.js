// quiz 4-1

// useRef 없이 useState의 setter함수로 최신 value를 가져와서 출력할 수도 있습니다.
// 지양합시다 패턴. -> useEffect의 클린업 함수를 사용하는 것이 좋습니다.

import React, { useEffect } from 'react';
const App = () => {
  const [value, setValue] = React.useState('');

  useEffect(
    () => {
      const onClick = () => {
        setValue((prev) => {
          console.log(`현재 value는 ${prev} 입니다!`);
          return prev;
        });
      };
      document.addEventListener('click', onClick);
    },
    [
      //value
    ]
  );

  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
export default App;
