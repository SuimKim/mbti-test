import { Provider } from "react-redux";
import store from "./redux/configStore.js";
import Router from "./shared/Router";
import { useState } from "react";

const App = () => {
  // const queryClient = new QueryClient();
  useQ;
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router />
      </Provider>
    </QueryClientProvider>
  );
};
export default App;
