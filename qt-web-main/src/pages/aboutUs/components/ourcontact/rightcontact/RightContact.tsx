import React from "react";
import ContentRight1 from "./ContentRight1";
import ContentRight2 from "./ContentRight2";
const RightContact: React.FC = () => {
  return (
    <div className="container_rightcontact lg:max-xl:ml-5 2xl:ml-4  overflow-y-auto overflow-x-hidden">
      <ContentRight1 />
      <div className="flex items-end mt-auto">
        <ContentRight2 />
      </div>
    </div>
  );
};

export default RightContact;
