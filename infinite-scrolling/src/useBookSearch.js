import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from './apiKey.js';

export default function useBookSearch(query, pageNumber) {
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&fq=headline:${query}&page=${pageNumber}&api-key=${API_KEY}`,
      params: { q: query, page: pageNumber },
    }).then((res) => {
      console.log(res.data.response.docs[0].headline.main);
    });
  }, [query, pageNumber]);
  return null;
}
