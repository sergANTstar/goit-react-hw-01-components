
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const StatisticsItem = ({stat}) => {
    return (
        <li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
        </li>
    );
};

StatisticsItem.propTypes ={
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
           label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}