// quiz 2-3
// useRef
// ref를 넘겨주면, 해당 dom element 를 current에 담아줌

import React from 'react';
const App = () => {
  const input = React.useRef(null);
  const handleClick = () => {
    if (input.current) {
      input.current.value = '';
    }
  };
  return (
    <div>
      <input type="text" ref={input} />
      <button type="button" onClick={handleClick}>
        Click to Reset
      </button>
    </div>
  );
};
export default App;
