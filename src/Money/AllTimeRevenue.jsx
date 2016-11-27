import React from 'react';
import Loader from '../Loader';
import {
  VictoryLine, VictoryChart, VictoryAxis
} from 'victory';
import numberToMoney from '../helpers/numberToMoney';

const dateToString = epoch => {
  const [, month, , year] = (new Date(epoch)).toDateString().split(' ');
  return `${month} ${year}`;
};

const total = data =>
  data.in.concat(data.out).sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  ).reduce((acc, datum, idx) => {
    acc.push({
      x: datum.date,
      y: datum.amount + (acc[idx - 1] ? acc[idx - 1].y : 0),
    });
    return acc;
  }, []);

const renderChart = data => {
  if (!data) return <Loader />;
  return (
    <VictoryChart padding={{left: 15, top: 0, right: 15, bottom: 10}}>
      <VictoryAxis tickFormat={dateToString} />
      <VictoryAxis dependentAxis tickFormat={numberToMoney} />
      <VictoryLine
        data={total(data)}
        style={{
          data: {stroke: "tomato", strokeWidth: 4},
          labels: {fontSize: 12},
          parent: {border: "1px solid #ccc"}
        }}
      />
    </VictoryChart>
  );
}

export default ({data}) => {
  return (
    <div className="center">
      {renderChart(data)}
      <p>Income &amp; Costs (not counting labor)</p>
    </div>
  );
}
