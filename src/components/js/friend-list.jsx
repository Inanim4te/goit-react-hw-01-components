import PropTypes from 'prop-types';
import css from '../css/friend-list.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(el => (
      <li key={el.id} className={css.item}>
        <span className={el.isOnline ? css.statusOnline : css.statusOffline}></span>
        <img className={css.avatar} src={el.avatar} alt="User avatar" width="48" />
        <p className={css.name}>{el.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
