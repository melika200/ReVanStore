import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Store, { persistor } from "./Pages/Redux/Store.jsx";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
