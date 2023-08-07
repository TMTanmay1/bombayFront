import { createSlice } from "@reduxjs/toolkit";
const userSlice2 = createSlice({
    name: "user2",
    initialState: 0, 
    reducers: {
        add2(state, action){
            
            return state + action.payload;
        }
    }
});
console.log("HII")
console.log(userSlice2.actions);
export default userSlice2.reducer;
export const { add2 } = userSlice2.actions;