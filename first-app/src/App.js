// quiz 2-2
// state 컴포넌트 안에서 관리되는 유동적인 데이터
// [result, setResult] => [value, setter함수]

import React from 'react';
const App = () => {
  console.log('컴포넌트 재렌더!');
  const [left, setLeft] = React.useState(0);
  const [right, setRight] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const handleChangeLeft = (e) => {
    setLeft(e.target.value);
  };

  const handleChangeRight = (e) => {
    setRight(e.target.value);
  };

  const handleClickSubmit = () => {
    setResult(+left + +right);
  };

  return (
    <>
      <input type="number" onChange={handleChangeLeft} />
      +
      <input type="number" onChange={handleChangeRight} />
      =
      <input type="number" disabled value={result} />
      <button type="button" onClick={handleClickSubmit}>
        계산
      </button>
    </>
  );
};
export default App;

/* 제출코드
  const [result, setResult] = React.useState(0);
  const [resultNum1, setNum1] = React.useState(0);
  const [resultNum2, setNum2] = React.useState(0);
  return (
    <>
      <input type="number" onChange={(e) => setNum1(Number(e.target.value))} />
      +
      <input type="number" onChange={(e) => setNum2(Number(e.target.value))} />
      =
      <input type="number" disabled value={result} />
      <button type="button" onClick={() => setResult(resultNum1 + resultNum2)}>
        계산
      </button>
    </>
  );
  */
