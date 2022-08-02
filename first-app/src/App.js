// quiz 2-4 +uncontrolled/ controlled input 설명
// useState, useRef
// uncontrolled input: span의 {value}까지 지워주지는 못한다. -> setValue("")
// controlled input: react state로 들고있는 value를 input에 push하여 sync

/* DOM에 직접 접근할 필요가 없을 때는 useState로 관리한다!
import React from "react";
const App = () => {
  const [value, setValue] = React.useState();
  const input = React.useRef(null);
  const handleClick = () => {
    setValue("");
    if (input.current) {
      input.current.value = "";
    }
  };
  return (
    <div>
      <span> 현재 value는 {value}입니다. </span>
      <input
        type="text"
        ref={input}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Click to Reset
      </button>
    </div>
  );
};

export default App;
*/

import React from 'react';

const App = () => {
  const [state, setState] = React.useState();
  const handleClick = () => {
    setState('');
  };

  return (
    <div>
      <span> 현재 value는 {state}입니다. </span>
      <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Click to Reset
      </button>
    </div>
  );
};

export default App;
