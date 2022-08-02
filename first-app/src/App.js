// quiz 2-1
// Event Handling JSX에서는 onClick, 실행될 함수를 전달

import React from 'react';

const arr = Array.from(Array(100), (_, i) => i + 1);
const App = () => {
  return (
    <div>
      {arr.map((item) => (
        <button
          key={item}
          onClick={() => {
            alert(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default App;
