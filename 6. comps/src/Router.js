import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import App from "./App";
import ModalPage from "./pages/ModalPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/accordion",
      element: (
        <App>
          <AccordionPage />
        </App>
      ),
    },
    {
      path: "/buttons",
      element: (
        <App>
          <ButtonPage />
        </App>
      ),
    },
    {
      path: "/",
      element: (
        <App>
          <DropdownPage />
        </App>
      ),
    },
    {
      path: "/modal",
      element: (
        <App>
          <ModalPage />
        </App>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
