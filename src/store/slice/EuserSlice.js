import { createSlice } from "@reduxjs/toolkit";
const EuserSlice = createSlice({
    name: "user5",
    initialState: 0, 
    reducers: {
        add5(state, action){
            
            return state + action.payload;
        }
    }
});
console.log("HII")
console.log(EuserSlice.actions);
export default EuserSlice.reducer;
export const { add5 } = EuserSlice.actions;