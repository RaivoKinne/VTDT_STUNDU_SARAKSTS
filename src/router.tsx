import { createBrowserRouter } from "react-router-dom";
import Grupas from "./components/Grupas";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/grupa/:id",
    element: <Grupas />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
