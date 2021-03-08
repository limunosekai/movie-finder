import React from 'react';
import { useGlobalContext } from '../util/context';
import { Link } from 'react-router-dom';

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  console.log(movies);
  if (isLoading) {
    return <div className='loading'></div>;
  }

  return (
    <section className='movies'>
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className='movie'>
            <article>
              <img src={poster} alt={title} />
              <div className='movie-info'>
                <h4 className='title'>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
