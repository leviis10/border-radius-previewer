import { configureStore } from "@reduxjs/toolkit";

import stateReducer from "./reducers/stateReducer";

const store = configureStore({ reducer: { state: stateReducer } });

export type RootState = ReturnType<typeof store.getState>;

export default store;
