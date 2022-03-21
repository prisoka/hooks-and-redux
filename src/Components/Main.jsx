import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Recipe from './Recipe';

const Main = () => {
  const dispatch = useDispatch();

  const keyword = useSelector((state) => state.recipeReducer.keyword);
  const isSearch = useSelector((state) => state.recipeReducer.isSearch);
  const showNotFound = useSelector((state) => state.recipeReducer.showNotFound);
  const filteredRecipe = useSelector(
    (state) => state.recipeReducer.filteredRecipe
  );

  const handleSearchChange = (e) => {
    const newKeyword = e.target.value;
    dispatch({ type: 'set_search_keyword', payload: newKeyword });
  };

  const handleSearchClick = () => {
    dispatch({
      type: 'search_recipe',
      payload: { isSearch: true },
    });
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
