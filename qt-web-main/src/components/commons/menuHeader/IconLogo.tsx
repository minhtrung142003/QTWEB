import React from 'react'

const IconLogo: React.FC = () => {
  return (
    <div>
         <div className="absolute top-[0px] left-[834px] rounded-tl rounded-tr-lg rounded-br-lg rounded-bl w-[557px] flex flex-row items-end justify-center py-5 pr-5 pl-[21px] box-border gap-[15px] bg-[url('/public/frame-18@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[790px] max-w-full z-[2] mq450:flex-wrap">
          <img
            className="h-[790px] w-[557px] relative rounded-tl rounded-tr-lg rounded-br-lg rounded-bl object-cover hidden max-w-full"
            alt=""
            src="/public/rectangle-26@2x.png"
          />

          <div className="h-1.5 w-1.5 relative rounded-18xl bg-off-white z-[3]"></div>
          <div className="h-1.5 w-1.5 relative rounded-18xl bg-gray box-border z-[3] border-[0.5px] border-solid border-silver"></div>
          <div className="h-1.5 w-1.5 relative rounded-18xl bg-gray box-border z-[3] border-[0.5px] border-solid border-silver"></div>
          <div className="h-1.5 w-1.5 relative rounded-18xl bg-gray box-border z-[3] border-[0.5px] border-solid border-silver"></div>
          <div className="h-1.5 w-1.5 relative rounded-18xl bg-gray box-border z-[3] border-[0.5px] border-solid border-silver"></div>
          <div className="h-1.5 w-1.5 relative rounded-18xl bg-gray box-border z-[3] border-[0.5px] border-solid border-silver"></div>
          <div className="h-1.5 w-1.5 relative rounded-18xl bg-gray box-border z-[3] border-[0.5px] border-solid border-silver"></div>
        </div>
        <a className="[text-decoration:none] absolute top-[29px] left-[23px] text-[20px] capitalize font-bold text-brown-dark mq450:text-base">
          Logo công ty
        </a>
    </div>
  )
}

export default IconLogo