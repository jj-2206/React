import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>about 컴포넌트 입니다</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <p>쿼리 스트링: {location.search}</p>
      {/* /about?mode=6&detail=true */}
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode +1</button>
    </div>
  );
};
export default About;
