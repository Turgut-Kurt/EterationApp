/**
 * @format
 */

import 'react-native';

import App from '../src/index';
import React from 'react';
// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';

test('should match with snapshot', () => {
  const comp = render(<App />);
  expect(comp).toMatchSnapshot();
});