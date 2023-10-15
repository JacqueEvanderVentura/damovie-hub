import { ReactNode } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Topbar from "./components/Topbar";
import LoginForm from "./components/LoginForm";
import Hub from "./components/Hub";
import Footer from "./components/Footer";

function App(): ReactNode {
	const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

	return (
		<Router>
			<div className="flex flex-col bg-[#03067B] min-w-screen min-h-screen w-full h-full">
				<Topbar />
				<main className="flex justify-center min-h-screen flex-grow mx-5 md:mx-20 xl:mx-48">
					<Routes>
						<Route
							path="/"
							element={isLoggedIn ? <Navigate to="/hub" /> : <LoginForm />}
						/>
						<Route
							path="/login"
							element={isLoggedIn ? <Navigate to="/hub" /> : <LoginForm />}
						/>
						<Route
							path="/hub/*"
							element={isLoggedIn ? <Hub /> : <Navigate to="/login" />}
						/>
						<Route
							path="*"
							element={<Navigate to="/" />}
						/>
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
