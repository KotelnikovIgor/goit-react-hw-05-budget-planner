export const getSelectBudget = state => state.budget;

export const getExpenses = state => state.expenses;

export const selectTotalExpenses = state => {
  const value = getExpenses(state);
  return value.reduce((acc, el) => acc + Number(el.amount), 0);
};

export const selectCalculateBalance = state =>
  getSelectBudget(state) - selectTotalExpenses(state);
