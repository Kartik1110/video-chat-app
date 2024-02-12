import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import ParticipantView from "./pages/ParticipantView";
import HostView from "./pages/HostView";

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
      path: "/participant",
      element: <ParticipantView />
    },
    {
      path: "/host",
      element: <HostView />
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
