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

const initialState = {
  recipes: mockRecipes,
  keyword: '',
  isSearch: false,
  showNotFound: false,
  filteredRecipe: [],
};

const ACTIONS = {
  SET_SEARCH_KEYWORD: 'set_search_keyword',
  SEARCH_RECIPE: 'search_recipe',
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_KEYWORD:
      const newKeyword = action.payload;
      return { ...state, keyword: newKeyword };
    case ACTIONS.SEARCH_RECIPE:
      const newIsSearch = action.payload.isSearch;
      const keywordLowerCase = state.keyword.toLowerCase();
      const foundRecipes = [];
      let newNotFound = false;

      state.recipes.map((recipe) => {
        return Object.keys(recipe).forEach((key) => {
          if (key === 'name') {
            const values = recipe[key].split(' ');
            const valuesLowerCase = [];
            values.forEach((value) =>
              valuesLowerCase.push(value.toLowerCase())
            );

            if (valuesLowerCase.includes(keywordLowerCase)) {
              foundRecipes.push(recipe);
            }
          }

          if (key === 'ingredients') {
            const values = recipe[key];
            const valuesLowerCase = [];
            values.forEach((value) =>
              valuesLowerCase.push(value.toLowerCase())
            );

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
        newNotFound = true;
      }

      return {
        ...state,
        isSearch: newIsSearch,
        showNotFound: newNotFound,
        filteredRecipe: foundRecipes,
      };
    default:
      return state;
  }
};

export default recipeReducer;
