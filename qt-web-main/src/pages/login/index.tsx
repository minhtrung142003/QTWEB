import { Box, Center, Text } from '@chakra-ui/react';
import './styles.scss';
import LogoForm from './components/logo-form';
import Form from './components/form';

const LoginRegister = () => {
    return (
        <Box className="login-register">
            <Center className="login-register_form">
                <Box className={`login-register_form-body relative`}>
                    <Box
                        className={`login-register_form-body-item translate-x-0 z-20`}
                    >
                        <LogoForm />
                    </Box>
                    <Box
                        className={`login-register_form-body-item lg:translate-x-full lg:z-10 z-30 lg:left-auto left-0`}
                    >
                        <Form />
                    </Box>
                </Box>
                <Box className="login-register_form-footer">
                    <Text
                        fontSize="12px"
                        fontWeight={400}
                        textAlign="center"
                        textShadow="2px 2px 5px rgba(0, 0, 0, 0.5)"
                        color="lightGray"
                        w="100%"
                    >
                        @ 2024 3DARCHTECH Login Form All Rights Reserved |
                        Design by
                        <span className="text-primary"> 3DARCHTECH</span>
                    </Text>
                </Box>
            </Center>
        </Box>
    );
};

export default LoginRegister;
