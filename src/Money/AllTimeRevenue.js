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

const accumulate = data =>
  data.in.concat(data.out).sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  ).reduce((acc, datum, idx) => {
    acc.push({
      x: datum.date,
      y: datum.amount + (acc[idx - 1] ? acc[idx - 1].y : 0),
    });
    return acc;
  }, []);

export default ({data}) => {
  if (!data) return <Loader />;

  const accumulated = accumulate(data);
  const total = accumulated[accumulated.length - 1].y;

  return (
    <section>
      <h2>
        Here's how we
        {total < 0 ? ' lost ' : ' made '}
        ${Math.round(Math.abs(total))} over the life of the business:
      </h2>
      <VictoryChart padding={{left: 15, top: 0, right: 25, bottom: 10}}>
        <VictoryLine
          data={accumulated}
          style={{
            data: {stroke: "tomato", strokeWidth: 4},
            labels: {fontSize: 12},
            parent: {border: "1px solid #ccc"},
          }}
          animate={{onEnter: {duration: 2000}}}
        />
        <VictoryAxis tickFormat={dateToString} style={{ grid: {
          stroke: "#ECEFF1",
          strokeDasharray: "10, 5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }}}/>
        <VictoryAxis dependentAxis tickFormat={numberToMoney} />
      </VictoryChart>
      <p>How to read this graph:</p>
      <ul>
        <li>The starting downslope is the cost of hosting our API (the behind-the-scenes “brain” of our app)</li>
        <li>The downturn in ~Feb 2016 is the cost of hosting our UI (the stuff you see, click on, and interact with)</li>
        <li>The sharper downturn in July 2016 is the cost of a bigger database (more users = no more free-tier database)</li>
        <li>The up-ticks are when lovely people <a href="https://entire.life/emporium">paid for add-ons</a></li>
      </ul>
      <p>
        <strong>Note</strong>: The cost of labor is <strong>NOT</strong> factored in here.
      </p>
    </section>
  );
}
