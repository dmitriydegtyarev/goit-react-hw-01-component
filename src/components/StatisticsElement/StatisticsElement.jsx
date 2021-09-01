import PropTypes from 'prop-types';

export const StatisticsElement = ({ label, percentage }) => {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
};

StatisticsElement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
