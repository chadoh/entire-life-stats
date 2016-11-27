import React from 'react';
import Loader from '../../Loader';
import numberToMoney from '../../helpers/numberToMoney';
import './GrossRevenue.css';

const sum = data =>
  data.in.concat(data.out)
  .reduce((total, datum) => total + datum.amount, 0);

const renderTotal = data => {
  if (!data) return <Loader />;

  const total = Math.round(sum(data) * 100) / 100;

  return (
    <strong className="GrossRevenue-total">
      {numberToMoney(total)}
    </strong>
  );
}
export default ({data}) => {
  return (
    <div className="center">
      {renderTotal(data)}
      <p>
        Money In + Money Out
      </p>
    </div>
  );
}
