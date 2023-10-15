import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface TopRatedState {
	currentMovies: any[];
	newMovies: any[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
	totalPages: number;
}

const initialState: TopRatedState = {
	currentMovies: [],
	newMovies: [],
	status: "idle",
	error: null,
	totalPages: 0,
};

export const fetchTopRatedMovies = createAsyncThunk(
	"topRated/fetchTopRatedMovies",
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
			`https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=${page}`,
			options
		);
		const data = await response.json();

		return data;
	}
);

const topRatedSlice = createSlice({
	name: "topRated",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTopRatedMovies.pending, (state) => {
				state.status = "loading";
			})
			.addCase(
				fetchTopRatedMovies.fulfilled,
				(state, action: PayloadAction<any>) => {
					state.status = "succeeded";
					state.newMovies = action.payload.results;
					state.currentMovies = state.newMovies;
					state.error = null;
					state.totalPages = action.payload.total_pages;
				}
			)
			.addCase(fetchTopRatedMovies.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message ?? "Failed to fetch topRated movies";
			});
	},
});

export default topRatedSlice.reducer;
