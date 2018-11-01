import React from 'react';
import Loader from '../Loader';
import {
  VictoryLine, VictoryChart, VictoryAxis
} from 'victory';
import dateToString from '../helpers/dateToString';

const accumulate = users =>
  users.reduce((acc, user, idx) => {
    acc.push({
      x: user.created_at,
      y: 1 + (acc[idx - 1] ? acc[idx - 1].y : 0),
    });
    return acc;
  }, []);

export default ({data}) => {
  if (!data) return <Loader />;

  const accumulated = accumulate(data.users);

  return (
    <div>
      <h3>Here's how we got {data.count} people signed up for Entire.Life:</h3>
      <VictoryChart padding={{left: 50, top: 10, right: 25, bottom: 40}}>
        <VictoryLine
          data={accumulated}
          style={{
            data: {stroke: "#0CBABA", strokeWidth: 4},
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
        <VictoryAxis dependentAxis />
      </VictoryChart>
      <p>How to read this graph:</p>
      <ul>
        <li>The modest increase in April 2016 was when a friend posted Entire.Life to a Reddit board (apparently not the <em>correct</em> Reddit board, because the post was soon taken down, which is why the jump ends abruptly)</li>
        <li>The giant jump upward in June 2016 was when a kind soul posted us to <a href="https://www.producthunt.com/posts/entire-life">Product Hunt</a> 🙏🏼</li>
        <li>The jump starting on 1 January 2017 seems mostly caused by a post to Reddit, and maybe also just people who set some New Year's resolutions to live more intentionally</li>
      </ul>
      <p>
        <strong>Note</strong>: When you close your account, we actually, truly, and immediately delete all evidence of it from our system. It's like you never signed up. So this chart only trends upwards, because that's all the data we have (for now).
      </p>
    </div>
  );
};
