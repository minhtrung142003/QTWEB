import React from "react";
import magni from "@assets/showcase/magnifying-glass 2.png";
const LeftShow: React.FC = () => {
  return (
    <div
      className=" 
        w-screen 
        h-screen
        justify-center
        items-center
        flex
        pt-[90px]
        pb-[10px]
        
      "
    >
      <div
        className="
          overflow-auto
          w-full
          h-full
          md:mx-10
          mx-5
          rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] 
          border-2 
          container 
          backdrop-blur-2xl
          
          "
      >
        {/* tiêu đề */}
        <h1
          className="
              my-2
              md:ml-[30px]
              lg:mx-[80px]
              x912:mx-[50px]
              xl:mx-[37px]
              relative 
              inline-block 
              font-medium 
              md:text-[30px]
              lg:text-[40px]
              xl:text-[32px]
              "
        >
          <span className="font-medium text-colorWhite">
            <span>Together, we bring</span>
            <span className="text-gainsboro-200"> </span>
          </span>
          <b className="text-colorOrgane ">
            <span>your buidlings</span>
            <span className="text-whitesmoke-100"> </span>
          </b>
          <span className="text-whitesmoke-100 text-colorWhite ">
            <span className="font-medium">to life.</span>
          </span>
        </h1>
        {/* row 3 */}
        <div
          className="
            md:mt-[20px]
            lg:mt-[50px]
            xl:mt-0
            x3l:mt-[100px]
            md:grid 
            md:grid-cols-1
            xl:grid 
            xl:grid-cols-3 
            absolute 
            gap-x-[26px]
            md:gap-y-[25px] 
            lg:gap-y-[70px] 
            x912:gap-y-[30px]
            xl:gap-y-[27px] 
            x3l:gap-x-[100px]
            md:ml-[40px]
            lg:ml-[70px]
            xl:ml-[39px]
            "
        >
          {/* item 0 */}
          <div
            className="
                  box-border
                  md:w-[200px]
                  xl:w-[234px]
                  x3l:w-[330px]
                  md:h-[150px]
                  xl:h-[177px]
                  x3l:h-[300px]
                 rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] 
                 border-[2px] 
               
                "
          >
            <div
              className="
                    flex flex-row 
                    items-start 
                    justify-end 
                    pt-[24px]
                    md:pr-[60px]
                    xl:pr-[87px]
                    xl:pl-[88px]
                    md:mx-[10px]
                    xl:mx-0

                "
            >
              <img
                className="
                h-[60px] 
                x3l:h-[140px]
                w-[59px]
                x3l:w-[200px] 
                relative 
                "
                loading="lazy"
                alt=""
                src={magni}
              />
            </div>
            <div
              className="
                relative 
                capitalize 
                inline-block 
                border-2
                text-center
                rounded-[35px]
                bg-[#FFFFFF]
                opacity-66
                font-semibold
                md:text-[13px]
                xl:text-[14px]
                x3l:text-[24px]
                md:w-[100px]
                xl:w-[140px]
                x3l:w-[250px]
                mx-[45px]
                mt-[7px]
                x3l:mt-[15px]
                md:h-[22px]
                xl:h-[27px]
                x3l:h-[50px]
              "
            >
              Customized UI
            </div>
            <div
              className="
              self-stretch 
              relative
              md:text-[10px]
              x3l:text-[18px]
              xl:text-xs 
              text-text-color 
              z-[1] 
              md:mx-[23px]
              xl:mx-[27px]
              md:mt-[1px]
              xl:mt-[10px]
              x3l:mt-[15px]
              inline-block
            "
            >
              We offer customized UI based on
              <div className="pl-[9px]">your needs and requirements</div>
            </div>
          </div>
          {/* item 1 */}
          <div
            className="
                  box-border
                  md:w-[200px]
                  xl:w-[234px]
                  x3l:w-[330px]
                  md:h-[150px]
                  xl:h-[177px]
                  x3l:h-[300px]
                 rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] 
                 border-[2px] 
               
                "
          >
            <div
              className="
                    flex flex-row 
                    items-start 
                    justify-end 
                    pt-[24px]
                    md:pr-[60px]
                    xl:pr-[87px]
                    xl:pl-[88px]
                    md:mx-[10px]
                    xl:mx-0

                "
            >
              <img
                className="
                h-[60px] 
                x3l:h-[140px]
                w-[59px]
                x3l:w-[200px] 
                relative 
                "
                loading="lazy"
                alt=""
                src={magni}
              />
            </div>
            <div
              className="
                relative 
                capitalize 
                inline-block 
                border-2
                text-center
                rounded-[35px]
                bg-[#FFFFFF]
                opacity-66
                font-semibold
                md:text-[13px]
                xl:text-[14px]
                x3l:text-[24px]
                md:w-[100px]
                xl:w-[140px]
                x3l:w-[250px]
                mx-[45px]
                mt-[7px]
                x3l:mt-[15px]
                md:h-[22px]
                xl:h-[27px]
                x3l:h-[50px]
              "
            >
              Customized UI
            </div>
            <div
              className="
              self-stretch 
              relative
              md:text-[10px]
              x3l:text-[18px]
              xl:text-xs 
              text-text-color 
              z-[1] 
              md:mx-[23px]
              xl:mx-[27px]
              md:mt-[1px]
              xl:mt-[10px]
              x3l:mt-[15px]
              inline-block
            "
            >
              We offer customized UI based on
              <div className="pl-[9px]">your needs and requirements</div>
            </div>
          </div>
          {/* item 2 */}
          <div
            className="
                  box-border
                  md:w-[200px]
                  xl:w-[234px]
                  x3l:w-[330px]
                  md:h-[150px]
                  xl:h-[177px]
                  x3l:h-[300px]
                  xl:mt-[630px]
                  2xl:mt-0
                 rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] 
                 border-[2px] 
               
                "
          >
            <div
              className="
                    flex flex-row 
                    items-start 
                    justify-end 
                    pt-[24px]
                    md:pr-[60px]
                    xl:pr-[87px]
                    xl:pl-[88px]
                    md:mx-[10px]
                    xl:mx-0

                "
            >
              <img
                className="
                h-[60px] 
                x3l:h-[140px]
                w-[59px]
                x3l:w-[200px] 
                relative 
                "
                loading="lazy"
                alt=""
                src={magni}
              />
            </div>
            <div
              className="
                relative 
                capitalize 
                inline-block 
                border-2
                text-center
                rounded-[35px]
                bg-[#FFFFFF]
                opacity-66
                font-semibold
                md:text-[13px]
                xl:text-[14px]
                x3l:text-[24px]
                md:w-[100px]
                xl:w-[140px]
                x3l:w-[250px]
                mx-[45px]
                mt-[7px]
                x3l:mt-[15px]
                md:h-[22px]
                xl:h-[27px]
                x3l:h-[50px]
              "
            >
              Customized UI
            </div>
            <div
              className="
              self-stretch 
              relative
              md:text-[10px]
              x3l:text-[18px]
              xl:text-xs 
              text-text-color 
              z-[1] 
              md:mx-[23px]
              xl:mx-[27px]
              md:mt-[1px]
              xl:mt-[10px]
              x3l:mt-[15px]
              inline-block
            "
            >
              We offer customized UI based on
              <div className="pl-[9px]">your needs and requirements</div>
            </div>
          </div>
          
          
        </div>
        {/* row 6 */}
        <div
          className="
            md:grid 
            md:grid-cols-3 
            lg:grid
            lg:grid-cols-3
            xl:grid
            xl:grid-cols-2
            2xl:grid
            2xl:grid-cols-3
            md:gap-x-[15px] 
            lg:gap-x-[80px]
            x912:gap-x-[67px]
            xl:gap-x-[26px] 
            x3l:gap-x-[100px]
            absolute
            lg:gap-y-[37px]
            gap-y-[27px]
            x3l:gap-y-[100px]
            md:ml-[40px]
            lg:ml-[70px]
            xl:ml-[39px]
            md:mt-[560px]
            lg:mt-[750px]
            xl:mt-[202px]
            x3l:mt-[500px]
            
            "
          >
            {/* item 1 */}
            <div
            className="
                  box-border
                  md:w-[200px]
                  xl:w-[234px]
                  x3l:w-[330px]
                  md:h-[150px]
                  xl:h-[177px]
                  x3l:h-[300px]
                 rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] 
                 border-[2px] 
               
                "
          >
            <div
              className="
                    flex flex-row 
                    items-start 
                    justify-end 
                    pt-[24px]
                    md:pr-[60px]
                    xl:pr-[87px]
                    xl:pl-[88px]
                    md:mx-[10px]
                    xl:mx-0

                "
            >
              <img
                className="
                h-[60px] 
                x3l:h-[140px]
                w-[59px]
                x3l:w-[200px] 
                relative 
                "
                loading="lazy"
                alt=""
                src={magni}
              />
            </div>
            <div
              className="
                relative 
                capitalize 
                inline-block 
                border-2
                text-center
                rounded-[35px]
                bg-[#FFFFFF]
                opacity-66
                font-semibold
                md:text-[13px]
                xl:text-[14px]
                x3l:text-[24px]
                md:w-[100px]
                xl:w-[140px]
                x3l:w-[250px]
                mx-[45px]
                mt-[7px]
                x3l:mt-[15px]
                md:h-[22px]
                xl:h-[27px]
                x3l:h-[50px]
              "
            >
              Customized UI
            </div>
            <div
              className="
              self-stretch 
              relative
              md:text-[10px]
              x3l:text-[18px]
              xl:text-xs 
              text-text-color 
              z-[1] 
              md:mx-[23px]
              xl:mx-[27px]
              md:mt-[1px]
              xl:mt-[10px]
              x3l:mt-[15px]
              inline-block
            "
            >
              We offer customized UI based on
              <div className="pl-[9px]">your needs and requirements</div>
            </div>
          </div>
          {/* item 2 */}
          <div
            className="
                  box-border
                  md:w-[200px]
                  xl:w-[234px]
                  x3l:w-[330px]
                  md:h-[150px]
                  xl:h-[177px]
                  x3l:h-[300px]
                 rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] 
                 border-[2px] 
               
                "
          >
            <div
              className="
                    flex flex-row 
                    items-start 
                    justify-end 
                    pt-[24px]
                    md:pr-[60px]
                    xl:pr-[87px]
                    xl:pl-[88px]
                    md:mx-[10px]
                    xl:mx-0

                "
            >
              <img
                className="
                h-[60px] 
                x3l:h-[140px]
                w-[59px]
                x3l:w-[200px] 
                relative 
                "
                loading="lazy"
                alt=""
                src={magni}
              />
            </div>
            <div
              className="
                relative 
                capitalize 
                inline-block 
                border-2
                text-center
                rounded-[35px]
                bg-[#FFFFFF]
                opacity-66
                font-semibold
                md:text-[13px]
                xl:text-[14px]
                x3l:text-[24px]
                md:w-[100px]
                xl:w-[140px]
                x3l:w-[250px]
                mx-[45px]
                mt-[7px]
                x3l:mt-[15px]
                md:h-[22px]
                xl:h-[27px]
                x3l:h-[50px]
              "
            >
              Customized UI
            </div>
            <div
              className="
              self-stretch 
              relative
              md:text-[10px]
              x3l:text-[18px]
              xl:text-xs 
              text-text-color 
              z-[1] 
              md:mx-[23px]
              xl:mx-[27px]
              md:mt-[1px]
              xl:mt-[10px]
              x3l:mt-[15px]
              inline-block
            "
            >
              We offer customized UI based on
              <div className="pl-[9px]">your needs and requirements</div>
            </div>
          </div>
          {/* item 3 */}
          <div
            className="
                  box-border
                  md:w-[200px]
                  xl:w-[234px]
                  x3l:w-[330px]
                  md:h-[150px]
                  xl:h-[177px]
                  x3l:h-[300px]
                 rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] 
                 border-[2px] 
               
                "
          >
            <div
              className="
                    flex flex-row 
                    items-start 
                    justify-end 
                    pt-[24px]
                    md:pr-[60px]
                    xl:pr-[87px]
                    xl:pl-[88px]
                    md:mx-[10px]
                    xl:mx-0

                "
            >
              <img
                className="
                h-[60px] 
                x3l:h-[140px]
                w-[59px]
                x3l:w-[200px] 
                relative 
                "
                loading="lazy"
                alt=""
                src={magni}
              />
            </div>
            <div
              className="
                relative 
                capitalize 
                inline-block 
                border-2
                text-center
                rounded-[35px]
                bg-[#FFFFFF]
                opacity-66
                font-semibold
                md:text-[13px]
                xl:text-[14px]
                x3l:text-[24px]
                md:w-[100px]
                xl:w-[140px]
                x3l:w-[250px]
                mx-[45px]
                mt-[7px]
                x3l:mt-[15px]
                md:h-[22px]
                xl:h-[27px]
                x3l:h-[50px]
              "
            >
              Customized UI
            </div>
            <div
              className="
              self-stretch 
              relative
              md:text-[10px]
              x3l:text-[18px]
              xl:text-xs 
              text-text-color 
              z-[1] 
              md:mx-[23px]
              xl:mx-[27px]
              md:mt-[1px]
              xl:mt-[10px]
              x3l:mt-[15px]
              inline-block
            "
            >
              We offer customized UI based on
              <div className="pl-[9px]">your needs and requirements</div>
            </div>
          </div>
          {/* item 4 */}
          <div
            className="
                  box-border
                  md:w-[200px]
                  xl:w-[234px]
                  x3l:w-[330px]
                  md:h-[150px]
                  xl:h-[177px]
                  x3l:h-[300px]
                 rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] 
                 border-[2px] 
               
                "
          >
            <div
              className="
                    flex flex-row 
                    items-start 
                    justify-end 
                    pt-[24px]
                    md:pr-[60px]
                    xl:pr-[87px]
                    xl:pl-[88px]
                    md:mx-[10px]
                    xl:mx-0

                "
            >
              <img
                className="
                h-[60px] 
                x3l:h-[140px]
                w-[59px]
                x3l:w-[200px] 
                relative 
                "
                loading="lazy"
                alt=""
                src={magni}
              />
            </div>
            <div
              className="
                relative 
                capitalize 
                inline-block 
                border-2
                text-center
                rounded-[35px]
                bg-[#FFFFFF]
                opacity-66
                font-semibold
                md:text-[13px]
                xl:text-[14px]
                x3l:text-[24px]
                md:w-[100px]
                xl:w-[140px]
                x3l:w-[250px]
                mx-[45px]
                mt-[7px]
                x3l:mt-[15px]
                md:h-[22px]
                xl:h-[27px]
                x3l:h-[50px]
              "
            >
              Customized UI
            </div>
            <div
              className="
              self-stretch 
              relative
              md:text-[10px]
              x3l:text-[18px]
              xl:text-xs 
              text-text-color 
              z-[1] 
              md:mx-[23px]
              xl:mx-[27px]
              md:mt-[1px]
              xl:mt-[10px]
              x3l:mt-[15px]
              inline-block
            "
            >
              We offer customized UI based on
              <div className="pl-[9px]">your needs and requirements</div>
            </div>
          </div>
          {/* item 5 */}
          <div
            className="
                  box-border
                  md:w-[200px]
                  xl:w-[234px]
                  x3l:w-[330px]
                  md:h-[150px]
                  xl:h-[177px]
                  x3l:h-[300px]
                 rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] 
                 border-[2px] 
               
                "
          >
            <div
              className="
                    flex flex-row 
                    items-start 
                    justify-end 
                    pt-[24px]
                    md:pr-[60px]
                    xl:pr-[87px]
                    xl:pl-[88px]
                    md:mx-[10px]
                    xl:mx-0

                "
            >
              <img
                className="
                h-[60px] 
                x3l:h-[140px]
                w-[59px]
                x3l:w-[200px] 
                relative 
                "
                loading="lazy"
                alt=""
                src={magni}
              />
            </div>
            <div
              className="
                relative 
                capitalize 
                inline-block 
                border-2
                text-center
                rounded-[35px]
                bg-[#FFFFFF]
                opacity-66
                font-semibold
                md:text-[13px]
                xl:text-[14px]
                x3l:text-[24px]
                md:w-[100px]
                xl:w-[140px]
                x3l:w-[250px]
                mx-[45px]
                mt-[7px]
                x3l:mt-[15px]
                md:h-[22px]
                xl:h-[27px]
                x3l:h-[50px]
              "
            >
              Customized UI
            </div>
            <div
              className="
              self-stretch 
              relative
              md:text-[10px]
              x3l:text-[18px]
              xl:text-xs 
              text-text-color 
              z-[1] 
              md:mx-[23px]
              xl:mx-[27px]
              md:mt-[1px]
              xl:mt-[10px]
              x3l:mt-[15px]
              inline-block
            "
            >
              We offer customized UI based on
              <div className="pl-[9px]">your needs and requirements</div>
            </div>
          </div>
          {/* item 6 */}
          <div
            className="
                  box-border
                  md:w-[200px]
                  xl:w-[234px]
                  x3l:w-[330px]
                  md:h-[150px]
                  xl:h-[177px]
                  x3l:h-[300px]
                 rounded-2xl [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_0.35),_rgba(228,_228,_228,_0.7))] 
                 border-[2px] 
               
                "
          >
            <div
              className="
                    flex flex-row 
                    items-start 
                    justify-end 
                    pt-[24px]
                    md:pr-[60px]
                    xl:pr-[87px]
                    xl:pl-[88px]
                    md:mx-[10px]
                    xl:mx-0

                "
            >
              <img
                className="
                h-[60px] 
                x3l:h-[140px]
                w-[59px]
                x3l:w-[200px] 
                relative 
                "
                loading="lazy"
                alt=""
                src={magni}
              />
            </div>
            <div
              className="
                relative 
                capitalize 
                inline-block 
                border-2
                text-center
                rounded-[35px]
                bg-[#FFFFFF]
                opacity-66
                font-semibold
                md:text-[13px]
                xl:text-[14px]
                x3l:text-[24px]
                md:w-[100px]
                xl:w-[140px]
                x3l:w-[250px]
                mx-[45px]
                mt-[7px]
                x3l:mt-[15px]
                md:h-[22px]
                xl:h-[27px]
                x3l:h-[50px]
              "
            >
              Customized UI
            </div>
            <div
              className="
              self-stretch 
              relative
              md:text-[10px]
              x3l:text-[18px]
              xl:text-xs 
              text-text-color 
              z-[1] 
              md:mx-[23px]
              xl:mx-[27px]
              md:mt-[1px]
              xl:mt-[10px]
              x3l:mt-[15px]
              inline-block
            "
            >
              We offer customized UI based on
              <div className="pl-[9px]">your needs and requirements</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftShow;
