import LeftShow from "@components/showcase/LeftShow";
import RightShow from "@components/showcase/RightShow";
import React from "react";

const Showcase: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full, my-auto mx-auto">
      <div className="flex flex-row items-start justify-center gap-[10px]">
        <LeftShow />
        <RightShow />
      </div>
    </div>
  );
};

export default Showcase;
