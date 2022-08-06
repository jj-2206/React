import React, { useState, useRef } from 'react';

const App = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const idRef = useRef(null);
  const pwRef = useRef(null);

  const idError = '유효하지 않은 id입니다.';
  const pwError = '유효하지 않은 password입니다.';

  const idCheck = id.length >= 6 && id.length <= 20;
  const pwCheck = pw.length >= 12 && pw.length <= 20;

  const handleChange = (event) => {
    if (event.target.name === 'id') {
      setId(event.target.value);
    }
    if (event.target.name === 'pw') {
      setPw(event.target.value);
    }
  };

  const handleClick = () => {
    if (!idCheck) {
      alert(idError);
      setId('');
      idRef.current.focus();
    } else if (!pwCheck) {
      alert(pwError);
      setPw('');
      pwRef.current.focus();
    } else alert('회원가입 성공!');
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="id"
          ref={idRef}
          value={id}
          onChange={handleChange}
          placeholder="6글자 이상 20글자 이하"
        />
        <div>{idCheck ? null : idError}</div>
      </div>
      <div>
        <input
          type="text"
          name="pw"
          ref={pwRef}
          value={pw}
          onChange={handleChange}
          placeholder="12글자 이상 20글자 이하"
        />
        <div>{pwCheck ? null : pwError}</div>
      </div>
      <button type="button" onClick={handleClick} disabled={!(id || pw)}>
        회원가입
      </button>
    </div>
  );
};

export default App;
