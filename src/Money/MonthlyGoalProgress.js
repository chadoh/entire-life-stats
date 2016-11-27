import React from 'react';
import Loader from '../Loader';
import Meter from '../Meter';

const MONTHLY_GOAL = 30;

const MONTHS = [
  "January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const CURRENT_MONTH = MONTHS[(new Date()).getMonth()];

const totalForMonth = data => {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth());

  return data.in
    .filter(datum => datum.date >= startOfMonth)
    .reduce((total, datum) => total + datum.amount, 0);
}

const renderMeter = data => {
  if (!data) return <Loader />;

  const total = totalForMonth(data);

  return (
    <div>
      <Meter
        low={MONTHLY_GOAL / 2}
        max={MONTHLY_GOAL}
        value={total}
        title="$"
      />
      <p>{Math.round(100 * total / MONTHLY_GOAL)}% of ${MONTHLY_GOAL}</p>
    </div>
  );
}

export default ({data}) => {
  return (
    <div className="center">
      <p>{CURRENT_MONTH} Goal:</p>
      {renderMeter(data)}
    </div>
  );
}
