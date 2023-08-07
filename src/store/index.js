import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../store/slice/userSlice"
import  userSlice2  from "../store/slice/userSlice2"
import PuserSlice from "../store/slice/PuserSlice";
import PuserSlice2 from "../store/slice/PuserSlice2";
import EuserSlice from "../store/slice/EuserSlice";
import EuserSlice2 from "../store/slice/EuserSlice2";

const store = configureStore({
    reducer:{
        users: userSlice,
        users2: userSlice2,
        user3:PuserSlice,
        user4:PuserSlice2,
        user5:EuserSlice,
        user6:EuserSlice2
    }
})

export default store;