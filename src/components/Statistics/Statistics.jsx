import PropTypes from 'prop-types';

import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import statisticData from 'data/statisticalData.json';

import css from 'components/Statistics/Statistics.module.css';

const defaultTitle = 'Upload stats';

export const Statistics = ({ title = defaultTitle }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <StatisticsList statisticData={statisticData} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
