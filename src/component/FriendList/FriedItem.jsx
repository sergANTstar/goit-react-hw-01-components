
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendItem = ({ friend }) => {
  return (
    <li className={css.item} key={friend.id}>
      <span
        className={friend.isOnline ? css.itemOnline : css.itemOffline}
      ></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};