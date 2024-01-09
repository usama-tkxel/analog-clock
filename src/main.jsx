import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";

import App from "./App";
import Loader from "./components/general/loader/loader.spinner";

import "react-toastify/dist/ReactToastify.css";
import "./assets/global.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Suspense fallback={<Loader />}>
              <App />
            </Suspense>
            <ToastContainer hideProgressBar theme="colored" autoClose={false} />
          </BrowserRouter>
          {/* <ReactQueryDevtools/> */}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
