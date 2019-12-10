import types from '../types';

export const saveBudgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.SAVE_BUDGET:
      return payload.budget;

    default:
      return state;
  }
};

export const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_EXPENSE:
      return [payload.expense, ...state];

    case types.DELETE_EXPENSE:
      return state.filter(el => el.id !== payload.id);

    default:
      return state;
  }
};
