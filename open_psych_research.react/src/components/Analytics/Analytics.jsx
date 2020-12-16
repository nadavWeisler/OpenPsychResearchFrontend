import React from 'react';
import { CarouselPaper } from "./../DesignedComponents/Paper";
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis, } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const Analytics = ({prompt, answers}) => {
  return (
    <CarouselPaper>
      <Chart data={answers}>
        <ArgumentAxis />
        <ValueAxis max={3} />
        <BarSeries valueField="population" argumentField="year" />
        <Title text={prompt} />
        <Animation />
      </Chart>
    </CarouselPaper>
  );
}

export default Analytics;
