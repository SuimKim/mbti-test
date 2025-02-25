import { Provider } from "react-redux";
import Router from "./shared/Router";
import store from "./redux/configStore.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Router />
        </Provider>
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
};

export default App;
