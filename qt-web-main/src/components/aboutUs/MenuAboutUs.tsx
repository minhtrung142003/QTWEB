import React, { useState } from 'react'
interface MenuAboutUsProps {
    handleScreen: (screen: string) => void;
}
const MenuAboutUs: React.FC<MenuAboutUsProps> = ({handleScreen}) => {
const [active, setActive] = useState(0);
 const handleClick = (index:number) => {
        setActive(index);
    if(index === 1) {
        handleScreen('Our Team');
    }
    else if(index === 2 ) {
        handleScreen('Our Contact');
    }
    else if(index === 0 ) {
        handleScreen('Our Visions');
    }
 }
const itemsMnu = ['Our Visions', 'Our Team', 'Our Contact']
  return (  
    <div className='container flex w-full justify-center'>
        <ul className='container w-fit flex rounded-[37px] bg-[#70462D]'>
            {itemsMnu.map((item, index) => (
             <li 
                key={index}
                className={`flex text-[14px] py-[14px] items-center rounded-[37px] px-[25px]
                     ${active === index
                         ? 'bg-white text-active-color font-bold'
                         : 'text-white'
                         }`}
                onClick= {() => handleClick(index)}
            >
                    {item}
                </li>
                
            ))}
           
        </ul>
    </div>
  )
}

export default MenuAboutUs