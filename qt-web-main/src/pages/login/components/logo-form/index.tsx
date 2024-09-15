import { Box, Image } from '@chakra-ui/react';
import logo from '@assets/images/logo-full.png';
import './styles.scss';

interface ILogoForm {}

const LogoForm = ({}: ILogoForm) => {
    return (
        <Box className="logoForm lg:block hidden">
            <Box className="logoForm_logo">
                <Image
                    src={logo}
                    zIndex={20}
                    w="90%"
                    filter="drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.5))"
                />
            </Box>
        </Box>
    );
};

export default LogoForm;
