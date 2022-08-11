import css from './Profile.module.css';
import{ProfilleDescription} from './ProfileDescription';
import {ProfileStats} from './ProfileStats';

export const Profile = (props) => {
    return (
        <div className={css.profile}>
            <ProfilleDescription
                username={props.username}
                tag={props.tag}
                location={props.location}
                avatar={props.avatar}
            />
            <ProfileStats stats={props.stats}/>
        </div>
    );
}