/**
*
* ProfileGrid
*
*/

import React from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import styles from './styles.css';

const ProfileGrid = ({ users }) => {
  const actionIcon = (
    <IconButton>
      <StarBorder color="white" />
    </IconButton>
  );
  return (
    <div className={styles.profileGrid}>
      {users.map((user, i) => (
        <div key={i} className={styles.gridTile}>
          <GridTile
            title={user.username}
            actionIcon={actionIcon}
          >
            <img style={{ width: '100%', height: 'auto' }} src={user.avatar} alt="profile" />
          </GridTile>
        </div>
      ))}
    </div>
  );
};

ProfileGrid.propTypes = {
  users: React.PropTypes.array,
};

export default ProfileGrid;
