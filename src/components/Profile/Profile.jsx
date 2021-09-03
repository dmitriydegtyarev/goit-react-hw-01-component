import PropTypes from 'prop-types';

import css from 'components/Profile/Profile.module.css';

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <section>
      <div className={css.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={css.avatar}
          width="140px"
          height="140px"
        />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
