import { useContext } from 'react';
import ColorContext from '../contexts/color';

// useContext Hook 사용

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: '100px',
          height: '100px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '50px',
          height: '50px',
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
