import React from "react";

const MovieCard = ({ movie }) => {
  const { id, img, name, category, plot } = movie;
  return (
    <div className="col-4">
      <div className="card-movie">
        <img src={img.startsWith("http") ? img : `./img/${img}`} alt="" />
        <div className="overlay">
          <h2 className="mb-2">{name}</h2>
          <strong>Categoria: </strong>
          <em>{category}</em>
          <p className="mt-2">
            {plot.length > 150 ? plot.substr(0, 150) + "..." : plot}
          </p>
          <a href="#" className="btn btn-green">
            Continua a leggere
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
