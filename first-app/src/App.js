// 5-0
// react-router react-router란?
// => react 프로젝트에서 SPA를 쉽게 도입할 수 있도록 도와주는 라이브러리
// parameter

import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from 'react-router-dom';

const Hello = () => {
  const params = useParams();
  console.log(params); // {id: '5', id2: '9'}
  return (
    <Link to="/">
      to home {params.id} {params.id2}
    </Link>
  );
};
// <Link/>
// props.to 에 적힌 url로 http get request를 보내지 않고 브라우저에 표시되는 url만 변경

const Main = () => <Link to="/hello/5">to hello with id 5</Link>;

const App = () => {
  return (
    <BrowserRouter>
      {/* <BrowserRouter/> react-router를 사용할 앱에서 단 한번만 사용 */}
      <Routes>
        {/*  <Routes/> <Route />를 아래와 같이 동작하도록 만듦 */}
        <Route path="/hello/:id/:id2" element={<Hello />} />

        <Route path="/" element={<Main />} />
        {/* <Route/> props.path와 브라우저의 url이 일치하면 props.element를 return 
        가장 먼저 일치하는 Route 만 적용 */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
