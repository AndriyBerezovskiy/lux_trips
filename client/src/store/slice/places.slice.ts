import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ITour } from './tour.slice';
import { placesService } from '../../services/places.service';

export interface IPlaces{
    id: number,
    namePlaces: string,
    image: string,
    tours: ITour[]
}

interface IInitialState{
    places: IPlaces[];
}

const initialState: IInitialState = {
    places: [],
};

export const getAllPlaces = createAsyncThunk(
    'placesSlice/getAllPlaces',
    async (_, { rejectWithValue }) => {
        try {
            const response = await placesService.getAllPlaces();
            return response;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder.addCase(getAllPlaces.fulfilled, (state, action) => {
            state.places = action.payload;
        });
    }),
});

export default placesSlice.reducer;
