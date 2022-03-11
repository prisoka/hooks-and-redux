import React from 'react';

const Ingredients = ({ recipe }) => {
  return (
    <div>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
