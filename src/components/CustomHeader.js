import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {calcWidth, fontSize, goBack} from '~utils';
import {colors, gs} from '~/components/config';

import {CustomText} from './CustomText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomHeader = props => {
  const insets = useSafeAreaInsets();
  const {title} = props;
  return (
    <View
      style={[
        styles.Container,
        {height: fontSize(50) + insets.top, paddingTop: insets.top},
      ]}>
      <TouchableOpacity onPress={goBack} style={styles.LeftContainer}>
        <MaterialIcons
          style={styles.IconStyle}
          name="chevron-left"
          size={30}
          color={colors.color7}
        />
      </TouchableOpacity>
      <View style={styles.CenterContainer}>
        <CustomText
          fSemibold
          style={{color: colors.color7}}
          f20
          children={title}
        />
      </View>
      {props.rightContainer ? (
        props.rightContainer
      ) : (
        <View style={styles.RightContainer} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    ...gs.jccaic,
    ...gs.fdr,
    ...gs.posRel,
    backgroundColor: colors.mainColor,
    zIndex: -1,
  },
  LeftContainer: {
    flex: 0.15,
    ...gs.jcc,
    height: '100%',
  },
  IconStyle: {...gs.posAbs, left: calcWidth(6)},
  CenterContainer: {
    flex: 0.7,
    height: '100%',
    ...gs.jccaic,
  },
  RightContainer: {
    flex: 0.15,
    height: '100%',
    ...gs.jccaic,
  },
});
export {CustomHeader};
