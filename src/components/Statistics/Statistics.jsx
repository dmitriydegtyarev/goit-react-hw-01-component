import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import statisticData from '../../data/statisticalData.json';

export const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <StatisticsList statisticData={statisticData} />
    </section>
  );
};
