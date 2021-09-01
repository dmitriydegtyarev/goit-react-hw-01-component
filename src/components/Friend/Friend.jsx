import friends from '../../data/friends.json';

import { FriendList } from 'components/FriendList/FriendList';

export const Friend = () => {
  return (
    <>
      <FriendList friends={friends} />
    </>
  );
};
