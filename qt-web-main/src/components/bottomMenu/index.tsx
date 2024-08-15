import "./styles.scss";

interface IBottomMenu {
  listItem: string[];
  handleClick: (e: number) => void;
  activeIndex: number;
}

const BottomMenu = ({ handleClick, listItem, activeIndex }: IBottomMenu) => {
  return (
    <div className="bottomMenu">
      {listItem.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`bottomMenu__item ${
            index === activeIndex && "bottomMenu__item-selected"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default BottomMenu;
