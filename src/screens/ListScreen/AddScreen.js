import {View, StyleSheet} from 'react-native';
import React, { useState } from 'react'
import { colors, CustomButton, CustomHeader, CustomInputLabel } from '~/components';
import { calcWidth, fontSize } from '~/utils';
import {AddCharacterScreen} from '~/schema';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import { Formik } from 'formik';
import useActions from '~/hooks/useActions';
const AddScreen = () => {
  const { Container, } = styles;
  const Actions = useActions();
  const [formikInitialValues, setFormikinitialValues] = useState({
    charName: '',
    jobTitle: '',
    about: '',
    imageLink: '',
  });
  return (
    <View style={Container}>
      <CustomHeader title={'Yeni Karakter Ekle'} />
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" >
        <Formik
          validationSchema={AddCharacterScreen}
          initialValues={formikInitialValues}
          onSubmit={values => {
            let newObj = {
              name: values.charName,
              job: values.jobTitle,
              description: values.about,
              avatar: values.imageLink,
            };
            Actions.addSimpsonsAction(newObj);
          }}>
          {({handleSubmit, values, isValid, errors, handleChange}) => (
            <View style={[Container, {marginTop: 20}]}>
              <CustomInputLabel
                name={'charName'}
                containerProps={{
                  label: 'Karakter İsmi',
                  placeholder: 'Karakterin ismi',
                  maxLength: 50,
                }}
              />
              <CustomInputLabel
                name={'jobTitle'}
                containerProps={{
                  keyboardType: 'email-address',
                  label: 'Mesleği',
                  placeholder: 'Karakterin mesleği',
                  maxLength: 50,
                }}
              />
              <CustomInputLabel
                name={'about'}
                containerProps={{
                  label: 'Hakkında',
                  placeholder: 'Karakter hakkında bilgi veriniz.',
                  maxLength: 200,
                  multiline: true,
                }}
                inputContainerStyle={{height: fontSize(150), borderRadius: 10}}
                inputStyle={{paddingRight: 30}}
              />
              <CustomInputLabel
                name={'imageLink'}
                containerProps={{
                  label: 'Resim Linki',
                  placeholder: 'Yüklemek istediğiniz resimin linkini giriniz.',
                  maxLength: 150,
                }}
              />

              <CustomButton
                style={[
                  {marginTop: 10},
                  values.imageLink !== '' && isValid === true
                    ? {backgroundColor: colors.mainColor}
                    : {backgroundColor: colors.color14},
                ]}
                disabled={!(values.imageLink !== '' && isValid === true)}
                children={'Karakter Ekle'}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: { backgroundColor: colors.color7, flex: 1 },
 
});
export {AddScreen};