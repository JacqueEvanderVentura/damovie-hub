import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface NowPlayingState {
	currentMovies: any[];
	newMovies: any[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
	totalPages: number;
}

const initialState: NowPlayingState = {
	currentMovies: [],
	newMovies: [],
	status: "idle",
	error: null,
	totalPages: 0,
};

export const fetchNowPlayingMovies = createAsyncThunk(
	"nowPlaying/fetchNowPlayingMovies",
	async (page: number = 1) => {
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDRhMTliMWNjZWE2YzgxMzNmNTZmOWQzYTAxNWQ2YyIsInN1YiI6IjY1MjhiOGZmMWYzZTYwMDEzOTlkNjU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CiZ4CzMTR_bZspeGrXylAn9ct5VBPDK-7jgjgiQ4MOA",
			},
		};

		const response = await fetch(
			`https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=${page}`,
			options
		);
		const data = await response.json();

		return data;
	}
);

const nowPlayingSlice = createSlice({
	name: "nowPlaying",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNowPlayingMovies.pending, (state) => {
				state.status = "loading";
			})
			.addCase(
				fetchNowPlayingMovies.fulfilled,
				(state, action: PayloadAction<any>) => {
					state.status = "succeeded";
					state.newMovies = action.payload.results;
					state.currentMovies = state.newMovies;
					state.error = null;
					state.totalPages = action.payload.total_pages;
				}
			)
			.addCase(fetchNowPlayingMovies.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message ?? "Failed to fetch nowPlaying movies";
			});
	},
});

export default nowPlayingSlice.reducer;
