import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const ProfileStats = ({stats: {followers, views, likes}}) => {
    return (
        <div>
            <ul className={css.stats}>
                <li className={css.stats__item}>
                    <p className={css.label}>Folowers</p>
                    <p className={css.quantity}>{followers}</p>
                </li>
                <li className={css.stats__item}>
                    <p className={css.label}>Views</p>
                    <p className={css.quantity}>{views}</p>
                </li>
                 <li className={css.stats__item}>
                    <p className={css.label}>Likes</p>
                    <p className={css.quantity}>{likes}</p>
                </li>
            </ul>
        </div>
    );
}

ProfileStats.propTypes ={
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}
