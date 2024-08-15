import { MenuBar } from "@assets/svg/MenuBar";
import "./menuhome.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface MenuHomeProps {
  type: string;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}
const MenuHome: React.FC<MenuHomeProps> = ({
  type = "ver1",
  active,
  setActive,
}) => {
  const items = [
    { name: "Home", link: "/" },
    { name: "Solution", link: "/solution_technology" },
    { name: "Showcase", link: "/showcase" },
    { name: "Marketplace", link: "/marketplace" },
    { name: "About Us", link: "/about_us" },
  ];
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    switch (currentPath) {
      case "/":
        setActiveIndex(0);
        break;
      case "/solution_technology":
      case "/solution_ourstrength":
      case "/solution_visual":
        setActiveIndex(1);
        break;
      case "/showcase":
        setActiveIndex(2);
        break;
      case "/marketplace":
        setActiveIndex(3);
        break;
      case "/about-us":
      case "/our-vision":
      case "/our-team":
      case "/contact-us":
        setActiveIndex(4);
        break;
      default:
        setActiveIndex(0);
    }
  }, [currentPath]);
  const [activeIndex, setActiveIndex] = useState(active);
  function handleClick(index: number) {
    setActiveIndex(index);
    setActive(index);
  }
  return (
    <nav className="menu-home ml-[32px]">
      <ul className=" flex flex-row items-center py-[10px] laptop:px-2 laptop:py-[15px] rounded-[61px] relative menu-home-list ">
        {items.map((item, index) =>
          item.name === "Solution" ? (
            <li
              key={index}
              className={`home-item hover-item group relative font-bold hover:shadow-none hover:text-hover-color  transition-[width] duration-500 ${
                index === activeIndex ? "text-active-color active" : ""
              } `}
            >
              {item.name}

              <div className="pt-4 md:pt-3 group group-hover:flex hidden left-[0px] absolute">
                <ul
                  className="flex flex-col p-[4px] rounded-[10px] "
                  style={{
                    background: "rgb(236, 236, 236, 0.7)",
                    boxShadow: "3px 3px #989a9a",
                  }}
                >
                  <li
                    className="home-item-dropdown"
                    onClick={() => handleClick(index)}
                  >
                    <Link to="/solution_technology">Technology</Link>
                  </li>
                  <li
                    className="home-item-dropdown"
                    onClick={() => handleClick(index)}
                  >
                    <Link to="/solution_ourstrength">Our Strengths</Link>
                  </li>
                  <li
                    className="home-item-dropdown"
                    onClick={() => handleClick(index)}
                  >
                    <Link to="/solution_visual">Visualization</Link>
                  </li>
                </ul>
              </div>
            </li>
          ) : item.name === "About Us" ? (
            <li
              key={index}
              className={`home-item hover-item group min-w-max relative hover:text-hover-color  transition-[width] duration-500 ${
                index === activeIndex ? "text-active-color active" : ""
              } `}
            >
              {item.name}
              <div className="pt-4 group group-hover:flex hidden left-[0px] absolute">
                <ul
                  className="flex flex-col p-[4px] rounded-[10px]"
                  style={{
                    background: "rgb(236, 236, 236, 0.7)",
                    boxShadow: "3px 3px #989A9A",
                  }}
                >
                  <li
                    className="home-item-dropdown"
                    onClick={() => handleClick(index)}
                  >
                    <Link to="/our-vision">Our Vision</Link>
                  </li>
                  <li
                    className="home-item-dropdown"
                    onClick={() => handleClick(index)}
                  >
                    {" "}
                    <Link to="/our-team">Our Team</Link>
                  </li>
                  <li
                    className="home-item-dropdown"
                    onClick={() => handleClick(index)}
                  >
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <li
              key={index}
              className={`home-item hover-item hover:text-hover-color  transition-[width] duration-500 ${
                index === activeIndex ? "text-active-color active" : ""
              } `}
              onClick={() => handleClick(index)}
            >
              <Link to={`${item.link}`}>{item.name}</Link>
            </li>
          )
        )}

        {type == "ver2" && (
          <li className="home-item">
            <MenuBar />
          </li>
        )}
      </ul>
    </nav>
  );
};
export default MenuHome;
