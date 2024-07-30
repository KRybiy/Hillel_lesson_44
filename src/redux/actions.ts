import { ThunkAction } from "@reduxjs/toolkit";
import { ActionTypes } from "./actionTypes";
import { CounterAction, CounterState } from "./types";

export const incrementAsync = (): ThunkAction<void, CounterState, unknown, CounterAction> => (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ActionTypes.INCREMENT
      });
    }, 1000);
  }

export const decrementAsync = (): ThunkAction<void, CounterState, unknown, CounterAction> => (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ActionTypes.DECREMENT
      });
    }, 1000);
  }

