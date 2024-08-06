import React, { useEffect, useState } from 'react'
interface MenuAboutUsProps {
    handleScreen: (screen: string) => void;
    page: string;
}
const MenuAboutUs: React.FC<MenuAboutUsProps> = ({handleScreen, page}) => {
const [active, setActive] = useState(0);

useEffect(() => {
    if(page === 'Our Vision') setActive(0);
    else if(page === 'Our Team') setActive(1);
    else if(page === 'Our Contact') setActive(2);
}, [page]);
 const handleClick = (index:number) => {
        setActive(index);
    if(index === 1) {
        handleScreen('Our Team');
    }
    else if(index === 2 ) {
        handleScreen('Our Contact');
    }
    else if(index === 0 ) {
        handleScreen('Our Vision');
    }
 }
const itemsMnu = ['Our Vision', 'Our Team', 'Our Contact']
  return (  
    <div className=' flex w-full h-[10%] justify-center mb-6'>
        <ul className=' w-fit flex rounded-[37px] bg-[#70462D]'>
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