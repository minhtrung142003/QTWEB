import "./styles.scss";

interface ICardTeam {
  work: string;
  sub: string;
}

const CardTeam = ({ sub, work }: ICardTeam) => {
  return (
    <div className="cardTeam">
      <div className="cardTeam__avatar"></div>
      <div className="cardTeam__info">
        <div className="cardTeam__work">{work}</div>
        <div className="cardTeam__sub">{sub}</div>
      </div>
    </div>
  );
};

export default CardTeam;
