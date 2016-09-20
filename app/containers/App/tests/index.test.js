import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { App } from '../index';
import Footer from 'components/Footer';
import Header from 'components/Header';

describe('<App />', () => {
  let props = null;
  let renderedComponent = null;

  beforeEach(() => {
    props = {
      dispatch: () => {},
      token: '',
      location: { pathname: '/' },
    };

    renderedComponent = shallow(
      <App {...props} />
    );
  });

  it('should render the header', () => {
    expect(renderedComponent.find(Header).length).toEqual(1);
  });

  it('should render the footer', () => {
    expect(renderedComponent.find(Footer).length).toEqual(1);
  });

  it('should render the NavDrawer', () => {
    expect(renderedComponent.find('NavDrawer').length).toEqual(1);
  });


  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const componentWithChildren = shallow(
      <App {...props} >
        {children}
      </App>
    );
    expect(componentWithChildren.contains(children)).toEqual(true);
  });
});
