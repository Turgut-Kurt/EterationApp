import {fireEvent, render, screen} from '@testing-library/react-native';

import {CustomInputLabel} from '../src/components/CustomInputLabel';
import React from 'react';

test('should match with snapshot', () => {
  const comp = render(<CustomInputLabel />);
  expect(comp).toMatchSnapshot();
});
