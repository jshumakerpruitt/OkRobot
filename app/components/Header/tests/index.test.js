import Header from '../index';
import messages from '../messages';
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
      <Header onOpenClick={handler} />
    );
  });

  it('should have the app title', () => {
    expect(renderedComponent.contains(
      <AppBar
        title={messages.title}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={handler}
      />
    )).toEqual(true);
  });

  it('should pass the click handler to the AppBar', () => {
    expect(renderedComponent.find(AppBar)
                            .prop('onLeftIconButtonTouchTap'))
    .toEqual(handler);
  });
});
