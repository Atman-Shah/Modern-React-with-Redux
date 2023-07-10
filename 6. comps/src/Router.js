import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import App from "./App";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

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
    {
      path: "/table",
      element: (
        <App>
          <TablePage />
        </App>
      ),
    },
    {
      path: "/counter",
      element: (
        <App>
          <CounterPage initialCount={10} />
        </App>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
