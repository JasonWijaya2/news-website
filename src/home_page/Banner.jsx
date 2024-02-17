import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import noImage from '../assets/news.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Banner = ({ setHeadlineArticles }) => {
  const [headlineNews, setHeadlineNews] = useState([]);
  const [articlesWithoutImage, setArticlesWithoutImage] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const fetchHeadlineNews = async () => {
      let fetchedNews = [];
      let fetchedArticlesWithoutImage = [];
      let page = 1;

      while (fetchedNews.length < 3 || fetchedArticlesWithoutImage.length < 5) {
        let urlHeadline = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}&pageSize=10&page=${page}`;
        const response = await fetch(urlHeadline);
        const data = await response.json();

        console.log('API Response:', data);

        const newsWithImages = data.articles.filter((news) => news.urlToImage);
        const newsWithoutImages = data.articles.filter((news) => !news.urlToImage && news.title !== '[Removed]');

        fetchedNews = [...fetchedNews, ...newsWithImages];
        fetchedArticlesWithoutImage = [...fetchedArticlesWithoutImage, ...newsWithoutImages];
        page++;

        if (data.articles.length === 0) {
          // No more articles available
          break;
        }
      }

      setHeadlineNews(fetchedNews.slice(0, 3));
      setHeadlineArticles(fetchedNews.slice(0, 3));
      setArticlesWithoutImage(fetchedArticlesWithoutImage.slice(0, 4));
    };

    fetchHeadlineNews();
  }, [setHeadlineArticles]);

  const handleSlideChange = (selectedIndex) => {
    setActiveSlide(selectedIndex);
  };

  return (
    <section id='banner' className='text-center'>
        <div className='containter-fluid'>
          <div className='row w-100'>
            <div className='col-md-8'>
              <h1>
                <span className='badge text-bg-danger'>Headline News!</span>
              </h1>
              <Carousel
                activeIndex={activeSlide}
                onSelect={(selectedIndex) => handleSlideChange(selectedIndex)}
                interval={3000}
                fade={false}
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                className='justify-content-center w-100'
              >
                {headlineNews.map((news, index) => (
                  <Carousel.Item style={{ height: '500px' }} key={index}>
                    <Link to={`/detail/${encodeURIComponent(news.title)}`} target='_blank'>
                      <img
                        className="d-block img-fluid h-100"
                        src={news.urlToImage ? news.urlToImage : noImage}
                        alt={news.title}
                        style={{ filter: 'brightness(50%)', objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                      <Carousel.Caption className='text-white'>
                        <h5>{news.title}</h5>
                      </Carousel.Caption>
                    </Link>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className='col-md-4 text-white bg-black' >
              <h1>Other</h1>
              <div className="row">
                {articlesWithoutImage.map((article, index) => (
                  <div className="align-items-center p-3" key={index}>
                    <div className="card">
                      <Link to={`/detail/${encodeURIComponent(article.title)}`} className="card-body" style={{ textDecoration:'none' }}>
                        <h5 className="card-title">{article.title}</h5>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Banner;
