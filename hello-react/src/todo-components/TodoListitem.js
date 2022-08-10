import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListitem.scss';

const TodoListitem = () => {
  return (
    <div className="TodoListitem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListitem;
