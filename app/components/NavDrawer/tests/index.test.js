import NavDrawer from '../index';
import { IntlProvider } from 'react-intl';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('NavDrawer', () => {
  it('should take a currentPage prop', () => {
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <MuiThemeProvider>
          <NavDrawer
            isOpen={false}
            currentPage="Home"
            onCloseClick={() => {}}
          />
        </MuiThemeProvider>
      </IntlProvider>
    );
    expect(renderedComponent.find('NavDrawer').prop('currentPage'))
      .toEqual('Home');
  });

  it('should render <Link>s', () => {
    const renderedComponent = shallow(
      <NavDrawer
        isOpen
        currentPage="Home"
        onCloseClick={() => {}}
        links={['/foo', '/bar', '/baz']}
      />
    );

    expect(renderedComponent.find('Link').length)
    .toBeGreaterThan(3);
  });

  it('should render children', () => {
    const children = <div>hi</div>;
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <MuiThemeProvider>
          <NavDrawer
            isOpen={false}
            currentPage="Home"
            onCloseClick={() => {}}
          >
            {children}
          </NavDrawer>
        </MuiThemeProvider>
      </IntlProvider>
    );

    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
