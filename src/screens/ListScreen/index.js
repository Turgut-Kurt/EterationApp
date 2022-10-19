import {CustomHeader2, CustomText, colors, gs, sizes} from '~/components';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {calcWidth, fontSize, navigate} from '~/utils';

import IconFeather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import {mainStack} from '~/config';
import {showMessage} from 'react-native-flash-message';
import {simpsonsListSelector} from '~/modules/simpsons/selector';
import useActions from '~/hooks/useActions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const ListScreen = () => {
  const Actions = useActions();
  const insets = useSafeAreaInsets();
  const [removeModal, setRemoveModal] = useState(false);
  const [removeIndex, setRemoveIndex] = useState();
  const simpsonsList = useSelector(simpsonsListSelector);
  const {
    Container,
    AddButton,
    RenderItemContainer,
    RenderImageStyle,
    CommonButton,
    ModalContainer,
    ModalView,
    CommonModalButton,
  } = styles;
  useEffect(() => {
    if (simpsonsList.length < 1) {
      Actions.getListAction();
    }
  }, [simpsonsList]);
  const handleItemPress = detailItem => {
    navigate(mainStack.detailScreen, {detailItem});
  };
  const handleRemovePress = removeIndex => {
    setRemoveModal(true);
    setRemoveIndex(removeIndex);
  };
  const handleUp = index => {
    if (index === 0) {
      showMessage({
        message: 'Hata',
        description:
          'İlgili simpsons zaten en üst sırada olduğu için kaydırılamıyor.',
        type: 'danger',
      });
    } else {
      Actions.jumpUpSimpsons(index);
    }
  };
  const handleDown = index => {
    if (simpsonsList.length === index + 1) {
      showMessage({
        message: 'Hata',
        description:
          'İlgili simpsons zaten en son sırada olduğu için kaydırılamıyor.',
        type: 'danger',
      });
    } else {
      Actions.jumpDownSimpsons(index);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        testID={`person-card-${index}`}
        onPress={() => handleItemPress(item)}
        style={RenderItemContainer}>
        <CustomText
          children={index + 1}
          style={{width: fontSize(25), ...gs.textCc}}
        />
        <Image
          resizeMode="contain"
          source={{uri: item.avatar}}
          style={RenderImageStyle}
        />
        <CustomText
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{flex: 1}}
          children={item.name}
        />
        <TouchableOpacity
          onPress={() => handleUp(index)}
          style={[CommonButton, {borderColor: colors.color19}]}>
          <MaterialCommunityIcons
            name={'arrow-up-bold-outline'}
            color={colors.color19}
            size={sizes.f26}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDown(index)}
          style={[
            CommonButton,
            {borderColor: colors.color12, marginHorizontal: 5},
          ]}>
          <MaterialCommunityIcons
            name={'arrow-down-bold-outline'}
            color={colors.color12}
            size={sizes.f26}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleRemovePress(index)}
          style={[CommonButton, {borderWidth: 0}]}>
          <MaterialCommunityIcons
            name={'trash-can-outline'}
            color={colors.color2}
            size={sizes.f32}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  const keyExtractor = useCallback((item, index) => index.toString(), []);
  const FlatListItemSeparator = useCallback(
    () => <View style={{borderBottomWidth: 1, borderColor: colors.color13}} />,
    [],
  );
  return (
    <View style={Container}>
      <Modal isVisible={removeModal}>
        <View style={ModalContainer}>
          <CustomText
            f20
            style={{...gs.textCc}}
            children={`Silmek istediğinizden\nemin misiniz?`}
          />
          <View style={ModalView}>
            <TouchableOpacity
              style={[CommonModalButton, {backgroundColor: colors.mainColor}]}
              onPress={() => {
                setRemoveModal(false);
                Actions.deleteSimpsonsAction(removeIndex);
              }}>
              <CustomText
                style={{...gs.textCc, color: colors.color7}}
                children="Sil"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                CommonModalButton,
                {
                  marginLeft: 10,
                  borderWidth: 2,
                  borderColor: colors.mainColor,
                  backgroundColor: colors.color7,
                },
              ]}
              onPress={() => {
                setRemoveIndex();
                setRemoveModal(false);
              }}>
              <CustomText
                testId="custom-text"
                style={{...gs.textCc, color: colors.mainColor}}
                children="İptal"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              position: 'absolute',
              right: -15,
              top: -15,
              backgroundColor: colors.mainColor,
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
            onPress={() => setRemoveModal(false)}>
            <IconFeather name="x" size={16} color={'#FFFFFF'} />
          </TouchableOpacity>
        </View>
      </Modal>
      <CustomHeader2 title="Simpsons" />
      <FlatList
        keyExtractor={keyExtractor}
        ListFooterComponent={FlatListItemSeparator}
        ListHeaderComponent={FlatListItemSeparator}
        ItemSeparatorComponent={FlatListItemSeparator}
        data={simpsonsList}
        ListEmptyComponent={() => (
          <View>
            <CustomText children="data yok" />
          </View>
        )}
        renderItem={renderItem}
      />
      <TouchableOpacity
        onPress={() => navigate(mainStack.addScreen)}
        style={[AddButton, {bottom: insets.bottom + fontSize(10)}]}>
        <MaterialCommunityIcons
          name={'plus'}
          color={colors.color7}
          size={sizes.f32}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {backgroundColor: colors.color7, flex: 1},
  RenderItemContainer: {...gs.fdr, padding: 20, ...gs.aic},
  RenderImageStyle: {
    width: fontSize(50),
    height: fontSize(50),
    marginHorizontal: 10,
  },
  CommonButton: {
    borderWidth: 2,
    width: fontSize(32),
    height: fontSize(32),
    ...gs.jccaic,
    borderRadius: fontSize(16),
  },
  AddButton: {
    borderWidth: 0,
    width: fontSize(40),
    height: fontSize(40),
    borderRadius: fontSize(20),
    backgroundColor: colors.mainColor,
    ...gs.jccaic,
    ...gs.posAbs,
    ...gs.asc,
  },
  ModalContainer: {
    backgroundColor: colors.color7,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    ...gs.aic,
  },
  ModalView: {...gs.fdr, marginTop: 30},
  CommonModalButton: {
    width: (calcWidth(100) - 80) / 2,
    height: 50,
    ...gs.jccaic,
    borderRadius: 10,
  },
});
export {ListScreen};

// exports DetailScreen Screen
export * from './DetailScreen';
// exports AddScreen Screen
export * from './AddScreen';
