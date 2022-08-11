import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk"

import reducer from "./reducer";

const loggerMiddleware = createLogger()

const store = createStore(
	reducer,
	applyMiddleware(thunkMiddleware, loggerMiddleware)
	);
const persister = "Free";

export { store, persister };
