import ItemContainer from '@components/commons/container/Container';
import SideBar from '@components/commons/sidebar/sidebar';
import TopRightMenu from './TopRightMenu';
import ImageContainer from './ImageContainer';

export default function MainShowcase() {
    return (
        <ItemContainer extraCss="rounded-tr-[0px] py-5 px-20 relative border-t-0 border-r-0">
            <TopRightMenu />
            <ImageContainer />
        </ItemContainer>
    );
}
