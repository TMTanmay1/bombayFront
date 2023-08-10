// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  proposalNumber: '',
  brandName: '',
  clientName: '',
  projectDuration:'',
  // contactNo: '',
  // emailId: '',
  // selectedService: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      console.log("h");
      state.proposalNumber = action.payload;
    },
    updateBr: (state ,action) => {
      console.log("b");
      state.brandName = action.payload;
    },
    updateCn: (state ,action) => {
      console.log("C");
      state.clientName = action.payload;
    },
    updatePd: (state ,action) => {
      console.log("P");
      state.projectDuration = action.payload;
    },
    selectService: (state, action) => {
      state.selectedService = action.payload;
    },
  },
});

export const { updateFormData,updateBr,updateCn, updatePd, selectService } = formSlice.actions;
export default formSlice.reducer;
