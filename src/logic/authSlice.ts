import { createSlice, Slice } from "@reduxjs/toolkit";

export interface AuthState {
	isLoggedIn: boolean;
}

const authSlice: Slice<AuthState> = createSlice({
	name: "auth",
	initialState: {
		isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
	},
	reducers: {
		login: (state: AuthState) => {
			state.isLoggedIn = true;
			localStorage.setItem("isLoggedIn", "true");
			// if (logoutTimeout !== null) {
			// 	clearTimeout(logoutTimeout);
			// }
			// logoutTimeout = setTimeout(() => {
			// 	state.isLoggedIn = false;
			// 	localStorage.setItem("isLoggedIn", "false");
			// 	logoutTimeout = null;
			// }, 10 * 1000);
		},
		logout: (state: AuthState) => {
			console.info("se llamo");
			state.isLoggedIn = false;
			localStorage.setItem("isLoggedIn", "false");
			window.location.reload();
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
