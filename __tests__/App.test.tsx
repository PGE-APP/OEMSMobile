/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

jest.mock(
  'react-native-safe-area-context',
  () => jest.requireActual('react-native-safe-area-context/jest/mock').default,
);

test('navigates from Login to Home and back after logout', async () => {
  let renderer: ReactTestRenderer.ReactTestRenderer;

  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(<App />);
  });

  expect(JSON.stringify(renderer!.toJSON())).toContain('เข้าสู่ระบบ OEMS');
  expect(renderer!.root.findByProps({ testID: 'email-input' })).toBeTruthy();
  expect(renderer!.root.findByProps({ testID: 'password-input' })).toBeTruthy();
  expect(renderer!.root.findByProps({ testID: 'login-button' })).toBeTruthy();

  await ReactTestRenderer.act(() => {
    renderer!.root.findByProps({ testID: 'login-button' }).props.onPress();
  });

  expect(JSON.stringify(renderer!.toJSON())).toContain('ภาพรวมการส่งออก');
  expect(renderer!.root.findByProps({ testID: 'logout-button' })).toBeTruthy();

  await ReactTestRenderer.act(() => {
    renderer!.root.findByProps({ testID: 'logout-button' }).props.onPress();
  });

  expect(JSON.stringify(renderer!.toJSON())).toContain('เข้าสู่ระบบ OEMS');
});
