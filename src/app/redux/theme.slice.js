import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTheme: 1,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme : (state, action) => {
            state.selectedTheme = action.payload;
        }
    }
});

export const selectTheme = (state) => state.theme.selectedTheme;

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;