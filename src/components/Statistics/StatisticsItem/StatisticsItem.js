import PropTypes from 'prop-types';

import s from './StatisticsItem.module.css';

function getRandomColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomColor = () => {
  const colorValue = `${getRandomColor(0, 255)},${getRandomColor(
    0,
    255,
  )},${getRandomColor(0, 255)}, 0.4`;

  return {
    backgroundColor: `rgba(${colorValue})`,
  };
};

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className={s.item} style={randomColor()}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatisticsItem;
