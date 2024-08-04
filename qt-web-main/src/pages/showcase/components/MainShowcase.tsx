import ItemContainer from '@components/container/Container';
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
