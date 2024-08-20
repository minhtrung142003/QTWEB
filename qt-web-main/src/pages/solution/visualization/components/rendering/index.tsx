import './styles.scss';
import House1 from '@assets/solution/visualization/house1.png';
import House2 from '@assets/solution/visualization/house2.png';
import House3 from '@assets/solution/visualization/house3.png';
import House4 from '@assets/solution/visualization/house4.png';
import House5 from '@assets/solution/visualization/house5.png';
import House6 from '@assets/solution/visualization/house6.png';
import House7 from '@assets/solution/visualization/house7.png';
import House8 from '@assets/solution/visualization/house8.png';
import House9 from '@assets/solution/visualization/house9.png';
import House10 from '@assets/solution/visualization/house10.png';

const Rendering = () => {
    return (
        <div className="visualization__rendering">
            <div className="visualization__rendering-row">
                <img
                    src={House1}
                    alt=""
                    className="visualization__rendering-card md:max-xl:col-span-9 col-span-5 row-span-1"
                />
                <img
                    src={House3}
                    alt=""
                    className="visualization__rendering-card md:max-xl:col-span-15 col-span-8 row-span-2"
                />
                <img
                    src={House2}
                    alt=""
                    className="visualization__rendering-card xl:hidden col-span-9 row-span-1"
                />
                <img
                    src={House4}
                    alt=""
                    className="visualization__rendering-card md:max-xl:col-span-5 col-span-3 row-span-2"
                />
                <img
                    src={House5}
                    alt=""
                    className="visualization__rendering-card md:max-xl:col-span-19 col-span-8 row-span-2"
                />
                <img
                    src={House2}
                    alt=""
                    className="visualization__rendering-card md:max-xl:hidden md:max-xl:col-span-8 col-span-5 row-span-1"
                />
            </div>
            <div className="visualization__rendering-row">
                <img
                    src={House6}
                    alt=""
                    className="visualization__rendering-card md:max-xl:col-span-8 col-span-4 row-span-2"
                />
                <img
                    src={House7}
                    alt=""
                    className="visualization__rendering-card md:max-xl:col-span-16 col-span-8 row-span-2"
                />
                <img
                    src={House8}
                    alt=""
                    className="visualization__rendering-card md:max-xl:col-span-15 col-span-8 row-span-2"
                />
                <img
                    src={House9}
                    alt=""
                    className="visualization__rendering-card md:max-xl:col-span-9 col-span-4 row-span-1"
                />
                <img
                    src={House10}
                    alt=""
                    className="visualization__rendering-card md:max-xl:col-span-9 col-span-4 row-span-1"
                />
            </div>
        </div>
    );
};

export default Rendering;
