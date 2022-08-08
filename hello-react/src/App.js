import './App.css';

function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'grey',
    color: 'skyblue',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };

  return (
    <>
      {name === '리액트' ? <p>리액트입니다.</p> : <p>리액트가 아닙니다.</p>}
      {/* 조건부 연산자 = 삼항 연산자 */}
      <h3>리액트가 아닐 때는 null ⬇️</h3>
      {name === '리액트' ? (
        <p
          style={{
            backgroundColor: 'black',
            color: 'aqua',
            fontSize: '48px',
            fontWeight: 'bold',
            padding: 16,
          }}
        >
          리액트입니다.
        </p>
      ) : null}
      {name === '리액트' && <p className="react">리액트입니다.</p>}
      {/* AND 연산자(&&)를 사용한 조건부 렌더링 */}
      <h1 style={style}>{name} 안녕</h1>
      <h2>잘 작동하니</h2>
      <input />
    </>
  );
}

export default App;
