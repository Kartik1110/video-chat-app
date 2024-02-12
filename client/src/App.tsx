import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import UserTile from "./components/UserTile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/user",
      element: <>
        <UserTile height="50vh" width="50vh" />
        <UserTile height="50vh" width="50vh" />
      </>
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
