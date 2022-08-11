import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statsList}>
                {stats.map(stat => (
                    <StatisticsItem key={stat.id} stat={stat} />
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
};