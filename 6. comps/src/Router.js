import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import HomePage from "./pages/HomePage";


function Router() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/accordion",
      element: <AccordionPage />,
    },
    {
      path: "/button",
      element: <ButtonPage />,
    },
    {
      path: "/dropdown",
      element: <DropdownPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;