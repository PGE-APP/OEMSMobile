/**
 * @format
 */

import React from 'react';
import { Text } from 'react-native';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

jest.mock(
  'react-native-safe-area-context',
  () => jest.requireActual('react-native-safe-area-context/jest/mock').default,
);

function textContent(value: unknown): string {
  if (Array.isArray(value)) {
    return value.map(textContent).join('');
  }

  return typeof value === 'string' || typeof value === 'number'
    ? String(value)
    : '';
}

function hasText(renderer: ReactTestRenderer.ReactTestRenderer, text: string) {
  return renderer.root
    .findAllByType(Text)
    .some(node => textContent(node.props.children).includes(text));
}

test('navigates from Login to Home and back after logout', async () => {
  let renderer: ReactTestRenderer.ReactTestRenderer;

  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(<App />);
  });

  expect(hasText(renderer!, 'เข้าสู่ระบบ OEMS')).toBe(true);
  expect(renderer!.root.findByProps({ testID: 'email-input' })).toBeTruthy();
  expect(renderer!.root.findByProps({ testID: 'password-input' })).toBeTruthy();
  expect(renderer!.root.findByProps({ testID: 'login-button' })).toBeTruthy();

  await ReactTestRenderer.act(() => {
    renderer!.root.findByProps({ testID: 'login-button' }).props.onPress();
  });

  expect(hasText(renderer!, 'ภาพรวมการส่งออก')).toBe(true);
  expect(hasText(renderer!, 'สัดส่วนตามประเภทน้ำมัน')).toBe(true);
  expect(hasText(renderer!, 'แนวโน้มปริมาณและมูลค่าการส่งออก')).toBe(true);
  expect(hasText(renderer!, 'ภาพรวมตามโรงกลั่น')).toBe(true);

  await ReactTestRenderer.act(() => {
    renderer!.root.findByProps({ testID: 'trend-filter-3' }).props.onPress();
  });

  expect(hasText(renderer!, 'กรกฎาคม–กันยายน 2569')).toBe(true);
  expect(
    renderer!.root.findByProps({ testID: 'trend-filter-3' }).props
      .accessibilityState.selected,
  ).toBe(true);

  await ReactTestRenderer.act(() => {
    renderer!.root.findByProps({ testID: 'open-sidebar' }).props.onPress();
  });

  expect(renderer!.root.findByProps({ testID: 'close-sidebar' })).toBeTruthy();
  expect(renderer!.root.findByProps({ testID: 'logout-button' })).toBeTruthy();

  await ReactTestRenderer.act(() => {
    renderer!.root.findByProps({ testID: 'close-sidebar' }).props.onPress();
  });

  await ReactTestRenderer.act(() => {
    renderer!.root.findByProps({ testID: 'open-sidebar' }).props.onPress();
  });

  await ReactTestRenderer.act(() => {
    renderer!.root.findByProps({ testID: 'logout-button' }).props.onPress();
  });

  expect(hasText(renderer!, 'เข้าสู่ระบบ OEMS')).toBe(true);
});
