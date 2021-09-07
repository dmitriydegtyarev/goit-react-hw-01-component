import { Container } from 'components/Container';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { Friend } from 'components/Friend';
import { TransactionHistory } from 'components/TransactionHistory';

import user from 'data/user.json';

export const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
      <Friend />
      <TransactionHistory />
    </Container>
  );
};
