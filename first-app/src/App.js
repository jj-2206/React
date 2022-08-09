import { createContext, useContext } from 'react';
const defaultUser = {
  name: 'jin',
  id: 'woorung',
};
const UserContext = createContext(defaultUser);
const HelloName = () => {
  const { name } = useContext(UserContext);
  return <div>this is HelloName. and Name is {name}</div>;
};
const HelloId = () => {
  const { id } = useContext(UserContext);
  return <div>this is HelloId. and Id is {id}</div>;
};
// App.tsx
const App = () => (
  <UserContext.Provider value={defaultUser}>
    <HelloId />
    <HelloName />
  </UserContext.Provider>
);
export default App;
