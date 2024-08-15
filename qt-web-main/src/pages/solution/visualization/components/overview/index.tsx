import "./styles.scss";
import Gallery1 from "@assets/solution/visualization/gallery1.png";
import Gallery2 from "@assets/solution/visualization/gallery2.png";
import Gallery3 from "@assets/solution/visualization/gallery3.png";
import Gallery4 from "@assets/solution/visualization/gallery4.png";
import Gallery5 from "@assets/solution/visualization/gallery5.png";
import Gallery6 from "@assets/solution/visualization/gallery6.png";
import Gallery7 from "@assets/solution/visualization/gallery7.png";
import Gallery8 from "@assets/solution/visualization/gallery8.png";
import CardOver from "./components/cardOver";

const listCard = [
  {
    title: "Consultation",
    listIcon: [Gallery1, Gallery2, Gallery3],
    sub: "We offer customized UI based on your needs and requirements",
  },
  {
    title: "Modeling",
    listIcon: [Gallery1, Gallery2, Gallery3],
    sub: "We offer customized UI based on your needs and requirements",
  },
  {
    title: "Rendering",
    listIcon: [Gallery4, Gallery5, Gallery6],
    sub: "We offer customized UI based on your needs and requirements",
  },
  {
    title: "Movie Concept",
    listIcon: [Gallery7, Gallery4, Gallery8],
    sub: "We offer customized UI based on your needs and requirements",
  },
  {
    title: "Panorama",
    listIcon: [Gallery1, Gallery2, Gallery3],
    sub: "We offer customized UI based on your needs and requirements",
  },
];

const Overview = () => {
  return (
    <div className="visualization__overview">
      <h1 className="visualization__overview-title">
        We can offer you <span className="text-[#945C3C]">more</span> than that
      </h1>
      <div className="visualization__overview-content">
        {listCard.map((item, index) => (
          <CardOver
            key={index}
            title={item.title}
            listIcon={item.listIcon}
            sub={item.sub}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;
