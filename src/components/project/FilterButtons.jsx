import React from 'react';
import './filterButtons.css';

const FilterButtons = ({ categories, activeFilter, setActiveFilter }) => {
  return (
    <div className="filter-buttons">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`filter-button ${activeFilter === category ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;