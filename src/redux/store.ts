import { configureStore, Action } from "@reduxjs/toolkit";
import counterReducer, { initialState } from "./reducer";
import { CounterAction, CounterState } from "./types";
import logger from "./logger";

const store = configureStore({
  reducer: {
    counter: (state: CounterState = initialState, action: Action) =>
      counterReducer(state, action as CounterAction),
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
