interface ItemContainerProps {
    children: React.ReactNode;
    extraCss?: string;
    className?: string;
}
const ItemContainer: React.FC<ItemContainerProps> = ({
    children,
    extraCss,
    className,
}) => {
    return (
        <div
            className={`w-full h-full rounded-2xl border-2 border-solid border-[rgba(255, 255, 255, 0.3)] ${className}  ${extraCss}`}
            style={{
                background: 'rgba(240, 240, 240, 0.35)',
                backdropFilter: 'blur(3px)',
            }}
        >
            {children}
        </div>
    );
};
export default ItemContainer;
