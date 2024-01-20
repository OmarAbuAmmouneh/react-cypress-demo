import { Provider } from "react-redux";
import AppLoader from "./AppLoader";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import store from "@/state/store";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppLoader />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
