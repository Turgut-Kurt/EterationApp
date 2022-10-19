import {fireEvent, render, screen} from '@testing-library/react-native';

import {CustomText} from '../src/components/CustomText';
import React from 'react';

test('should match with snapshot', () => {
  const comp = render(<CustomText children={'Test'} />);
  expect(comp).toMatchSnapshot();
});

test('should render text correctly', () => {
  const testText = 'test';
  const comp = render(<CustomText children={testText} />);

  const customText = comp.getByTestId('custom-text');
  expect(customText).toBe(testText);
});
