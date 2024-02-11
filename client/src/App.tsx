import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
