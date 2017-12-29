import React from 'react';
import Loader from '../Loader';
import {
  VictoryScatter, VictoryChart, VictoryAxis
} from 'victory';

const accumulate = data =>
  data.map(item => ({
    x: item.users_with,
    y: item.number_of_events,
  }))

export default ({data}) => {
  if (!data) return <Loader />;

  const accumulated = accumulate(data);

  return (
    <section>
      <h3>
        Here's how many events our users have added to their charts.
      </h3>
      <VictoryChart padding={{left: 75, top: 0, right: 0, bottom: 75}}>
        <VictoryScatter
          data={accumulated}
          style={{
            data: {stroke: "tomato", strokeWidth: 4},
            labels: {fontSize: 12},
            parent: {border: "1px solid #ccc"},
          }}
        />
        <VictoryAxis label="Number of Users" style={{ grid: {
          stroke: "#ECEFF1",
        }}}/>
        <VictoryAxis dependentAxis label="Number of Events" />
      </VictoryChart>
    </section>
  );
}
