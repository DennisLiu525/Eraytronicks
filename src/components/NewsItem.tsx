import React from 'react';
import { News } from '../types/News';

interface NewsItemProps {
  news: News;
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <h2 className="text-lg font-bold">
        <a href={news.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {news.title}
        </a>
      </h2>
      <p className="text-sm text-gray-500">{new Date(news.publishedAt).toLocaleDateString()}</p>
      <p>{news.description}</p>
    </div>
  );
};

export default NewsItem;
