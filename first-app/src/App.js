import React from 'react';
// quiz 1-1
// boolean, null, undefined는 무시됩니다.
// false, null, undefined와 true는 유효한 자식입니다. 그저 렌더링 되지 않을 뿐입니다. 아래의 JSX 표현식들은 동일하게 렌더링됩니다.
const App = () => {
  return (
    <>
      <div>{[false, null, undefined, true]}</div>
      <div>{false}</div>
      <div>{null}</div>
      <div>{undefined}</div>
      <div>{true}</div>
    </>
  );
};

export default App;
