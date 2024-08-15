import { useState } from "react";
import "./styles.scss";
import ContainerMenu from "@components/containerMenu";
import Overview from "./components/overview";
import Consultation from "./components/consultation";
import Modeling from "./components/modeling";
import Rendering from "./components/rendering";
import MovieConcept from "./components/movieConcept";
import Panorama from "./components/panorama";

const listImages: string[] = [
  "Overview",
  "Consultation",
  "Modeling",
  "Rendering",
  "Movie Concept",
  "Panorama",
];

const listPages: JSX.Element[] = [
  <Overview />,
  <Consultation />,
  <Modeling />,
  <Rendering />,
  <MovieConcept />,
  <Panorama />,
];

const Visualization = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (e: number) => {
    setSelectedIndex(e);
  };

  return (
    <ContainerMenu
      activeIndex={selectedIndex}
      handleClick={handleClick}
      listItem={listImages}
    >
      {listPages[selectedIndex]}
    </ContainerMenu>
  );
};

export default Visualization;
