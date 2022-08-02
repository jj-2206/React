// quiz 2-4
// useState, useRef

import React from 'react';
const App = () => {
  const [value, setValue] = React.useState();
  const input = React.useRef(null);
  const handleClick = () => {
    if (input.current) {
      input.current.value = '';
    }
  };
  return (
    <div>
      <span> 현재 value는 {value}입니다. </span>
      <input type="text" ref={input} onChange={(e) => setValue(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Click to Reset
      </button>
    </div>
  );
};

export default App;
