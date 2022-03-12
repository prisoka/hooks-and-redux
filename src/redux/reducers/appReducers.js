import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';

const appReducers = combineReducers({ recipeReducer });

export default appReducers;
