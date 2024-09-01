import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
import Jobs from "./components/jobPages/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/userProfile/profile";
import JobDetail from "./components/jobPages/JobDetail";
import Companies from "./components/admin/Companies";
import CreateCompany from "./components/admin/CreateCompany";
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

    // recruiter routes
    {
      path: "/admin/companies",
      element: <Companies />,
    },

    {
      path: "/admin/companies/create",
      element: <CreateCompany />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
