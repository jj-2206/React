// quiz 4-2
// 클릭했을 때만 input value 화면에 출력!

import React, { useEffect } from 'react';
const App = () => {
  const [show, setShow] = React.useState('');
  const [value, setValue] = React.useState('');

  useEffect(() => {
    const onClick = () => {
      setShow(value);
    };
    document.addEventListener('click', onClick);
    function cleanup() {
      document.removeEventListener('click', onClick);
    }
    return cleanup;
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
      {show && `현재 value는 ${show}입니다!`}
    </div>
  );
};
export default App;
