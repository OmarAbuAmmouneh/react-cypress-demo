import { Provider } from "react-redux";
import AppLoader from "./AppLoader";
import store from "state/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const App = () => {


	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
					<AppLoader />
			</ThemeProvider>
		</Provider>
	);
};

export default App;
