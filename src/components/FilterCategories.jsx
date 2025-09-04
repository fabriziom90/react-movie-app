import React from "react";

const FilterCategories = ({
  categories,
  setCategoryFilter,
  categoryFilter,
}) => {
  return (
    <>
      <button
        className="btn btn-blue me-2 mt-2"
        onClick={() => setCategoryFilter("")}
      >
        Tutti i generi
      </button>
      {categories.map((category, index) => (
        <button
          className={`btn btn-blue me-2 mt-2 ${
            category === categoryFilter ? "active" : ""
          }`}
          key={index}
          onClick={() => setCategoryFilter(category)}
        >
          {category}
        </button>
      ))}
    </>
  );
};

export default FilterCategories;
