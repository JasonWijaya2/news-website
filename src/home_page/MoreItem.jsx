import React, { useEffect, useState } from 'react';
import { Item } from '../component/Item';

const MoreItem = ({ headlineArticles }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let url;
    if (search) {
      url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${import.meta.env.VITE_API_KEY}`;
    } else {
      // Jika nilai pencarian kosong, ambil semua artikel
      url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_API_KEY}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Filter artikel yang sudah ada di headline
        const filteredArticles = data.articles.filter(
          (article) =>
            !headlineArticles.find((headline) => headline.url === article.url) &&
            article.title !== '[Removed]'
        );
        setArticles(filteredArticles);
        setCurrentPage(1);
      });
  }, [headlineArticles, search]);

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

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section id='search'>
      <form className='container-fluid' role='search'>
        <input
          className='form-control mt-4'
          type="search"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        />
      </form>
      <div className='d-flex justify-content-center flex-wrap'>
        {articles.slice(startIndex, endIndex).map((news, index) => (
          <Item key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))}
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <button onClick={handlePrevPage}>&lt;</button>
        <span className='mx-2'>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage}>&gt;</button>
      </div>
    </section>
  );
};

export default MoreItem;
