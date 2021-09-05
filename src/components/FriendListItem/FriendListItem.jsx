import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const nameOfClass = isOnline ? 'online' : 'offline';
  return (
    <>
      <span className={`${nameOfClass}`}>{isOnline ? 'Green' : 'Red'}</span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
