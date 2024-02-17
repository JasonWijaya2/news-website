import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSide = ({ country, setCountry, headlineArticles }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${import.meta.env.VITE_API_KEY}`
    fetch(url)
     .then(response => response.json())
     .then((data) => {
      // Filter artikel yang sudah ada di headline
      const filteredArticles = data.articles.filter(
        (article) => !headlineArticles.find((headline) => headline.url === article.url) && article.title !== '[Removed]'
      );
      setArticles(filteredArticles);
      setCurrentPage(1);
    });
}, [country, headlineArticles])

const articlesPerPage = 4;
const totalPages = Math.ceil(articles.length / articlesPerPage);

const handlePrevPage = () => {
  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};

const handleNextPage = () => {
  setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
};

const startIndex = (currentPage - 1) * articlesPerPage;
const endIndex = startIndex + articlesPerPage;

const handleCountryChange = (e) => {
  setCountry(e.target.value);
};

  return (
    <div className='mt-4' style={{ background: '#fff321', padding: '10px' }}>
      <div>
        <label htmlFor="country">Choose country:</label>
        <select id="country" className='form-select' aria-label='Default select example' value={country} onChange={handleCountryChange}>
          <option value="id">Indonesia</option>
          <option value="us">United States</option>
          <option value="ru">Russia</option>
          <option value="sg">Singapore</option>
          <option value="my">Malaysia</option>
          <option value="hk">Hong Kong</option>
        </select>
      </div>
      <div className='d-flex justify-content-center flex-wrap mt-3'>
        {articles.slice(startIndex, endIndex).map((news, index) => (
          <div className="align-items-center p-3" key={index}>
            <div className="card">
              <Link to={`/detail/${encodeURIComponent(news.title)}`} className="card-body" style={{ textDecoration:'none' }}>
                <h5 className="card-title">{news.title}</h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <button onClick={handlePrevPage}>&lt;</button>
        <span className='mx-2'>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage}>&gt;</button>
      </div>
    </div>
  )
}

export default RightSide