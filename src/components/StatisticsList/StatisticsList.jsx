import PropTypes from 'prop-types';

import { StatisticsElement } from 'components/StatisticsElement/StatisticsElement';
import { generateRandomColor } from 'utils/generateRandomColor';

import css from 'components/StatisticsList/StatisticsList.module.css';

export const StatisticsList = ({ statisticData }) => {
  return (
    <ul className={css.statList}>
      {statisticData.map(stat => (
        <li
          key={stat.id}
          className={css.item}
          style={{ backgroundColor: generateRandomColor() }}
        >
          <StatisticsElement label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  statisticData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
