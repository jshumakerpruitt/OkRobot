/**
*
* UserFilter
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

import styles from './styles.css';

// const nameField = ()
const ages = [];
for (let i = 18; i < 111; i++) {
  ages.push(<MenuItem key={i} value={i} primaryText={String(i)} />);
}

const genders =
  ['male', 'female', 'trans', 'other'].map((g, i) =>
    <MenuItem key={i} value={g} primaryText={g} />
  );

const selectField = (label, items) => (field) =>
  <SelectField
    value={field.input.value}
    style={{ maxWidth: 'calc(100vw - 20px)' }}
    style={{ width: '100%' }}
    floatingLabelText={label}
    onChange={(event, i, v) => field.input.onChange(v)}
  >
    {items}
  </SelectField>;

const UserFilter = ({ handleSubmit, fetchUsers }) =>
  <div className={styles.userFilter}>
    <form
      onSubmit={handleSubmit(data => fetchUsers(data.toJS()))}
      className={styles.filterForm}
    >
      <Field
        name="gender"
        component={selectField('Gender', genders)}
      />
      <Field
        name="minAge"
        component={selectField('Min Age', ages)}
      />
      <Field
        name="maxAge"
        component={selectField('Max Age', ages)}
      />
      <RaisedButton
        type="submit"
        className={styles.button}
        primary
        label="Search"
        style={{ width: '100%' }}
      />
    </form>
  </div>;

UserFilter.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  fetchUsers: React.PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'userFilter',
})(UserFilter);
