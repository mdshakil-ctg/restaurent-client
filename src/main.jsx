
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ModalProvider } from "./components/Modal/ModalProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <div className="max-w-screen-xl mx-auto">
              <RouterProvider router={router} />
            </div>
          </ModalProvider>
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  
);
