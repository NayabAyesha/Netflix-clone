import React, { useEffect, useRef, useState } from 'react';
import './Titlecards.css';

// Load environment variables
const Netflix = process.env.netflix;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${Netflix}`,
  },
};

const Titlecards = ({ title, categories }) => {
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardRef.current) {
      cardRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${categories ? categories : 'now_playing'}?language=en-US&page=1`,
          options
        );
        const data = await response.json();
        setApiData(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const currentRef = cardRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel);
    }
    return () => {
      if (currentRef) currentRef.removeEventListener('wheel', handleWheel);
    };
  }, [categories]);

  return (
    <div className="title-cards">
      <h2>{title || 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => (
          <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title || 'Title'} />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Titlecards;
