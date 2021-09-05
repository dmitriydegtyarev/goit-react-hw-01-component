import PropTypes from 'prop-types';

import css from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const nameOfClass = isOnline ? `${css.online}` : `${css.offline}`;
  return (
    <>
      <span className={`${css.status} ${nameOfClass}`}></span>
      <img className={css.avatar} src={avatar} alt="" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
