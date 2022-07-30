# React 실시간 강의 quiz 모음

quiz 1-1 (JSX 렌더시 무시되는 값)

```
다음 코드를 render하는 경우 어떤 결과가 나오는지 확인
```

```js
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
```

quiz 1-2

```
1부터 100까지 들어있는 array가 있을 때,
7의 배수인 경우 '7의 배수'라는 텍스트를 포함한 button 출력.
10의 배수인 경우 출력하지 않음
그 외엔 숫자가 들어있는 button 출력
```

```js
import React from 'react';
// 1부터 100까지 들어있는 arr
const arr = Array.from(Array(100), (_, i) => i + 1);
const App = () => {
  return <div>{/* fill here */}</div>;
};
export default App;
```

quiz 2-1

```
1~100 이 들어있는 button 100개를 만들고
버튼을 클릭하면 들어있는 숫자를 alert로 띄워주기
ex) 화면상의 34가 써져있는 button을 클릭한 경우,
34를 alert로 띄워줌
```

```js
import React from 'react';
// 1부터 100까지 들어있는 arr
const arr = Array.from(Array(100), (_, i) => i + 1);
const App = () => {
  return <div>{/* fill here */}</div>;
};
export default App;
```

quiz 2-2

```
간단한 덧셈 계산기 만들기
코드를 어떻게 바꿔야 아래처럼 동작할까?
```

![2-2](./img/2-2.png)

```js
import React from 'react';
const App = () => {
  const [result, setResult] = React.useState(0);
  return (
    <>
      <input type="number" />
      +
      <input type="number" />
      =
      <input type="number" disabled value={result} />
      <button type="button">계산</button>
    </>
  );
};
export default App;
```

quiz 2-3

```
useRef를 사용하여, Click to Reset 버튼을 클릭하면
input의 value를 초기화하도록 만들어보기
```

```js
const App = () => {
  const input = React.useRef(null);
  const handleClick = () => {
    if (input.current) {
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
```

quiz 2-4

```
현재 value는 ~~~ 입니다 문구도 추가해보기
```

![2-4](./img/2-4.png)

```js
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
```

---

### 진상현 강사님 자료에서 발췌했습니다.
