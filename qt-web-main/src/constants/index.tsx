import magni from "@assets/solution/magnifying-glass 2.png";
export function MenuBar() {
  return (
    <svg
      width={26}
      height={18}
      viewBox="0 0 26 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_48_545)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 9.5C2 8.94772 2.44772 8.5 3 8.5H21C21.5523 8.5 22 8.94772 22 9.5C22 10.0523 21.5523 10.5 21 10.5H3C2.44772 10.5 2 10.0523 2 9.5Z"
          fill="#F2F2F2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 3.5C2 2.94772 2.44772 2.5 3 2.5H21C21.5523 2.5 22 2.94772 22 3.5C22 4.05228 21.5523 4.5 21 4.5H3C2.44772 4.5 2 4.05228 2 3.5Z"
          fill="#F2F2F2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 15.5C2 14.9477 2.44772 14.5 3 14.5H21C21.5523 14.5 22 14.9477 22 15.5C22 16.0523 21.5523 16.5 21 16.5H3C2.44772 16.5 2 16.0523 2 15.5Z"
          fill="#F2F2F2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_48_545"
          x={0}
          y={0.5}
          width={26}
          height={20}
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={1} dy={1} />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_48_545"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_48_545"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
export function CardBackground() {
  return (
    <svg
      className="absolute group-hover:drop-shadow-card-layout transition-all"
      width={251}
      height={390}
      viewBox="0 0 251 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // style={{ filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M251 10C251 4.47715 246.523 0 241 0H10C4.47715 0 0 4.47715 0 10V380C0 385.523 4.47715 390 9.99999 390H59.0903C62.0847 390 64.9216 388.658 66.821 386.343L91.9995 355.657C93.8989 353.342 96.7358 352 99.7303 352H241C246.523 352 251 347.523 251 342V10Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}
interface RightArrowProps {
  className: string;
}
export function RightArrow({ className }: RightArrowProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-4 font-bold"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

export function ContainerShowCase() {
  return (
    <svg
      className="right-5  md:top-[-45%] xl:top-[-47%] absolute z-10"
      width="40%"
      height="100%"
      viewBox="0 0 540 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_140_815" fill="white">
        <path d="M24.5993 5.83407C27.6386 2.14023 32.1711 0 36.9546 0L524 0C532.837 0 540 7.16344 540 16V40C540 49.8366 532.837 57 524 57H16.3847C8 57 4 47.2733 4 40.8341L24.5993 5.83407Z" />
      </mask>
      <path
        d="M24.5993 5.83407C27.6386 2.14023 32.1711 0 36.9546 0L524 0C532.837 0 540 7.16344 540 16V40C540 49.8366 532.837 57 524 57H16.3847C8 57 4 47.2733 4 40.8341L24.5993 5.83407Z"
        fill="url(#paint0_linear_140_815)"
        fillOpacity="0.7"
      />
      <defs>
        <linearGradient id="paint0_linear_140_815">
          <stop stopColor="#F0F0F0" stopOpacity="0.5" />
          <stop offset="1" stopColor="#E4E4E4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SolutionOurStrength() {
  return (
    <div className="px-2 md:py-3 xl:py-1 w-full xl:h-[95%] xxxl:h-full 
                  rounded-2xl opacity-75 [background:linear-gradient(126.92deg,_rgba(240,_240,_240,_1),_rgba(228,_228,_228,_1))] 
                  text-center flex flex-col items-center justify-center  
                  group  border-2 hover:border-[#945c3c] hover:shadow-hover transition-all  ">
      <img src={magni} alt="Icon" className="md:w-16 xl:w-[59px] md:h-14 xl:h-[60px] xl:mt-[24px] 2xl:mt-4 -translate-y-2 " />
      <div className=" bg-[#FFFFFF] opacity-66 rounded-full md:w-[90px] xl:w-[140px] md:h-[17px] xl:h-[27px] flex items-center justify-center group-hover:bg-[#945c3c]  ">
        <h3 className="font-bold md:text-[10px] xl:text-sm  group-hover:text-white">Customized UI</h3>
      </div>
      <p className="md:text-[8px] xl:text-[10px] xxxl:text-[11px] 2xl:text-xs mt-[6px]">
        We offer customized UI based on your needs and requirements
      </p>
    </div>
  );
}

export function ItemOurVision() {
  return (
    <div className="container">
      <svg
        className="md:h-48 xl:h-full md:mt-5 xl:mt-0"
        width="244"
        height="235"
        viewBox="0 0 244 235"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.8"
          d="M244 6.18481C244 2.87111 241.314 0.184814 238 0.184814L6.42696 0.184814C1.80046 0.184814 -1.08531 5.19979 1.23946 9.19977L62.2477 114.17C63.3311 116.034 63.3311 118.336 62.2477 120.2L1.23946 225.17C-1.08531 229.17 1.80046 234.185 6.42696 234.185H238C241.314 234.185 244 231.499 244 228.185V6.18481Z"
          fill="#DBB487"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col justify-start items-start ml-[78px] mt-14 ">
        <h3 className="font-bold text-[16px] text-[#64402B]">TIÊU ĐỀ CHÍNH</h3>
        <p className="md:text-[12px] xl:text-[14px] font-normal text-[#64402B] mt-2 -mb-[2px] ">
          Mô tả kỹ hơn về mục 
        </p>
        <span className="md:text-[12px] xl:text-[14px] font-normal text-[#64402B] -mb-[2px]">
        tiêu của giai đoạn này.
        </span>
        <span className="md:text-[12px] xl:text-[14px] font-normal text-[#64402B] -mb-[2px]">
          Dài ba dòng.
        </span>
        <div className="md:text-[12px] xl:text-[14px] font-normal text-[#64402B] mt-6">
          <span className="underline-container z-50">
            <a className="mr-1 -my-1" href="">
              Link tham khảo
            </a>
            <RightArrow className="ml-1" />
          </span>
        </div>
      </div>
    </div>
  );
}
