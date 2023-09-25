import { createSlice } from '@reduxjs/toolkit';
import { authSliceInterface } from '../interfaces/authSliceInterface';



// Initial State
const initialState: authSliceInterface = {
     user: false
};

// Reducer
const authSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        userIsActive: (state, action) => {
            state.user = action.payload
        },
        userLogOut: (state, action) => {
            state.user = action.payload
        }
    },
    
});



export const { userIsActive, userLogOut } = authSlice.actions;
export default authSlice.reducer;


