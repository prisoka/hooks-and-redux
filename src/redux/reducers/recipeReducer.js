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
      return '';
    case ACTIONS.SEARCH_RECIPE:
      return '';
    default:
      return state;
  }
};

export default recipeReducer;
