import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import { News } from '../types/News';

const NewsList: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('/Eraytronicks/news.json')
      .then(response => {
        setNews(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the news', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading news...</p>;
  }

  return (
    <div className="container mx-auto p-4 ">
      {news.map(article => (
        <NewsItem key={article.id} news={article} />
      ))}
    </div>
  );
};

export default NewsList;
