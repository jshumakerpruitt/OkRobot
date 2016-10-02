/**
*
* ActionIcon
*
*/

import React from 'react';

import IconButton from 'material-ui/IconButton';
import Star from 'material-ui/svg-icons/toggle/star';

// import styles from './styles.css';

const ActionIcon = ({
  onIconClick,
  isActive,
  activeColor,
  defaultColor,
}) =>
  <IconButton onClick={onIconClick} >
    <Star
      color={isActive ? activeColor : defaultColor}
    />
  </IconButton>;

ActionIcon.propTypes = {
  onIconClick: React.PropTypes.func,
  isActive: React.PropTypes.bool,
  activeColor: React.PropTypes.string,
  defaultColor: React.PropTypes.string,
};
export default ActionIcon;
