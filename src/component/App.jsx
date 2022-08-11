import { Profile } from "./Profile/Profile";


//import data from '../data/data.json';
import profile from '../data/user.json'
//import friends from '../data/friends.json';
//import transactions from '../data/transactions.json';

export const App =() => {
  return (
    <div>
      <Profile
      username={profile.username}
      tag={profile.tag}
      location={profile.location}
      avatars={profile.avatar}
      stats={profile.stats}
      />
  
    </div>
  );
};
    //<Statistics title="Upload stats" stats={data} />
      //<FriendList Friends={friends} />
      //<TransactionHistory items={transactions} />