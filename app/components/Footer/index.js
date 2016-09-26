import React from 'react';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconHistory from 'material-ui/svg-icons/action/history';
import IconFavorite from 'material-ui/svg-icons/action/favorite-border';


import styles from './styles.css';


const Footer = () =>
  <footer className={styles.footer}>
    <div className={styles.buttonGroup} >
      <IconHistory style={{ color: '#fff' }} />
      <IconFavorite style={{ color: '#fff' }} />
      <IconLocationOn style={{ color: '#fff' }} />
    </div>
  </footer>;

export default Footer;
