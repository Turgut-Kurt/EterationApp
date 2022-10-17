import * as yup from 'yup';
const AddCharacterScreen = yup.object().shape({
  charName: yup
    .string()
    .min(2, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Karakter ismi zorunlu'),
  jobTitle: yup
    .string()
    .min(2, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Mesleği zorunlu'),
  about: yup
    .string()
    .min(2, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Hakkında içeriği zorunlu'),
  imageLink: yup
    .string()
    .min(2, ({min}) => `En az ${min} karakter olmalıdır.`)
    // .matches(
    //   /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //   'Geçerli bir url giriniz.',
    // )
    .required('Resim linki içeriği zorunlu'),
});
export default AddCharacterScreen;
