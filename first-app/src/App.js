// quiz 4-3

import React, { useEffect } from 'react';

// useEffect 사용해서 만든 답안

const App = () => {
  const [value, setValue] = React.useState('');

  useEffect(() => {
    setTimeout(() => {
      console.log(value);
    }, 3000);
  }, [value]);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <br />
    </div>
  );
};

// JavaScript의 eventlistener만으로도 구현 가능합니다,,,

// const App = () => {
//   return (
//     <>
//       <input
//         onChange={(e) => {
//           const value = e.target.value;
//           setTimeout(() => {
//             console.log(value);
//           }, 3000);
//         }}
//       />
//     </>
//   );
// };

export default App;
