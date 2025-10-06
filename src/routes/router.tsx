import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Index from "../pages/Index";
import Lesson from "../pages/Lesson";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/basicMap",
    element: <Index />,
  },
  {
    path: '/lesson/:id',
    element: <Lesson />
  }
]);

export default router;