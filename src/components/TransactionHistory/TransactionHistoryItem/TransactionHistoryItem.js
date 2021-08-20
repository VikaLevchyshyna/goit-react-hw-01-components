import PropTypes from 'prop-types';

import s from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
export default TransactionHistoryItem;
