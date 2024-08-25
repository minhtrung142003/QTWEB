import { Link } from 'react-router-dom';
import './style.scss';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Search() {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Solution Technology', path: 'solution_technology' },
        { name: 'Solution Our Strength', path: 'solution_ourstrength' },
        { name: 'Solution Visualization', path: 'solution_visual' },
        { name: 'Showcase', path: 'showcase' },
        { name: 'Marketplace', path: 'marketplace' },
        { name: 'Our Vision', path: 'our-vision' },
        { name: 'Our Team', path: 'our-team' },
        { name: 'Contact Us', path: 'contact-us' },
    ];
    const [searchKey, setSearchKey] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>(
        searchKey.toLowerCase().trim().replace(/\s/g, '')
    );
    const [showSearch, setShowSearch] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const clearRef = useRef<HTMLDivElement>(null);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSearchKey(newValue);
        setSearchValue(newValue.toLowerCase().trim().replace(/\s/g, ''));
        setShowSearch(true);
    };
    const handleClickOutsideResult = (event: { target: any }) => {
        if (
            searchRef.current &&
            inputRef.current &&
            clearRef.current &&
            !searchRef.current.contains(event.target) &&
            !inputRef.current.contains(event.target) &&
            !clearRef.current.contains(event.target)
        ) {
            setShowSearch(false);
            setShowInput(false);
            if (inputRef.current) {
                inputRef.current.style.visibility = 'hidden';
            }
        }
    };

    useEffect(() => {
        // Add event listener when component mounts
        document.addEventListener('mousedown', handleClickOutsideResult);

        // Remove event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideResult);
        };
    }, []);
    return (
        <div className="search_container">
            <input
                className={`search_input ${
                    showInput ? `w-full visible` : `w-0 invisible`
                }`}
                value={searchKey}
                onChange={(e) => handleChange(e)}
                onFocus={() => setShowSearch(true)}
                ref={inputRef}
            />
            <div
                ref={clearRef}
                className={`icon-clear ${
                    showInput ? `visible opacity-100 ` : `invisible opacity-0`
                }`}
                onClick={() => {
                    setSearchKey('');
                    setSearchValue('');
                }}
            >
                <IoMdClose color="#ECECEC" size={20} />
            </div>

            <svg
                className={`icon-search ${
                    showInput ? `right-[90%] md:max-lg:right-[83%]` : `right-1`
                }`}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                    setShowInput(!showInput);
                    if (inputRef.current) {
                        inputRef.current.style.visibility = 'visible';
                        inputRef.current.focus();
                    }
                }}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.6941 12.8255C10.4624 13.8108 8.90001 14.4 7.2 14.4C3.22355 14.4 0 11.1764 0 7.19999C0 3.22355 3.22355 0 7.2 0C11.1765 0 14.4 3.22355 14.4 7.19999C14.4 8.90001 13.8108 10.4624 12.8255 11.6941L15.7657 14.6343C16.0781 14.9467 16.0781 15.4533 15.7657 15.7657C15.4533 16.0781 14.9467 16.0781 14.6343 15.7657L11.6941 12.8255ZM1.6 7.19999C1.6 4.1072 4.10721 1.6 7.2 1.6C10.2928 1.6 12.8 4.1072 12.8 7.19999C12.8 8.70878 12.2033 10.0782 11.2331 11.0852C11.2057 11.1062 11.1794 11.1293 11.1543 11.1543C11.1292 11.1794 11.1062 11.2057 11.0852 11.2331C10.0782 12.2033 8.70878 12.8 7.2 12.8C4.10721 12.8 1.6 10.2928 1.6 7.19999Z"
                    fill="#ECECEC"
                />
            </svg>

            <div
                ref={searchRef}
                className={`search_box ${showSearch && `flex`}`}
            >
                <div className="search_result">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            className={`hover:bg-[#d9d9d9] rounded-2xl py-1 px-2 ${
                                link.name
                                    .toLowerCase()
                                    .trim()
                                    .replace(/\s/g, '')
                                    .includes(searchValue)
                                    ? `flex`
                                    : `hidden`
                            } `}
                            to={link.path}
                            onClick={() => setShowSearch(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
