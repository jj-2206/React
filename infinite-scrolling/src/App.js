import { useState, useRef, useCallback } from 'react';
import useArticleSearch from './useArticleSearch.js';

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { articles, hasMore, loading, error } = useArticleSearch(
    query,
    pageNumber
  );

  const observer = useRef();
  const lastArticleElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
          // console.log('Visible');
        }
      });
      if (node) observer.current.observe(node);
      console.log(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <>
      <input type="text" value={query} onChange={handleSearch} />
      {articles.map((article, index) => {
        if (articles.length === index + 1) {
          return (
            <h1 ref={lastArticleElementRef} key={article}>
              {article}
            </h1>
          );
        } else {
          return <h1 key={article}>{article}</h1>;
        }
      })}
      <div>{!error && loading && 'Loading...'}</div>
      <div>{error && '검색어를 입력해주세요.'}</div>
    </>
  );
}

export default App;
