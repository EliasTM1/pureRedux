import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./store.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

store.dispatch({ type: "account/deposit", payload: 250 });
console.log(store.getState(), "MY STATE");

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</ChakraProvider>
	</React.StrictMode>
);
