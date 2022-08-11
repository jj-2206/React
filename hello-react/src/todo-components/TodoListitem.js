import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListitem.scss';

const TodoListitem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListitem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListitem);
// React.memo() 컴포넌트 작성하고 감싸주기
// props로 받은 todo, onRemove, onToggle 들의 state가 바뀌지 않는다면 리렌더링은 일어나지 않는다.
