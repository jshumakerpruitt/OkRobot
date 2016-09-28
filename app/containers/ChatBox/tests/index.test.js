import { ChatBox } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';

describe('<ChatBox />', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = shallow(
      <Provider>
        <ChatBox
          messages={{ 1: { id: 1, body: 'message body' } }}
          ids={[1]}
        />
      </Provider>
    );
  });

  it('it should render a TextField', () => {
  });

  it('should display messages', () => {
//    expect(renderedComponent.find('.messageWindow').length)
//     .toEqual(1);
  });

  it('should have a subscriptions field', () => {
    expect(renderedComponent.find('ChatBox').length)
      .toEqual(1);
  });
});
