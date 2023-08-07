import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: 0, 
    reducers: {
        add(state, action){
            
            return state + action.payload;
        }
    }
});
console.log("HII")
console.log(userSlice.actions);
export default userSlice.reducer;
export const { add } = userSlice.actions;