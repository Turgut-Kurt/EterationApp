import {REHYDRATE} from 'redux-persist';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  simpsonsList: [],
};

export const slice = createSlice({
  name: 'simpsons',
  initialState,
  reducers: {
    setSimpsonsList: (state, action) => {
      state.simpsonsList = action.payload;
    },
    addSimpsons: (state, action) => {
      let copyList = state.simpsonsList;
      copyList.unshift(action.payload);
      state.simpsonsList = copyList;
    },
    deleteSimpsons: (state, action) => {
      state.simpsonsList = state.simpsonsList.filter(
        (item, index) => index !== action.payload,
      );
    },
    jumpUpSimpsons: (state, action) => {
      let tmp1 = state.simpsonsList[action.payload - 1];
      let tmp2 = state.simpsonsList[action.payload];
      let copyList = [...state.simpsonsList];
      copyList[action.payload - 1] = tmp2;
      copyList[action.payload] = tmp1;
      state.simpsonsList = copyList;
    },
    jumpDownSimpsons: (state, action) => {
      let tmp1 = state.simpsonsList[action.payload];
      let tmp2 = state.simpsonsList[action.payload + 1];
      let copyList = [...state.simpsonsList];
      copyList[action.payload] = tmp2;
      copyList[action.payload + 1] = tmp1;
      state.simpsonsList = copyList;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setSimpsonsList,addSimpsons, deleteSimpsons, jumpUpSimpsons,jumpDownSimpsons} = slice.actions;

export default slice.reducer;
