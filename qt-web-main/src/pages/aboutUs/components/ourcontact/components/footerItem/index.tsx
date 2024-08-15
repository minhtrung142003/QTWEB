interface IFooterItem {
  title: string;
  sub: string;
  isBorder?: boolean;
}

const FooterItem = ({ sub, title, isBorder = true }: IFooterItem) => {
  return (
    <div
      className={`w-full h-full py-3 flex flex-col items-center justify-center gap-[18px] ${
        isBorder && "border-r-[1px]"
      } border-[#945C3C]`}
    >
      <div
        className="px-10 py-[5px] rounded-full bg-[#945C3C] text-white text-[13px] font-bold"
        style={{ fontFamily: "Inter" }}
      >
        {title}
      </div>
      <div className="w-full text-center text-[16px] font-[500] text-[#464646]">
        {sub}
      </div>
    </div>
  );
};
export default FooterItem;
