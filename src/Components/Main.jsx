import React, { useState } from 'react';
import Recipe from './Recipe';

const mockRecipes = [
  {
    name: 'Bolo de cenoura',
    ingredients: ['flour', 'carrot', 'eggs', 'sugar'],
    steps: ['xxx', 'yyy', 'zzz'],
  },
  {
    name: 'Bolo de banana',
    ingredients: ['flour', 'banana', 'eggs', 'sugar'],
    steps: ['xxx', 'yyy', 'zzz'],
  },
  {
    name: 'Overnight oats',
    ingredients: ['oats', 'berries', 'chia', 'almond milk', 'carrot'],
    steps: ['xxx', 'yyy', 'zzz'],
  },
  {
    name: 'Chai tea',
    ingredients: ['cinnamon', 'cardamon', 'ginger', 'clove'],
    steps: ['xxx', 'yyy', 'zzz'],
  },
];

const Main = () => {
  const [recipes, setRecipes] = useState(mockRecipes);
  const [keyword, setKeyword] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);
  const [filteredRecipe, setFilteredRecipe] = useState([]);

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearchClick = () => {
    const keywordLowerCase = keyword.toLowerCase();
    const foundRecipes = [];

    recipes.map((recipe) => {
      return Object.keys(recipe).forEach((key) => {
        if (key === 'name') {
          const values = recipe[key].split(' ');
          const valuesLowerCase = [];
          values.forEach((value) => valuesLowerCase.push(value.toLowerCase()));

          if (valuesLowerCase.includes(keywordLowerCase)) {
            foundRecipes.push(recipe);
          }
        }

        if (key === 'ingredients') {
          const values = recipe[key];
          const valuesLowerCase = [];
          values.forEach((value) => valuesLowerCase.push(value.toLowerCase()));

          if (
            valuesLowerCase.includes(keywordLowerCase) &&
            !foundRecipes.includes(recipe)
          ) {
            foundRecipes.push(recipe);
          }
        }
      });
    });

    if (!foundRecipes.length) {
      setShowNotFound(true);
    }
    setIsSearch(true);
    setFilteredRecipe(foundRecipes);
  };

  return (
    <>
      <div style={{ margin: '2rem 0 0 2rem' }}>
        <h2>Search for keyword</h2>
        <input
          onChange={handleSearchChange}
          style={{ minWidth: '30%', padding: '0.25rem' }}
        />
        <button onClick={handleSearchClick} style={{ marginLeft: '1rem' }}>
          Search
        </button>
      </div>
      {keyword !== '' && isSearch && filteredRecipe.length ? (
        <Recipe filteredRecipe={filteredRecipe} />
      ) : null}
      {showNotFound && (
        <h5 style={{ margin: '2rem 0 0 2rem' }}>Recipe not found :/</h5>
      )}
    </>
  );
};

export default Main;
