import React from 'react';
import Loader from '../Loader';
import Meter from '../Meter';

const ANNUAL_GOAL = 360;

const totalForYear = data => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear());

  return data.in
    .filter(datum => datum.date >= startOfYear)
    .reduce((total, datum) => total + datum.amount, 0);
}

const renderMeter = data => {
  if (!data) return <Loader />;

  const total = totalForYear(data);
  const year = (new Date()).getFullYear();

  return (
    <section>
      <h2>Here's how we're doing on our goal to make ${ANNUAL_GOAL} in {year}:</h2>
      <Meter
        low={ANNUAL_GOAL / 2}
        max={ANNUAL_GOAL}
        value={total}
        title="$"
        text={
          `$${total}
          (${Math.round(100 * total / ANNUAL_GOAL)}% there!)`
        }
      />
      <p>
        Here's how we'd use the annual money we raise:
        <ul>
          <li><strong>$360 &ndash; Entire.Life Grows Old With You</strong>: All expenses covered. Entire.Life will pay for itself, so it can run as-is for a long time.</li>
          <li><strong>$5,000 &ndash; Faster Improvements</strong>: We can afford to pay a contractor for occassional small jobs.</li>
          <li><strong>$50,000 &ndash; Legit Business</strong>: It makes sense for one person to work on Entire.Life full-time.</li>
        </ul>
      </p>
    </section>
  );
}

export default ({data}) => {
  return (
    <div className="center">
      {renderMeter(data)}
    </div>
  );
}
