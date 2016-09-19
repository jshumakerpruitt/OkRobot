/**
*
* ActionIcon
*
*/

import React from 'react';

import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// import styles from './styles.css';

const ActionIcon = ({
  onIconClick,
  isActive,
  activeColor,
  defaultColor,
}) =>
  <IconButton onClick={onIconClick} >
    <StarBorder
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
