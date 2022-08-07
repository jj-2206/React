import { Link, Outlet, useNavigate } from 'react-router-dom';

const Articles = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goAbout = () => {
    navigate('/about');
  };

  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
      <button onClick={goBack}> 뒤로 가기 </button>
      <button onClick={goAbout}> 소개로 가기 </button>
    </div>
  );
};

export default Articles;
