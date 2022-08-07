import { Link, Navigate } from 'react-router-dom';

const Home = () => {
  const MyPage = () => {
    const isLoggedIn = false;

    if (!isLoggedIn) {
      return <Navigate to="/login" replace={true} />;
    }

    return <div>마이 페이지</div>;
  };

  return (
    <div>
      <h1>홈</h1>
      <p>홈 컴포넌트 입니다</p>
      <ul>
        <li>
          <Link to="/about"> 소개 </Link>
        </li>
        <li>
          <Link to="/profile/0">jj의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/1">yw의 프로필</Link>
        </li>
        <li>
          <Link to="*">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="/mypage">마이 페이지</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
      <p>Home.js</p>
    </div>
  );
};

export default Home;
