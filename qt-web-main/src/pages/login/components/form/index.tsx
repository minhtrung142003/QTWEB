import {
    Box,
    Button,
    Center,
    Checkbox,
    CircularProgress,
    Divider,
    Text,
} from '@chakra-ui/react';
import './styles.scss';
import { useState } from 'react';
import InputCustom from '@components/input-custom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faInstagram,
    faSkype,
} from '@fortawesome/free-brands-svg-icons';
import useAuth from '@hooks/useAuth';

const Form = () => {
    const [email, setEmail] = useState<string | undefined>('');
    const [password, setPassword] = useState<string | undefined>('');
    const [showPassword, setShowPassword] = useState(false);
    const { isLoading, helperEmail, helperPassword, handleLogin } = useAuth(
        email,
        password
    );
    const onSubmit = () => {
        handleLogin();
    };
    return (
        <Center className="form">
            {isLoading && (
                <Center
                    className="w-full h-full absolute top-0 left-0 z-50"
                    bg={'white'}
                >
                    <CircularProgress value={80} isIndeterminate />
                </Center>
            )}
            <Box className="form_body">
                <Text
                    fontSize="30px"
                    fontWeight={500}
                    letterSpacing="2px"
                    textAlign="center"
                    textShadow="2px 2px 5px rgba(0, 0, 0, 0.3)"
                    color="primary"
                    w="100%"
                    className="text-primary"
                >
                    LOGIN NOW
                </Text>
                <InputCustom
                    label="Email"
                    setValue={setEmail}
                    value={email}
                    colorLabel="black"
                    helperText={helperEmail || ''}
                    bgInput="white"
                    borderColor="grey"
                    icon={
                        <FontAwesomeIcon
                            icon={faUser}
                            color="black"
                            fontSize="14px"
                        />
                    }
                />
                <InputCustom
                    label="Password"
                    setValue={setPassword}
                    value={password}
                    colorLabel="black"
                    isPassword={!showPassword}
                    helperText={helperPassword || ''}
                    bgInput="white"
                    borderColor="grey"
                    icon={
                        showPassword ? (
                            <FontAwesomeIcon
                                icon={faEyeSlash}
                                color="black"
                                fontSize="14px"
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faEye}
                                color="black"
                                fontSize="14px"
                            />
                        )
                    }
                    showPassword={() => setShowPassword(!showPassword)}
                />

                <Box className="form_row">
                    <Checkbox defaultChecked size={'lg'} colorScheme="orange">
                        <Text
                            color="black"
                            fontWeight={500}
                            textShadow="0px 0px 5px rgba(0, 0, 0, 0.1)"
                        >
                            Remember me
                        </Text>
                    </Checkbox>
                    <Text
                        color="black"
                        fontWeight={500}
                        fontSize={'1rem'}
                        textShadow="0px 0px 5px rgba(0, 0, 0, 0.1)"
                        className="form_row-text"
                    >
                        Forgot Password?
                    </Text>
                </Box>

                <Box className="w-full bg-primary text-white flex justify-center items-center rounded-lg h-[40px] ">
                    <Button
                        className="w-full hover:bg-[#e8f0fe] hover:text-primary"
                        variant={'solid'}
                        colorScheme="primary"
                        onClick={onSubmit}
                    >
                        LOGIN
                    </Button>
                </Box>

                <Divider w="100%" h="1px" className="bg-primary" />
                <Box className="w-full h-fit flex gap-[1.6rem] justify-center">
                    <Center
                        className="w-[38px] h-[38px] rounded-2xl bg-primary cursor-pointer"
                        onClick={() => {
                            window.open(
                                'https://www.facebook.com/profile.php?id=100068490675716'
                            );
                        }}
                    >
                        <FontAwesomeIcon icon={faFacebookF} fontSize="18px" />
                    </Center>
                    <Center
                        className="w-[38px] h-[38px] rounded-2xl bg-primary cursor-pointer"
                        onClick={() => {
                            window.open(
                                'https://www.facebook.com/profile.php?id=100068490675716'
                            );
                        }}
                    >
                        <FontAwesomeIcon icon={faSkype} fontSize="18px" />
                    </Center>
                    <Center
                        className="w-[38px] h-[38px] rounded-2xl bg-primary cursor-pointer"
                        onClick={() => {
                            window.open(
                                'https://www.facebook.com/profile.php?id=100068490675716'
                            );
                        }}
                    >
                        <FontAwesomeIcon icon={faInstagram} fontSize="18px" />
                    </Center>
                </Box>
            </Box>
        </Center>
    );
};

export default Form;
