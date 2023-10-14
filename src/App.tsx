import { ReactNode } from "react";
import LoginForm from "./components/LoginForm";
import { useSelector } from "react-redux";

import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Hub from "./components/Hub";

function App(): ReactNode {
	const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

	return (
		<div className="flex flex-col bg-[#03067B] min-w-screen min-h-screen w-full h-full">
			<Topbar />
			<div className="flex-grow">{isLoggedIn ? <Hub /> : <LoginForm />}</div>
			<Footer />
		</div>
	);
}

export default App;
