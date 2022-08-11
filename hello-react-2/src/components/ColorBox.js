import ColorContext from '../contexts/color';

// Consumer: Context의 value를 소비(조회) (props로 받아오는 것이 아니다!)
// Render Props 컴포넌트의 children이 있어야할 자리에 함수를 전달!

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {({ state }) => (
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
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
