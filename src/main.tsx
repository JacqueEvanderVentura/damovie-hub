import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./logic/store";
import "./styles.scss";

const rootElement = document.getElementById("root");

if (rootElement instanceof HTMLElement) {
	ReactDOM.createRoot(rootElement).render(
		<Provider store={store}>
			<App />
		</Provider>
	);
}
