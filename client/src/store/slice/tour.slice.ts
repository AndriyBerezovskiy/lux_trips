import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { tourService } from '../../services/tour.service';

export interface ITour {
    id: number,
    tourName: string,
    image: string,
    price: number,
    rating: number,
    countryId: number,
    typeTourId: number,
    placesId: number,
    country: {
        id: number,
        countryName: string,
        worldId: number
    }
}

interface IInitialState{
    tours: ITour[];
}

const initialState: IInitialState = {
    tours: [],
};

export const getAllTour = createAsyncThunk(
    'tour/getAllTour',
    async (_, { rejectWithValue }) => {
        try {
            const response = await tourService.getAllTours();
            return response;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

const tourSlice = createSlice({
    name: 'tour',
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder.addCase(getAllTour.fulfilled, (state, action) => {
            state.tours = action.payload;
        });
    }),
});

export default tourSlice.reducer;
