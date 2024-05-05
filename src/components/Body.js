import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Course from "../components/Course";
import Login from "./Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "/course",
      element: <Course></Course>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
      <div className="absolute opacity-55">
        <img
          alt="bg_image"
          src="https://themewagon.github.io/oneschool/images/hero_1.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Body;
