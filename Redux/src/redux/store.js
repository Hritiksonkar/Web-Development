import { createStore } from "redux";
// import counterReducer from "./counterReducer";
import { counterReducer } from "./counterReduce";

const store = createStore(counterReducer);

export default store;
