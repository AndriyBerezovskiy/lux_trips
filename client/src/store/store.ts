import { configureStore } from '@reduxjs/toolkit';

import hamburgerReducer from './slice/hamburger.slice';
import tourReducer from './slice/tour.slice';
import placesReducer from './slice/places.slice';

export const store = configureStore({
    reducer: {
        hamburgerReducer,
        tourReducer,
        placesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
