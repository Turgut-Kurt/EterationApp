import {Alert} from 'react-native';
import ImageResizer from '@bam.tech/react-native-image-resizer';
import {mainStack} from '~/config';

export async function convertPickerSelectData(data) {
  let newData = await data.map(item => {
    let newItem = {
      ...item,
      label: item.adi,
      value: item.id,
    };
    return newItem;
  });
  return newData;
}

export const resizeImage = async image => {
  let path = image.path ? image.path : image.uri;
  if (!image || !path) return;
  try {
    let result = await ImageResizer.createResizedImage(
      path,
      800,
      800,
      'JPEG',
      100,
      0,
      undefined,
      false,
      {
        mode: 'contain',
        onlyScaleDown: true,
      },
    );
    return result;
  } catch (error) {
    Alert.alert('Unable to resize the photo');
  }
};

export const renderNavName = number => {
  let text;
  switch (number) {
    case 1:
      text = mainStack.selectCategory1;
      return text;
    case 2:
      text = mainStack.selectCategory2;
      return text;
    case 3:
      text = mainStack.selectCategory3;
      return text;
    default:
      text = '';
      return text;
  }
};

export function addVisible(arr) {
  return arr.map(item => {
    const singleData = {
      ...item,
      _dd: '',
      isVisible: false,
    };
    return singleData;
  });
}

export function format(val) {
  val = (+val).toLocaleString();
  val = (+val).toFixed(2);
  val += '';
  return val.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1' + format.thousands);
}
(function (isUS) {
  format.decimal = isUS ? '.' : ',';
  format.thousands = isUS ? ',' : '.';
})(('' + (+(0.0).toLocaleString()).toFixed(2)).indexOf('.') > 0);

export function moneyFormat(price) {
  var currency_symbol = '₺';
  var formattedOutput = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
  });
  return formattedOutput.format(price).replace(currency_symbol, '');
}
