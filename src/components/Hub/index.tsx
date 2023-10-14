import { Suspense } from "react";
import classNames from "classnames";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PopularTab from "./PopularTab";
import Paragraph from "../Paragraph";

const Hub = (): JSX.Element => {
	const tabClass = classNames(
		"flex items-center justify-center rounded-3xl w-fit md:w-36 h-10 h-16 md:h-12 p-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white transition-all hover:transition-all hover:cursor-pointer hover:scale-105"
	);

	return (
		<main className="xl:ml-20 ml-4 mt-20">
			<Tabs>
				<TabList className="flex space-x-3 items-center md:space-x-7 overflow-x-auto w-[94vw] h-fit p-2 ">
					<Tab className={tabClass}>Latest</Tab>
					<Tab className={tabClass}>Now Playing</Tab>
					<Tab className={tabClass}>Popular</Tab>
					<Tab className={tabClass}>Top Rated</Tab>
					<Tab className={tabClass}>Upcoming</Tab>
				</TabList>

				<Suspense fallback={<Paragraph>Loading...</Paragraph>}>
					<TabPanel>{"<LatestTab />"}</TabPanel>
					<TabPanel>{"<NowPlayingTab />"}</TabPanel>
					<TabPanel>
						<PopularTab />
					</TabPanel>
					<TabPanel>{"<TopRatedTab />"}</TabPanel>
					<TabPanel>{"<UpcomingTab />"}</TabPanel>
				</Suspense>
			</Tabs>
		</main>
	);
};

export default Hub;
