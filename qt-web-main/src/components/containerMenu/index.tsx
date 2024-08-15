import BottomMenu from "@components/bottomMenu";
import "./styles.scss";
import { ReactNode } from "react";

interface IContainerMenu {
  children: ReactNode;
  listItem: string[];
  handleClick: (e: number) => void;
  activeIndex: number;
}

const ContainerMenu = ({
  children,
  handleClick,
  listItem,
  activeIndex,
}: IContainerMenu) => {
  return (
    <div className="containerMenu">
      <div className="containerMenu__content">{children}</div>
      <div className="containerMenu__menu">
        <BottomMenu
          activeIndex={activeIndex}
          handleClick={handleClick}
          listItem={listItem}
        />
      </div>
    </div>
  );
};

export default ContainerMenu;
