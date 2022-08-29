import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from './apiKey.js';

export default function useArticleSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setArticles([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;
    // 요청 취소
    axios({
      method: 'GET',
      url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&fq=headline:${query}&page=${pageNumber}&api-key=${API_KEY}`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setArticles((prevArticles) => {
          return [
            ...prevArticles,
            ...res.data.response.docs.map((a) => a.headline.main),
          ];
        });
        setHasMore(res.data.response.docs.length > 0);
        setLoading(false);
        // console.log(res.data.response);
        // console.log(res.data.response.docs[0].headline.main);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);
  return { loading, error, articles, hasMore };
}

/* 겹치는 항목 없도록 new Set() 메소드
return [
  ...new Set([
    ...prevArticles,
    ...res.data.response.docs.map((a) => a.headline.main),
  ]),
];
*/
