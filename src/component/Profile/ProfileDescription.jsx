import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const ProfilleDescription = ({username, tag, location, avatar}) => {
    return(
        <div className={css.description}>
            <img src={avatar} alt={username} className={css.avatar}/>
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
    );
}

ProfilleDescription.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};