import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface LatestState {
	movies: any[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

const initialState: LatestState = {
	movies: [{}],
	status: "idle",
	error: null,
};

export const fetchLatestMovie = createAsyncThunk(
	"latest/fetchLatestMovie",
	async () => {
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDRhMTliMWNjZWE2YzgxMzNmNTZmOWQzYTAxNWQ2YyIsInN1YiI6IjY1MjhiOGZmMWYzZTYwMDEzOTlkNjU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CiZ4CzMTR_bZspeGrXylAn9ct5VBPDK-7jgjgiQ4MOA",
			},
		};

		const response = await fetch(
			"https://api.themoviedb.org/3/movie/latest",
			options
		);
		const data = await response.json();
		return data;
	}
);

const latestSlice = createSlice({
	name: "latest",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLatestMovie.pending, (state) => {
				state.status = "loading";
			})
			.addCase(
				fetchLatestMovie.fulfilled,
				(state, action: PayloadAction<any>) => {
					state.status = "succeeded";
					state.movies = [action.payload];
					state.error = null;
				}
			)
			.addCase(fetchLatestMovie.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message ?? "Failed to fetch latest movies";
			});
	},
});

export default latestSlice.reducer;
