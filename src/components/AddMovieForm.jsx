import React from "react";
import { useState } from "react";

const AddMovieForm = ({ formData, setFormData, handleSubmit, categories }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newObj = {
      ...formData,
      [name]: value,
    };

    setFormData(newObj);
  };

  return (
    <div className="col-12">
      <form
        className="create-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="row gy-4">
          <div className="col-12 col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Nome film"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-md-4">
            <select
              className="form-select"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Seleziona categoria</option>
              {categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="col-12 col-md-4">
            <input
              type="url"
              className="form-control"
              placeholder="Copertina"
              name="img"
              value={formData.img}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <textarea
              name="plot"
              id=""
              className="form-control"
              placeholder="Plot"
              value={formData.plot}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-green">Salva</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
