/*
 *
 * ProfilePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import {
  selectUser,
  selectUsers,
  selectProfilePage,
} from './selectors';
import styles from './styles.css';
import * as actions from './actions';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton/IconButton';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import IconMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import IconStar from 'material-ui/svg-icons/toggle/star';
import IconMessage from 'material-ui/svg-icons/communication/message';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

export class ProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const id = this.props.params.id;
    if (!this.props.users[id]) {
      this.props.fetchUser(id);
    }
  }
  render() {
    const id = this.props.params.id;
    this.user = this.props.users[id];
    const user = this.user || {};
    const likeColor = user.liked ? 'yellow' : '#FFFFFF';

    return (
      <div className={styles.profilePage}>
        <Helmet
          title="ProfilePage"
          meta={[
            { name: 'description', content: 'Description of ProfilePage' },
          ]}
        />
        <div className={styles.bannerWrapper}>
          <div className={styles.banner}>
            <div className={styles.details}>
              <div className={styles.avatarWrapper}>
                <img
                  className={styles.avatar}
                  src={user.avatar}
                  alt="profile"
                />
              </div>
              <div className={styles.detailsText}>
                <div className={styles.detailRow}>
                  <h2>{user.username}</h2>
                </div>
                <div className={styles.detailRow}>
                  <span>{user.age}</span>
                  <span>&middot;</span>
                  <span>Vancouver, BC</span>
                </div>
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.actionRow}>
                <IconMenu
                  iconButtonElement={<IconButton><IconMoreVert color="#FFF" /></IconButton>}
                  anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                  targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                  <MenuItem primaryText="Refresh" />
                  <MenuItem primaryText="Send feedback" />
                  <MenuItem primaryText="Settings" />
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Sign out" />
                </IconMenu>
                <FlatButton
                  style={{ marginRight: '5px', color: likeColor }}
                  backgroundColor="#0c97eb"
                  hoverColor="#0B58E1"
                  label=""
                  secondary
                  icon={<IconStar style={{ color: 'yellow' }} />}
                  onClick={() => {
                    this.props.submitLike(user.id, !user.liked);
                  }}
                />
                <Link to={`/chat/${user.id}`}>
                  <FlatButton
                    style={{ marginRight: '2px', color: '#FFFFFF', border: '1px solid #FFFFFF' }}
                    label="Message"
                    secondary
                    icon={<IconMessage style={{ color: '#FFFFFF' }} />}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stretchY}>
          <div className={styles.mainBody}>
            <div className={styles.columnLeft}>
              <div className={styles.profileSummary}>
                <section className={styles.summarySection}>
                  <h3 className={styles.subheading}>About Me</h3>
                  <p>
      Phasellus ac nisl at elit vulputate malesuada. Duis eleifend euismod quam sodales hendrerit. Sed imperdiet congue odio vitae commodo. Mauris mauris velit, porta sit amet pellentesque nec, ultrices vel enim. Pellentesque et lacus urna. Mauris sem metus, interdum eu ex a, dignissim dapibus risus. Nunc bibendum massa maximus arcu lacinia, quis sagittis elit fringilla. Nullam eu viverra turpis. Sed placerat sed massa pharetra sollicitudin. Curabitur venenatis quam in tortor efficitur, id eleifend eros fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae
                  </p>
                </section>
                <section className={styles.summarySection}>
                  <h3 className={styles.subheading}>My Hobbies</h3>
                  <p>
  Curabitur ornare, sem sit amet interdum pulvinar, tellus augue dapibus est, vel viverra enim erat nec lectus. Pellentesque sollicitudin, ante vitae aliquam condimentum, mi sem molestie sem, ut vestibulum sem arcu id felis.
                  </p>
                </section>
                <section className={styles.summarySection}>
                  <h3 className={styles.subheading}>Something Else</h3>
                  <p>
  Curabitur ornare, sem sit amet interdum pulvinar, tellus augue dapibus est, vel viverra enim erat nec lectus. Pellentesque sollicitudin, ante vitae aliquam condimentum, mi sem molestie sem, ut vestibulum sem arcu id felis.
                  </p>
                </section>
              </div>
            </div>
            <div className={styles.columnRight}>
              <List>
                <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
              </List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  user: React.PropTypes.object.isRequired,
  users: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired,
  fetchUser: React.PropTypes.func.isRequired,
  submitLike: React.PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser(),
  users: selectUsers(),
  all: selectProfilePage(),
});

export default connect(mapStateToProps, actions)(ProfilePage);
