// quiz 4-2

// cleanup 함수 사용, 권장하는 방법!

import React, { useEffect } from 'react';
const App = () => {
  const [value, setValue] = React.useState('');

  useEffect(() => {
    const onClick = () => {
      console.log(`현재 value는 ${value}입니다!`);
    };
    document.addEventListener('click', onClick);
    function cleanup() {
      document.removeEventListener('click', onClick);
    }
    return cleanup;
  }, [value]);

  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
export default App;
