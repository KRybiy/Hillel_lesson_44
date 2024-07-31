import { Middleware, MiddlewareAPI, Dispatch, Action } from "@reduxjs/toolkit";
import { RootState } from "./types";

const logger: Middleware<Dispatch, RootState> = (storeApi: MiddlewareAPI<Dispatch<Action>, RootState>) => (next) => (action) => {
    const prevState = storeApi.getState().counter.count;
    const result = next(action);
    const nextState = storeApi.getState().counter.count;
    console.log(`prev state: ${prevState}, \n\t Dispatch action: ${action}, \n\t next count: ${nextState}`);
    return result;
};

export default logger;