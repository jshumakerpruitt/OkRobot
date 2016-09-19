import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { App } from '../index';
import Footer from 'components/Footer';
import Header from 'components/Header';

describe('<App />', () => {
  let props = null;

  beforeEach(() => {
    props = {
      dispatch: () => {},
      token: '',
      location: { pathname: '/' },
    };
  });

  it('should render the header', () => {
    const renderedComponent = shallow(
      <App {...props} />
    );
    expect(renderedComponent.find(Header).length).toEqual(1);
  });

  it('should render the footer', () => {
    const renderedComponent = shallow(
      <App {...props} />
    );
    expect(renderedComponent.find(Footer).length).toEqual(1);
  });

  it('should render the NavDrawer', () => {
    const renderedComponent = shallow(
      <App {...props} />
    );
    expect(renderedComponent.find('NavDrawer').length).toEqual(1);
  });


  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App {...props} >
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
