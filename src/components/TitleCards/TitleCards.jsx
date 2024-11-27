import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault;
    cardsRef.current.scrollleft += event.deltaY;
  };

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : 'now_playing'
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDM5NTJkYzkyNzQyYmU3ZTU5MDM4ZjU5MGI3NmM3ZSIsIm5iZiI6MTczMjczNjMyNy40NTYxODg3LCJzdWIiOiI2NzQ3NjU4OWRhNzY3YWFlMzA0MGQyMDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VthwHwRKa2LY6v-dXmd-H2snqs9dmCUL-mmKWyAfIjM',
    },
  };

  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link className='card' key={index} to={`/player/${card.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.poster_path}
                alt=''
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
