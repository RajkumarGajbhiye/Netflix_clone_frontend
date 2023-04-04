import App from "../App";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Watch from "../pages/Watch";


const route = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/series",
    element:<ProtectedRoute><Home type="series" /></ProtectedRoute> ,
  },
  {
    path: "/watch/:_id",
    element: <ProtectedRoute><Watch/></ProtectedRoute>,
  },
];

export default route;
