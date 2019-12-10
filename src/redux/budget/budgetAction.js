import types from '../types';

export const saveBudgetAction = budget => ({
  type: types.SAVE_BUDGET,
  payload: {
    budget,
  },
});

export const addExpenseAction = expense => ({
  type: types.ADD_EXPENSE,
  payload: {
    expense,
  },
});

export const deleteExpenseAction = expenseId => ({
  type: types.DELETE_EXPENSE,
  payload: {
    id: expenseId,
  },
});
