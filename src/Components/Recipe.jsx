import React from 'react';
import Ingredients from './Ingredients';
import Steps from './Steps';

const Recipe = ({ filteredRecipe }) => {
  return (
    <>
      {filteredRecipe.length
        ? filteredRecipe.map((recipe, idx) => {
            return (
              <div style={{ margin: '2rem 0 2rem 2rem' }} key={idx}>
                <h2>{recipe.name}</h2>
                <Ingredients recipe={recipe} />
                <Steps recipe={recipe} />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Recipe;
