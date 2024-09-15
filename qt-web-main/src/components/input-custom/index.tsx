import {
    Box,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useBoolean,
} from '@chakra-ui/react';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface IInputCustom {
    placeholder?: string;
    icon?: JSX.Element;
    height?: string;
    width?: string;
    isRequest?: boolean;
    helperText?: string;
    setValue?: Dispatch<SetStateAction<string | undefined>>;
    value?: string;
    label?: ReactNode;
    require?: boolean;
    colorLabel?: string;
    bgInput?: string;
    borderColor?: string;
    isPassword?: boolean;
    showPassword?: () => void;
}

const InputCustom = ({
    placeholder,
    icon,
    height,
    width,
    isRequest,
    helperText,
    setValue,
    label,
    require,
    colorLabel,
    bgInput = 'unset',
    borderColor = '#BEC2CA',
    isPassword,
    value,
    showPassword,
}: IInputCustom) => {
    const [focused, isFocused] = useBoolean(false);
    const [text, setText] = useState(value);

    return (
        <Box w={width || '100%'} h="fit-content">
            <FormControl className=" w-full h-full ">
                {label && (
                    <FormLabel
                        sx={{ color: colorLabel }}
                        fontWeight={600}
                        fontSize="14px"
                    >
                        {label}
                        {require && <span style={{ color: 'red' }}> *</span>}
                    </FormLabel>
                )}
                <InputGroup
                    h={height || '40px'}
                    w="100%"
                    zIndex={1}
                    onFocus={isFocused.on}
                    onBlur={isFocused.off}
                    rounded={'.8rem'}
                    border="1px solid"
                    borderColor={borderColor || 'rgba(190, 194, 202, 1)'}
                    className="relative"
                >
                    <Input
                        className="outline-none p-2"
                        width="100%"
                        height="100%"
                        fontSize="15px"
                        fontFamily="Outfit"
                        color="black"
                        rounded=".8rem"
                        type={isPassword ? 'password' : 'text'}
                        sx={{
                            bg:
                                text === '' || text === undefined
                                    ? bgInput
                                    : 'bg.white',
                        }}
                        onChange={
                            setValue
                                ? (event) => {
                                      setValue(event.target.value);
                                      setText(event.target.value);
                                  }
                                : (event) => setText(event.target.value)
                        }
                        value={value}
                    />
                    <InputRightElement
                        paddingRight="16px"
                        height="100%"
                        width="30px"
                        cursor="pointer"
                        onClick={showPassword}
                    >
                        {icon}
                    </InputRightElement>
                    {placeholder && !focused && !text && (
                        <Box className="w-fit h-full absolute top-0 left-[1rem] flex items-center z-0 pointer-events-none">
                            <Text
                                className="w-fit"
                                fontSize="1.6rem"
                                color="lightGrey"
                            >
                                {placeholder}
                            </Text>

                            {isRequest && (
                                <Text
                                    className="w-fit"
                                    fontSize="1.6rem"
                                    color="red"
                                >
                                    {' '}
                                    *
                                </Text>
                            )}
                        </Box>
                    )}
                </InputGroup>

                {helperText && (
                    <FormHelperText
                        color="rgba(255, 0, 0, 1)"
                        fontSize="1.2rem"
                    >
                        {helperText}
                    </FormHelperText>
                )}
            </FormControl>
        </Box>
    );
};

export default InputCustom;
