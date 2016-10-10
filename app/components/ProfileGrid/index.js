/**
*
* ProfileGrid
*
*/

import React from 'react';
import { Link } from 'react-router';
import { GridTile } from 'material-ui/GridList';
import ActionIcon from '../ActionIcon';
import randomPic1 from 'random1.png';
import randomPic2 from 'random2.png';
import randomPic3 from 'random3.png';
import randomPic4 from 'random4.png';

const pics = [randomPic1, randomPic2, randomPic3, randomPic4];
import styles from './styles.css';

const ProfileGrid = ({
  users,
  submitLike,
  isLoggedIn,
}) =>
  <div className={styles.profileGrid}>
    {users.map((user, i) => (
      <div key={i} className={styles.gridTile}>
        <GridTile
          title={<Link className={styles.link} to={`profile/${user.id}`}>{user.username}</Link>}
          actionIcon={isLoggedIn ? <ActionIcon
            onIconClick={() => { submitLike(user.id, !user.liked); }}
            isActive={user.liked}
            activeColor="yellow"
            defaultColor="white"
          /> :
            <div></div>
                     }
        >
          <Link className={styles.link} to={`profile/${user.id}`}>
            <img
              style={{ width: '100%', height: 'auto' }}
              src={pics[user.id % 4]}
              alt="profile"
            />
          </Link>
        </GridTile>
      </div>
    ))}
  </div>;

ProfileGrid.propTypes = {
  users: React.PropTypes.array,
  submitLike: React.PropTypes.func,
  isLoggedIn: React.PropTypes.func,
};

export default ProfileGrid;
