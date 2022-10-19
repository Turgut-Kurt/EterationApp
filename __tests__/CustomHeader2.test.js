import {CustomHeader2} from '~/components';
import React from 'react';
import {render} from '@testing-library/react-native';

test('should match with snapshot', () => {
  const comp = render(<CustomHeader2 title={'Test'} />);
  expect(comp).toMatchSnapshot();
});
