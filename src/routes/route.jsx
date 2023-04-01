import App from "../App";
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
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  // {
  //   path: "/movies",
  //   element: <Home type = "movie"/>,
  // },
  {
    path: "/series",
    element: <Home type="series" />,
  },
  {
    path: "/watch/:_id",
    element: <Watch />,
  },
];

export default route;
