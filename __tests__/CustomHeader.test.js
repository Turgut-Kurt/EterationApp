import {fireEvent, render, screen} from '@testing-library/react-native';

import {CustomHeader} from '~/components';
import React from 'react';

test('should match with snapshot', () => {
  const comp = render(<CustomHeader title={'Test'} />);
  expect(comp).toMatchSnapshot();
});
