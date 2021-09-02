import PropTypes from 'prop-types';

import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';

export const TransactionHistoryList = ({ items }) => {
  return (
    <>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionHistoryItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </>
  );
};

TransactionHistoryList.propTypes = {
  statisticData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
