// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  proposalNumber: '',
  brandName: '',
  clientName: '',
  projectDuration:'',
  deliverablesData: [],
  selectedTalents: [],
  extraTalents: [],
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
    addDeliverable: (state, action) => {
      state.deliverablesData.push(action.payload);
    },
    updateDeliverable: (state, action) => {
      const { index, updatedData } = action.payload;
      state.deliverablesData[index] = updatedData;
    },
    addSelectedTalent: (state, action) => {
      state.selectedTalents.push(action.payload);
    },
    removeSelectedTalent: (state, action) => {
      state.selectedTalents = state.selectedTalents.filter(
        (talent) => talent !== action.payload
      );
    },
    addExtraTalent: (state, action) => {
      state.extraTalents.push(action.payload);
    },
    removeExtraTalent: (state, action) => {
      state.extraTalents = state.extraTalents.filter(
        (talent) => talent !== action.payload
      );
    },
  },
});

export const { updateFormData,updateBr,updateCn, updatePd, selectService , addDeliverable, updateDeliverable ,addSelectedTalent,
  removeSelectedTalent,
  addExtraTalent,
  removeExtraTalent, } = formSlice.actions;
export default formSlice.reducer;
