import css from './Profile.module.css';
import{ProfileDescription} from './ProfileDescription';
import {ProfileStats} from './ProfileStats';

export const Profile = (props) => {
    return (
        <div className={css.profile}>
            <ProfileDescription
                username={props.username}
                tag={props.tag}
                location={props.location}
                avatar={props.avatar}
            />
            <ProfileStats stats={props.stats}/>
        </div>
    );
}