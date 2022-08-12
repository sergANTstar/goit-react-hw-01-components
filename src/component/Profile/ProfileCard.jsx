import css from './Profile.module.css';
import { ProfileDescription } from './ProfileDescription';
import { ProfileStats } from './ProfileStats';

export const  ProfileCard = (user) => {
  return (
    <div className={css.profile}>
      <ProfileDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <ProfileStats stats={user.stats} />
    </div>
  );
}