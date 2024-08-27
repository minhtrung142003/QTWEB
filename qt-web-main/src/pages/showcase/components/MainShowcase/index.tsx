import ItemContainer from '@components/container/Container';
import TopRightMenu from '../TopRightMenu';
import VideoContainer from '../VideoContainer';
import { useState } from 'react';
import ShowcaseLeftMenu from '../leftMenu';
import ShowcaseRightMenu from '../RightMenu';
import ShowcaseBottomMenu from '../bottomMenu';

export default function MainShowcase() {
    const [videoIndex, setVideoIndex] = useState(0);
    const setVideo = (video: number) => {
        setVideoIndex(video);
    };
    return (
        <ItemContainer extraCss="md:max-lg:mt-8 rounded-tr-[0px] py-5 px-20 relative border-t-0 border-r-0">
            <TopRightMenu setVideo={setVideo} />
            <VideoContainer videoIndex={videoIndex} />
            <ShowcaseLeftMenu setVideo={setVideo} />
            <ShowcaseRightMenu />
            <ShowcaseBottomMenu setVideo={setVideo} />
        </ItemContainer>
    );
}
