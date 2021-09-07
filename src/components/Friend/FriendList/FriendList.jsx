import PropTypes from 'prop-types';
import { FriendListItem } from 'components/Friend/FriendListItem';

import css from 'components/Friend/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  statisticData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
