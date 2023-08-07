import { createSlice } from "@reduxjs/toolkit";
const PuserSlice2 = createSlice({
    name: "user4",
    initialState: 0, 
    reducers: {
        add4(state, action){
            
            return state + action.payload;
        }
    }
});
console.log("HII")
console.log(PuserSlice2.actions);
export default PuserSlice2.reducer;
export const { add4 } = PuserSlice2.actions;