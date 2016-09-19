/**
*
* ProfileGrid
*
*/

import React from 'react';
import { GridTile } from 'material-ui/GridList';
import ActionIcon from '../ActionIcon';

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
          <img style={{ width: '100%', height: 'auto' }} src={user.avatar} alt="profile" />
        </GridTile>
      </div>
    ))}
  </div>;

ProfileGrid.propTypes = {
  users: React.PropTypes.array,
  submitLike: React.PropTypes.func,
};

export default ProfileGrid;
