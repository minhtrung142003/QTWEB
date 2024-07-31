import AboutUs from "@pages/about us";
import Home from "@pages/home";
import ShowCase from "@pages/showcase/ShowCase";
import OurStrength from "@pages/solution/OurStrength";
import Solution from "@pages/solution/Solution";
import SolutionVisualization from "@pages/solution/SolutionVisualization";
import { RouteProps } from "react-router-dom";

const LayoutRoutes: RouteProps[] = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "solution_technology",
    element: <Solution />,
  },
  {
    path: "solution_ourstrength",
    element: <OurStrength />,
  },
  {
    path: "solution_visual",
    element: <SolutionVisualization />,
  },
  {
    path: "showcase",
    element: <ShowCase />,
  },
  {
    path: "our-vision",
    element: <AboutUs page="Our Vision" />,
  },
  {
    path: "our-team",
    element: <AboutUs page="Our Team" />,
  },
  {
    path: "contact-us",
    element: <AboutUs page="Our Contact" />,
  },
];

export default LayoutRoutes;