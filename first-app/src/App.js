const arr = Array.from(Array(100), (_, i) => i + 1);
const renderArr = arr.map((item) => <button>{item}</button>);

const App = () => {
  return <div>{renderArr}</div>;
};

export default App;
