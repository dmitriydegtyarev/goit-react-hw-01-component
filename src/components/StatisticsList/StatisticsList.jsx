import PropTypes from 'prop-types';

import { StatisticsElement } from 'components/StatisticsElement/StatisticsElement';

export const StatisticsList = ({ statisticData }) => {
  return (
    <ul className="stat-list">
      {statisticData.map(stat => (
        <li key={stat.id} className="item">
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
