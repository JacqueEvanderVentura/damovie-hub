import { ReactElement } from "react";

import Avatar from "../../assets/svg/avatar-outlined.svg";
import DacodesLogo from "../../assets/svg/dacodes-logo.svg";

const Topbar = (): ReactElement => {
	return (
		<header className="flex flex-row justify-between px-10 py-3 bg-[#5141EA]">
			<img
				src={DacodesLogo}
				alt="Dacodes Logo"
				className="h-auto w-24 md:w-40 ml-0 sm:ml-6"
			/>
			<img
				src={Avatar}
				alt="Avatar"
				className="h-auto w-8 md:w-12"
			/>
		</header>
	);
};

export default Topbar;
