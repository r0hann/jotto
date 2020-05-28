import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from './../test/testUtil';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for Congrats Component
 * @function setup
 * @param {Object} props
 * @returns {S}
 */
const setup = (props = {}) => {
  const wrapper = shallow(<Congrats {...props} />);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` props is false ', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('render non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
