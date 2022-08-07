import { Link, Outlet, useNavigate, NavLink } from 'react-router-dom';

const Articles = () => {
  const navigate = useNavigate();

  const goAbout = () => {
    navigate('/about');
  };

  const ArticleItems = ({ id }) => {
    const activeStyle = {
      color: 'green',
      fontSize: 20,
    };
    return (
      <li>
        <NavLink
          to={`/articles/${id}`}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          게시글 {id}
        </NavLink>
      </li>
    );
  };

  return (
    <div>
      <Outlet />
      <ul>
        <ArticleItems id={1} />
        <ArticleItems id={2} />
        <ArticleItems id={3} />
      </ul>
      <button onClick={goAbout}> 소개로 가기 </button>
    </div>
  );
};

export default Articles;

{
  /* <ul>
<li>
  <NavLink
    to="/articles/1"
    style={({ isActive }) => (isActive ? activeStyle : undefined)}
  >
    게시글 1
  </NavLink>
</li>
<li>
  <NavLink
    to="/articles/2"
    style={({ isActive }) => (isActive ? activeStyle : undefined)}
  >
    게시글 2
  </NavLink>
</li>
<li>
  <NavLink
    to="/articles/3"
    style={({ isActive }) => (isActive ? activeStyle : undefined)}
  >
    게시글 3
  </NavLink>
</li>
</ul> */
}
