import Header from '../index';
import AppBar from 'material-ui/AppBar';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Header />', () => {
  let handler = null;
  let renderedComponent = null;

  beforeEach(() => {
    handler = expect.createSpy();
    renderedComponent = shallow(
      <Header
        onOpenClick={handler}
        isLoggedIn
      />
    );
  });

  it('should have the app title', () => {
    expect(renderedComponent.find('AppBar').length)
      .toEqual(1);
  });

  it('should pass the click handler to the AppBar', () => {
    expect(renderedComponent.find(AppBar)
                            .prop('onLeftIconButtonTouchTap'))
    .toEqual(handler);
  });
});
