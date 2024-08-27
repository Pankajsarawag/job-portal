import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDetail from "./components/JobDetail";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/jobs",
      element: <Jobs />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/job/detail/:id",
      element: <JobDetail />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
