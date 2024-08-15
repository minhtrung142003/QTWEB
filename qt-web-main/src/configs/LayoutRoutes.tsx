import AboutUs from "@pages/aboutUs";
import Home from "@pages/home";
import MarketPlace from "@pages/marketplace";
import ShowCase from "@pages/showcase";
import OurStrength from "@pages/solution/ourstrength";
import Technology from "@pages/solution/technology";
import Visualization from "@pages/solution/visualization";
import { RouteProps } from "react-router-dom";

const LayoutRoutes: RouteProps[] = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "solution_technology",
    element: <Technology />,
  },
  {
    path: "solution_ourstrength",
    element: <OurStrength />,
  },
  {
    path: "solution_visual",
    element: <Visualization />,
  },
  {
    path: "showcase",
    element: <ShowCase />,
  },
  {
    path: "marketplace",
    element: <MarketPlace />,
  },
  {
    path: "our-vision",
    element: <AboutUs indexPage={0} />,
  },
  {
    path: "our-team",
    element: <AboutUs indexPage={1} />,
  },
  {
    path: "contact-us",
    element: <AboutUs indexPage={2} />,
  },
];

export default LayoutRoutes;
