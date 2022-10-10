import React from 'react';
import {Container} from './styles';
import {StyleSheet} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

export const EntrySummaryChart = ({data}) => {
  const chartData = data.map(({category, amount}) => ({
    key: category.id,
    value: amount,
    svg: {
      fill: category.color,
    },
    arc: {
      outerRadius: '100%',
      innerRadius: '80%',
    },
  }));

  return (
    <Container>
      <PieChart style={styles.chart} data={chartData} />
    </Container>
  );
};

const styles = StyleSheet.create({
  chart: {
    height: 100,
  },
});
