import { useEffect, useState } from 'react';
import './styles.scss';
import ContainerMenu from '@components/containerMenu';
import OurVision from './components/ourVision';
import OurTeam from './components/ourTeam';
import OurContact from './components/ourContact';
import { useNavigate } from 'react-router-dom';
const listImages: string[] = ['OurVision', 'OurTeam', 'OurContact'];

const listPages: JSX.Element[] = [<OurVision />, <OurTeam />, <OurContact />];

interface IAboutUsProps {
    indexPage?: number;
}

const AboutUs = ({ indexPage = 0 }: IAboutUsProps) => {
    const [selectedIndex, setSelectedIndex] = useState(indexPage);

    const navigator = useNavigate();

    const handleClick = (e: number) => {
        e === 0
            ? navigator('/our-vision')
            : e === 1
            ? navigator('/our-team')
            : navigator('/contact-us');
    };

    useEffect(() => {
        setSelectedIndex(indexPage);
    }, [indexPage]);

    return (
        <ContainerMenu
            activeIndex={selectedIndex}
            handleClick={handleClick}
            listItem={listImages}
        >
            {listPages[selectedIndex]}
        </ContainerMenu>
    );
};

export default AboutUs;
