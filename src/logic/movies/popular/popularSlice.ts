import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface PopularState {
	currentMovies: any[];
	newMovies: any[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
	totalPages: number;
}

const initialState: PopularState = {
	currentMovies: [],
	newMovies: [],
	status: "idle",
	error: null,
	totalPages: 0,
};

export const fetchPopularMovies = createAsyncThunk(
	"popular/fetchPopularMovies",
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
			`https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${page}`,
			options
		);
		const data = await response.json();

		return data;
	}
);

const popularSlice = createSlice({
	name: "popular",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPopularMovies.pending, (state) => {
				state.status = "loading";
			})
			.addCase(
				fetchPopularMovies.fulfilled,
				(state, action: PayloadAction<any>) => {
					state.status = "succeeded";
					state.newMovies = action.payload.results;
					state.currentMovies = state.newMovies;
					state.error = null;
					state.totalPages = action.payload.total_pages;
				}
			)
			.addCase(fetchPopularMovies.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message ?? "Failed to fetch popular movies";
			});
	},
});

export default popularSlice.reducer;
