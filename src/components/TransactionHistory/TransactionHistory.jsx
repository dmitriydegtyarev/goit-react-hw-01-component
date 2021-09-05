import { TransactionHistoryList } from 'components/TransactionHistoryList/TransactionHistoryList';

import transactions from 'data/transactions.json';

import css from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = () => {
  return (
    <section className={css.transactionsSection}>
      <table className={css.transactionHistory}>
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
