import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { title } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(title)}&apiKey=${import.meta.env.VITE_API_KEY}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch data from the API');
        }

        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
          setArticle(data.articles[0]);
        } else {
          setError('Article not found');
          setArticle({url: article.url})
        }
      } catch (error) {
        console.error('Error fetching article:', error);
        setError('Failed to fetch article data');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [title]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !article) {
    return (
      <div>
        <p>{error || 'Article not found'}</p>
        {article && <p>To see more, click <a href={article.url} target="_blank" rel="noopener noreferrer">here</a></p>}
      </div>
    );
  }

  console.log(article);

  return (
    <div>
        <h1>{article.title}</h1>
        <p>{article.source.name}</p>
        <p>{new Date(article.publishedAt).toLocaleString()}</p>
        <hr />
        <img src={article.urlToImage} alt={article.title} style={{ maxWidth: '100%' }} />
        <p>{article.description}</p>
        <hr />
        <p>{article.content}</p>
        <p>To see more, click <a href={article.url} target="_blank" rel="noopener noreferrer">here</a></p>
    </div>
  );
};

export default Detail;
