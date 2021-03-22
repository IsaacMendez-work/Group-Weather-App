import React from 'react';
import ReactDOM from 'react-dom';

function Weekly(props) {
  return <h1>insert weekly</h1>;
}

function Daily(props) {
  return <h1>insert daily</h1>;
}

function Weather(props) {
  const isWeeklySelected = props.isWeeklySelected;
  if (isWeeklySelected) {
    return <Weekly />;
  }
  return <Daily />;
}

ReactDOM.render(
  <Weather isWeeklySelected={false} />,
  document.getElementById('root')
);

export default Weather;