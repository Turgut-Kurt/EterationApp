import {View, Image, StyleSheet} from 'react-native';
import React from 'react'
import { colors, CustomHeader, CustomText, gs } from '~/components';
import { useRoute } from '@react-navigation/native';
import { calcHeight, calcWidth, fontSize } from '~/utils';

const DetailScreen = () => {
  const { params } = useRoute();
  const {Container, RenderImageStyle} = styles;
  return (
    <View style={Container}>
      <CustomHeader title={params.detailItem.name} />
      <View >
        <Image
          resizeMode="contain"
          source={{uri: params.detailItem.avatar}}
          style={RenderImageStyle}
        />
        <CustomText
          style={{...gs.asc}}
          fSemibold
          f30
          children={params.detailItem.name}
        />
        <CustomText
          style={{...gs.asc, color: colors.color1}}
          f20
          children={params.detailItem.job}
        />
        <CustomText
          style={{color: colors.color1, margin: 20}}
          children={params.detailItem.description}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {backgroundColor: colors.color7, flex: 1},
  RenderImageStyle: {
    width: calcWidth(100),
    height: calcHeight(25),
    marginHorizontal: 10,
    marginVertical:20
  },
});
export {DetailScreen};