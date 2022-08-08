import reducer from "./reducer";
import { createStore } from "redux";

const store = createStore(reducer);
const persister = "Free";

export { store, persister };
