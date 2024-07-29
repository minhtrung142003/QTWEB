export function VisualizationCardBackground(props: any) {
    return (
        <svg
            className="absolute group-hover:drop-shadow-card-layout transition-all"
            width={props.width || 251}
            height={props.height || 390}
            viewBox="0 0 251 390"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M251 10C251 4.47715 246.523 0 241 0H10C4.47715 0 0 4.47715 0 10V380C0 385.523 4.47715 390 9.99999 390H59.0903C62.0847 390 64.9216 388.658 66.821 386.343L91.9995 355.657C93.8989 353.342 96.7358 352 99.7303 352H241C246.523 352 251 347.523 251 342V10Z"
                fill={props.fill || '#D9D9D9'}
            />
        </svg>
    );
}
