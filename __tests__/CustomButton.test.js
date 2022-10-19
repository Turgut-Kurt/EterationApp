import {fireEvent, render} from '@testing-library/react-native';

import {CustomButton} from '../src/components/CustomButton';
import React from 'react';

test('should match with snapshot', () => {
  const comp = render(<CustomButton children={'Test'} />);
  expect(comp).toMatchSnapshot();
});

test('should trigger onPress', () => {
  const mockFunction = jest.fn();
  const comp = render(
    <CustomButton
      disabled={false}
      children={'Karakter Ekle'}
      onPress={mockFunction}
    />,
  );
  const customButton = comp.getByTestId('custom-button');
  fireEvent(customButton, 'press');
  expect(mockFunction).toBeCalled();
});
