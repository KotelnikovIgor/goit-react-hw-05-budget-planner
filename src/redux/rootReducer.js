import { combineReducers } from 'redux';
import {
  saveBudgetReducer,
  expensesReducer,
} from '../redux/budget/budgetReducer';

const rootReducer = combineReducers({
  budget: saveBudgetReducer,
  expenses: expensesReducer,
});

export default rootReducer;
