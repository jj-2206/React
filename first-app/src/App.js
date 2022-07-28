const App = () => {
  const arr = Array.from(Array(100), (_, i) => i + 1);
  console.log(arr);
  return (
    <div>
      {arr.map((item, index) => {
        if (item % 7 === 0) {
          return <button key={index}>7의 배수</button>;
        } else if (item % 10 === 0) {
          return null;
        } else {
          return <button key={index}>{item}</button>;
        }
      })}
    </div>
  );
};

export default App;
