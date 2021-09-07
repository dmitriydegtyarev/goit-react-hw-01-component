import PropTypes from 'prop-types';

import css from 'components/Statistics/StatisticsElement/StatisticsElement.module.css';

export const StatisticsElement = ({ label, percentage }) => {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
};

StatisticsElement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
