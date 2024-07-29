import './index.css';
import SideBar from '@components/commons/sidebar/sidebar';
import BackgroundVideo from '@components/home/BackgroundVideo';
import Slogan from '@components/home/Slogan';

export default function Home() {
    return (
        <div className="container w-screen p-[21px] h-dvh relative home-container">
            <BackgroundVideo />
            <SideBar type2={false} activeIndex={0} />
            <Slogan />
        </div>
    );
}
