import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState{
		hamburger: boolean
}

const initialState: IState = {
    hamburger: false,
};

const hamburgerSlice = createSlice({
    name: 'hamburger',
    initialState,
    reducers: {
        isActive: (state, action: PayloadAction<boolean>) => {
            state.hamburger = action.payload;
        },
    },
});

export const { isActive } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;
