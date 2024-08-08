import React, { useEffect, useState } from 'react';
interface MenuAboutUsProps {
    handleScreen: (screen: string) => void;
    page: string;
}
const MenuAboutUs: React.FC<MenuAboutUsProps> = ({ handleScreen, page }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (page === 'Our Vision') setActive(0);
        else if (page === 'Our Team') setActive(1);
        else if (page === 'Our Contact') setActive(2);
    }, [page]);
    const handleClick = (index: number) => {
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
    <div className='h-[10%] flex md:max-xl:mt-0 mt-4 justify-center items-end mb-6 '>
        <ul className=' w-fit  h-[50px] flex rounded-[37px] bg-[#70462D]'>
            {itemsMnu.map((item, index) => (
             <li 
                key={index}
                className={`flex cursor-pointer items-center max-md:text-[12px]  text-[14px] py-[14px] px-[25px] max-md:px-[10px] max-md:py-[5px] rounded-[37px] select-none 
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

export default MenuAboutUs;
