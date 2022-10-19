import {StyleSheet, View} from 'react-native';
import {colors, gs} from '~/components/config';

import {CustomText} from './CustomText';
import React from 'react';
import {fontSize} from '~utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomHeader2 = props => {
  const insets = useSafeAreaInsets();
  const {title} = props;
  return (
    <View
      style={[
        styles.Container,
        {height: fontSize(50) + insets.top, paddingTop: insets.top},
      ]}>
      <View style={styles.CenterContainer}>
        <CustomText
          fSemibold
          style={{color: colors.color7}}
          f20
          children={title}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    ...gs.jccaic,
    ...gs.fdr,
    ...gs.posRel,
    backgroundColor: colors.mainColor,
  },
  CenterContainer: {
    flex: 1,
    height: '100%',
    ...gs.jccaic,
  },
});
export {CustomHeader2};
