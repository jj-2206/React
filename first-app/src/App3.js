import { createContext, useContext, useState } from 'react';
const defaultName = 'asdf';
const NameContext = createContext(defaultName);
const Hello1 = () => {
  const name = useContext(NameContext);
  return (
    <div>
      this is Hello1. and Name is {name}
      <Hello4 />
    </div>
  );
};
const Hello4 = () => {
  const name = useContext(NameContext);
  return <div>this is Hello4 Hello {name}!</div>;
};
const App = () => {
  const [v, setV] = useState('');
  const onChange = (e) => setV(e.target.value);
  return (
    <NameContext.Provider value={v}>
      <input onChange={onChange}></input>
      <Hello1 />
    </NameContext.Provider>
  );
};
export default App;
