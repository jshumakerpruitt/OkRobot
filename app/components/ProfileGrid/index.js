/**
*
* ProfileGrid
*
*/

import React from 'react';
import { GridTile } from 'material-ui/GridList';
import ActionIcon from '../ActionIcon';
import randomPic1 from './random1.png';
import randomPic2 from './random2.png';
import randomPic3 from './random3.png';
import randomPic4 from './random4.png';

import styles from './styles.css';

const ProfileGrid = ({
  users,
  submitLike,
}) =>
  <div className={styles.profileGrid}>
    {users.map((user, i) => (
      <div key={i} className={styles.gridTile}>
        <GridTile
          title={user.username}
          actionIcon={<ActionIcon
            onIconClick={() => { submitLike(user.id, !user.liked); }}
            isActive={user.liked}
            activeColor="yellow"
            defaultColor="white"
          />}
        >
          <img
            style={{ width: '100%', height: 'auto' }}
            src={[
              randomPic1,
              randomPic2,
              randomPic3,
              randomPic4,
            ][user.id % 4]}
            alt="profile"
          />
        </GridTile>
      </div>
    ))}
  </div>;

ProfileGrid.propTypes = {
  users: React.PropTypes.array,
  submitLike: React.PropTypes.func,
};

export default ProfileGrid;
