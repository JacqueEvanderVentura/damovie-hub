import classNames from "classnames";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPopularMovies } from "../../logic/movies/popular/popularSlice";
import { fetchLatestMovie } from "../../logic/movies/latest/latestSlice";
import { fetchNowPlayingMovies } from "../../logic/movies/now-playing/nowPlayingSlice";
import { fetchTopRatedMovies } from "../../logic/movies/top-rated/topRatedSlice";
import { fetchUpcomingMovies } from "../../logic/movies/upcoming/upcomingSlice";

import PopularTab from "./PopularTab";
import LatestTab from "./LatestTab";
import TopRatedTab from "./TopRatedTab";
import NowPlayingTab from "./NowPlayingTab";
import UpcomingTab from "./UpcomingTab";

import Paragraph from "../Paragraph";
import Heading from "../Heading";

const Hub = (): JSX.Element => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch<any>(fetchLatestMovie());
		dispatch<any>(fetchNowPlayingMovies(1));
		dispatch<any>(fetchPopularMovies(1));
		dispatch<any>(fetchTopRatedMovies(1));
		dispatch<any>(fetchUpcomingMovies(1));
		setIsLoading(false);
	}, []);

	const [isLoading, setIsLoading] = useState(true);

	const tabClass = classNames(
		"flex items-center justify-center w-full h-10 h-16 md:h-12 p-2 md:text-lg lg:text-xl md:py-7 lg:py-3 text-center rounded-3xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white transition-all hover:transition-all hover:cursor-pointer"
	);

	if (isLoading) {
		return <Heading className="h-screen">Loading...</Heading>;
	}

	return (
		<nav className="mt-10 lg:mt-20">
			<Tabs>
				<TabList className="flex items-center w-[90vw] md:w-[84vw] xl:w-full h-fit space-x-3 md:space-x-7 xl:space-x-14 overflow-x-auto overflow-y-hidden">
					<Tab className={tabClass}>Latest</Tab>
					<Tab className={tabClass}>Now Playing</Tab>
					<Tab className={tabClass}>Popular</Tab>
					<Tab className={tabClass}>Top Rated</Tab>
					<Tab className={tabClass}>Upcoming</Tab>
				</TabList>

				<Suspense fallback={<Paragraph>Loading...</Paragraph>}>
					<TabPanel>
						<LatestTab />
					</TabPanel>
					<TabPanel>
						<NowPlayingTab />
					</TabPanel>
					<TabPanel>
						<PopularTab />
					</TabPanel>
					<TabPanel>
						<TopRatedTab />
					</TabPanel>
					<TabPanel>
						<UpcomingTab />{" "}
					</TabPanel>
				</Suspense>
			</Tabs>
		</nav>
	);
};

export default Hub;
