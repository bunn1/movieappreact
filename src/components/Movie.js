import React from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

function Movie({ title, poster_path, overview, vote_average }) {
  const setVoteClass = () => {
    if (vote_average >= 8) {
      return 'green';
    } else if (vote_average >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8fDA%3D'
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        {/* Conditionally set the className for the span tag */}
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>

      <div className="movie-overview">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
