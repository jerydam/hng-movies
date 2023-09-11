// pages/hero.tsx

import React from 'react';
import axios from 'axios';

interface Movie {
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
}

interface HeroProps {
  movie: Movie | null;
}

const Hero: React.FC<HeroProps> = ({ movie }) => {
  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Hero Page</h1>
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Vote Average: {movie.vote_average}</p>
        <p>Popularity: {movie.popularity}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const apiKey = '279341382322363f9f276402e52323cf';
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`
    );

    const movie: Movie = response.data;
    return {
      props: { movie },
    };
  } catch (error) {
    console.error('Error fetching movie data:', error);
    return {
      props: { movie: null },
    };
  }
}

export default Hero;
