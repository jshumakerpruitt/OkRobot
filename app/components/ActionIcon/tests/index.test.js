import ActionIcon from '../index';

import expect from 'expect';
import { mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('<ActionIcon />', () => {
  let renderedComponent = null;
  const onClickSpy = expect.createSpy();

  beforeEach(() => {
    renderedComponent = mount(
      <IntlProvider locale="en">
        <MuiThemeProvider>
          <ActionIcon
            onIconClick={onClickSpy}
            isActive={false}
            activeColor="yellow"
            defaultColor="white"
          />
        </MuiThemeProvider>
      </IntlProvider>
    );
  });

  it('accepts an onClick handler', () => {
    const button = renderedComponent.find('button');
    button.simulate('click');

    expect(onClickSpy).toHaveBeenCalled();
  });

  it('accepts a defaultColor prop', () => {
    expect(renderedComponent
      .find(ActionIcon)
      .prop('defaultColor'))
      .toEqual('white');
  });

  it('accepts a activeColor prop', () => {
    expect(renderedComponent
      .find(ActionIcon)
      .prop('activeColor'))
      .toEqual('yellow');
  });

  it('accepts a active prop', () => {
    expect(renderedComponent
      .find(ActionIcon)
      .prop('isActive'))
      .toEqual(false);
  });
});
