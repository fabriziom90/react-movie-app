import MoviesList from "./MoviesList";
import { useState, useEffect } from "react";
import axios from "axios";
import AddMovieForm from "./AddMovieForm";
import Alert from "./Alert";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [search, setSearch] = useState("");
  const [showAddFilmForm, setShowAddFilmForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    img: "",
    plot: "",
  });
  const [alert, setAlert] = useState({ show: false, status: "", message: "" });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/fabriziom90/c7772608f797e0f1a7cd171288798be1/raw/179f9baedcd3b16b5b9e0c447211ef9ebb85bafc/films.json"
      )
      .then((resp) => {
        setMovies(resp.data);

        const tempCategories = [];

        resp.data.forEach((movie) => {
          if (!tempCategories.includes(movie.category)) {
            tempCategories.push(movie.category);
          }
        });

        setCategories(tempCategories);
      });
  }, []);

  useEffect(() => {
    const tempMovies = movies.filter((movie) =>
      movie.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredMovies(tempMovies);
  }, [search, movies]);

  const handleSubmitForm = () => {
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      ...formData,
    };

    setMovies([...movies, newMovie]);
    setShowAddFilmForm(false);
    setFormData({
      name: "",
      category: "",
      img: "",
      plot: "",
    });

    setAlert({
      show: true,
      status: "success",
      message: "Film aggiunto correttamente",
    });
  };

  return (
    <main>
      <div className="container my-4">
        <div className="row gy-4">
          <div className="col-12 text-center">
            <h1>Boolean Videoteca</h1>
            <h2>
              <em>La videoteca per classe 147 più fornita nel mondo Boolean</em>
            </h2>
          </div>
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <h2>I nostri film</h2>
              <button
                className="btn btn-blue"
                onClick={() => setShowAddFilmForm(!showAddFilmForm)}
              >
                Aggiungi film
              </button>
            </div>
          </div>
          <div className="col-12">{alert.show && <Alert alert={alert} />}</div>
          {showAddFilmForm && (
            <AddMovieForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmitForm}
              categories={categories}
            />
          )}
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Cerca film"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <MoviesList movies={filteredMovies} />
        </div>
      </div>
    </main>
  );
};

export default Main;
