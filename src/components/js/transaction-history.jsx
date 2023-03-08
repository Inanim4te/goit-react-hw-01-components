import PropTypes from 'prop-types';
import css from '../css/transaction-history.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead className={css.tableHead}>
      <tr className={css.tableHeadItem}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={css.tableBody}>
      {items.map((el, index) => (
        <tr
          key={el.id}
          className={css.tableBodyItem}
          style={index % 2 ? null : { backgroundColor: 'white' }}
        >
          <td>{el.type}</td>
          <td>{el.amount}</td>
          <td>{el.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
