import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

import authReducer, { AuthState } from "./authSlice";
import popularReducer, { PopularState } from "./movies/popular/popularSlice";

export interface RootState {
	auth: AuthState;
	popular: PopularState; 
}

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);


const store = configureStore({
	reducer: {
		auth: persistedReducer,
		popular: popularReducer,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
