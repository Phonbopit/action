import React, {PropTypes} from 'react';
import look, {StyleSheet} from 'react-look';
import {push} from 'react-router-redux';
import theme from 'universal/styles/theme';
import FontAwesome from 'react-fontawesome';

let styles = {};


const UserHub = (props) => {
  const {email, profile: {preferredName}} = props.user;
  const avatar = props.user.avatar || 'https://placekitten.com/g/44/44';

  const onSettingsClick = (event) => {
    const {dispatch} = props;
    event.preventDefault();
    dispatch(push('/me/settings'));
  };

  return (
    <div className={styles.root}>
      <img alt="Me" className={styles.avatar} src={avatar} />
      <div className={styles.info}>
        <div className={styles.name}>{preferredName}</div>
        <div className={styles.email}>{email}</div>
      </div>
      <div className={styles.settings}>
        <div className={styles.settingsIcon}>
          <FontAwesome name="cog" onClick={(e) => onSettingsClick(e)} />
        </div>
      </div>
    </div>
  );
};

UserHub.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object
};

styles = StyleSheet.create({
  root: {
    borderBottom: '2px solid rgba(0, 0, 0, .10)',
    display: 'flex !important',
    minHeight: '4.875rem',
    padding: '1rem 0 1rem 1rem',
    width: '100%'
  },

  avatar: {
    borderRadius: '100%',
    height: '2.75rem',
    width: '2.75rem'
  },

  info: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '1rem'
  },

  name: {
    fontSize: theme.typography.s5
  },

  email: {
    fontSize: theme.typography.s2,
    marginTop: '.125rem'
  },

  settings: {
    alignItems: 'center',
    fontSize: theme.typography.s3,
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  },

  settingsIcon: {
    fontSize: '14px',
    height: '14px',
    lineHeight: '14px',
    textAlign: 'center',
    width: '14px'
  }
});

export default look(UserHub);
