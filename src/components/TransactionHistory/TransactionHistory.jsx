import { TransactionHistoryList } from 'components/TransactionHistoryList/TransactionHistoryList';

import transactions from 'data/transactions.json';

export const TransactionHistory = () => {
  return (
    <section>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <TransactionHistoryList items={transactions} />
      </table>
    </section>
  );
};
