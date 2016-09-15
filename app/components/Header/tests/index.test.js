import Header from '../index';
import messages from '../messages';
import AppBar from 'material-ui/AppBar';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Header />', () => {
  it('should have the app title', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent.contains(
      <AppBar title={messages.title} />
    )).toEqual(true);
  });
});
