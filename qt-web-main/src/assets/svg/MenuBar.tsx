export function MenuBar() {
    return (
        <svg
            width={26}
            height={18}
            viewBox="0 0 26 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_48_545)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 9.5C2 8.94772 2.44772 8.5 3 8.5H21C21.5523 8.5 22 8.94772 22 9.5C22 10.0523 21.5523 10.5 21 10.5H3C2.44772 10.5 2 10.0523 2 9.5Z"
                    fill="#F2F2F2"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 3.5C2 2.94772 2.44772 2.5 3 2.5H21C21.5523 2.5 22 2.94772 22 3.5C22 4.05228 21.5523 4.5 21 4.5H3C2.44772 4.5 2 4.05228 2 3.5Z"
                    fill="#F2F2F2"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 15.5C2 14.9477 2.44772 14.5 3 14.5H21C21.5523 14.5 22 14.9477 22 15.5C22 16.0523 21.5523 16.5 21 16.5H3C2.44772 16.5 2 16.0523 2 15.5Z"
                    fill="#F2F2F2"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_48_545"
                    x={0}
                    y={0.5}
                    width={26}
                    height={20}
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx={1} dy={1} />
                    <feGaussianBlur stdDeviation={1.5} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_48_545"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_48_545"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}
