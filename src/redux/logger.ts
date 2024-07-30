import { Middleware, MiddlewareAPI, Dispatch, Action } from "@reduxjs/toolkit";
import { RootState } from "./types";

const logger: Middleware<object, RootState, Dispatch> = (storeApi: MiddlewareAPI<Dispatch<Action>, RootState>) => (next: Dispatch<Action>) => (action: Action) => {
    const prevState = storeApi.getState().counter.count;
    const result = next(action);
    const nextState = storeApi.getState().counter.count;
    console.log(`prev state: ${prevState}, \n\t Dispatch action: ${action.type}, \n\t next count: ${nextState}`);
    return result;
};

export default logger;
