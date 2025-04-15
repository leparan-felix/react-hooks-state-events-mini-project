import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const buttons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => onCategoryChange(category)}
      >
        {category}
      </button>
    );
  });

  return <div className="categories">{buttons}</div>;
}

export default CategoryFilter;
