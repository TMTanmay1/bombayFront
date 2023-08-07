import { createSlice } from "@reduxjs/toolkit";
const EuserSlice2 = createSlice({
    name: "user6",
    initialState: 0, 
    reducers: {
        add6(state, action){
            
            return state + action.payload;
        }
    }
});
console.log("HII")
console.log(EuserSlice2.actions);
export default EuserSlice2.reducer;
export const { add6 } = EuserSlice2.actions;