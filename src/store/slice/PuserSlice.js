import { createSlice } from "@reduxjs/toolkit";
const PuserSlice = createSlice({
    name: "user3",
    initialState: 0, 
    reducers: {
        add3(state, action){
            
            return state + action.payload;
        }
    }
});
console.log("HII")
console.log(PuserSlice.actions);
export default PuserSlice.reducer;
export const { add3 } = PuserSlice.actions;