import React from 'react';
import styled from 'styled-components';
import Value from './Value';
import { connect } from 'react-redux';
import {
  getSelectBudget,
  selectTotalExpenses,
  selectCalculateBalance,
} from '../redux/budget/budgetSelectors';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

const mapStateToProps = store => ({
  budget: getSelectBudget(store),
  balance: selectCalculateBalance(store),
  expenses: selectTotalExpenses(store),
});

export default connect(mapStateToProps, null)(Values);
