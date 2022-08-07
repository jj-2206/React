import React from 'react';
import { Link } from 'react-router-dom';

const fields = [
  {
    key: 'id',
    label: 'id',
    placeholder: '6글자 이상 10글자 이하',
    initialValue: '',
    checkValid: (v) => v.length >= 3 && v.length <= 5,
  },
  {
    key: 'pw',
    label: 'password',
    placeholder: '12글자 이상 18글자 이하',
    initialValue: '',
    checkValid: (v) => v.length >= 3 && v.length <= 5,
  },
];

const Login = () => {
  const [values, setValues] = React.useState(
    fields.reduce(
      (acc, { key, initialValue }) => ({ ...acc, [key]: initialValue }),
      {}
    )
  );
  const refs = React.useRef(Array.from(Array(fields.length, () => null)));
  const valids = fields.map(({ key, checkValid }) => checkValid(values[key]));
  const isButtonDisabled = !Object.values(values).some((value) => value.length);

  const handleClick = () => {
    const isAllValid = valids.every((isValid, i) => {
      const { key, initialValue, label } = fields[i];
      if (!isValid) {
        setValues((prev) => ({
          ...prev,
          [key]: initialValue,
        }));
        refs.current[i].focus();
        alert(`유효하지 않은 ${label}입니다`);
      }
      return isValid;
    });

    if (!isAllValid) {
      return;
    }
    alert('회원가입 성공!');
  };

  const handleChangeValue = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const isAllEvery = valids.every((a) => a);
  return (
    <div>
      <h2>로그인을 먼저 해주세요</h2>
      {fields.map(({ key, label, placeholder }, i) => (
        <div key={key}>
          <input
            type="text"
            ref={(ref) => (refs.current[i] = ref)}
            name={key}
            value={values[key]}
            placeholder={placeholder}
            onChange={handleChangeValue}
          />
          {!valids[i] && `유효하지 않은 ${label}입니다`}
        </div>
      ))}
      {isAllEvery ? (
        <Link to="*">
          <button type="button">회원가입</button>
        </Link>
      ) : (
        <button type="button" onClick={handleClick} disabled={isButtonDisabled}>
          회원가입
        </button>
      )}
    </div>
  );
};

export default Login;
