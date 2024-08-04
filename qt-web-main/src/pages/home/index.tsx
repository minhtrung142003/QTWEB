import BackgroundVideo from '@pages/home/components/BackgroundVideo';
import Slogan from '@pages/home/components/Slogan';
import './style.css';
export default function Home() {
    return (
        <div className=" relative home-container">
            <BackgroundVideo />
            <Slogan />
        </div>
    );
}
