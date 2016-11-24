import React from 'react';
import Loader from '../Loader';
import {
  VictoryLine, VictoryChart, VictoryAxis
} from 'victory';

const dateToString = epoch => {
  const [, month, , year] = (new Date(epoch)).toDateString().split(' ');
  return `${month} ${year}`;
};

const numberToMoney = num => `${num < 0 && '-'}$${Math.abs(num)}`

export default ({data}) => {
  if (!data) return <Loader />;
  return (
    <VictoryChart padding={{left: 15, top: 0, right: 0, bottom: 0}}>
      <VictoryAxis tickFormat={dateToString} />
      <VictoryAxis dependentAxis tickFormat={numberToMoney} />
      <VictoryLine
        data={data}
        style={{
          data: {stroke: "tomato"},
          labels: {fontSize: 12},
          parent: {border: "1px solid #ccc"}
        }}
      />
    </VictoryChart>
  );
}
