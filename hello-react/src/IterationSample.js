import { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'snowman' },
    { id: 2, text: 'snow' },
    { id: 3, text: 'wind' },
    { id: 4, text: 'ice' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  const onClick = () => {
    const nextNames = names.concat({
      // Array.prototype.concat()
      id: nextId, // nextId 값을 id로 설정
      text: inputText,
    });
    setNextId(nextId + 1); // nextId 값에 1을 더해 준다.
    setNames(nextNames); // names값을 업데이트한다.
    setInputText(''); // inputText를 비운다.
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    // Array.prototype.filter()
    setNames(nextNames);
  };
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  // Array.prototype.map()
  return (
    <>
      <input value={inputText} onChange={onChange} onKeyDown={onKeyDown} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
