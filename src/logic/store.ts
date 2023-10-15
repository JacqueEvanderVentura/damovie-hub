import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer, { AuthState } from "./authSlice";
import popularReducer, { PopularState } from "./movies/popular/popularSlice";
import topRatedReducer, {
	TopRatedState,
} from "./movies/top-rated/topRatedSlice";
import latestReducer, { LatestState } from "./movies/latest/latestSlice";
import upcomingReducer, { UpcomingState } from "./movies/upcoming/upcomingSlice";
import nowPlayingReducer, {
	NowPlayingState,
} from "./movies/now-playing/nowPlayingSlice";

export interface RootState {
	auth: AuthState;
	popular: PopularState;
	latest: LatestState;
	topRated: TopRatedState;
	nowPlaying: NowPlayingState;
	upcoming: UpcomingState;
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
		latest: latestReducer,
		topRated: topRatedReducer,
		nowPlaying: nowPlayingReducer,
		upcoming: upcomingReducer,
	},
});

export default store;
export type AppDispatch = typeof store.dispatch;
