import Slogan from '@pages/home/components/slogan';
import BackgroundVideo from './components/backGroundVideo';

export default function Home() {
    return (
        <div className="h-full relative">
            <BackgroundVideo />
            <Slogan />
        </div>
    );
}
