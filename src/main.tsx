import { ThemeProvider } from "next-themes";
import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { createApi } from "unsplash-js";

const queryClient = new QueryClient();
const unsplash = createApi({
  accessKey: "10ALd_pDJEJGZynHzf9FaPT8Y4W0vXXRhFwzaLzs1_8",
  fetch: fetch,
});

export const UnsplashContext = createContext(unsplash);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          <UnsplashContext.Provider value={unsplash}>
            <App />
          </UnsplashContext.Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
