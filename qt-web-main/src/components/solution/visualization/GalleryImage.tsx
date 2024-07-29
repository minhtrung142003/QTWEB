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

export default function GalleryImages() {
    return (
        <div className="container w-full h-full overflow-auto grid grid-cols-24 grid-rows-4 gap-y-2 gap-x-2">
            {/* row 1 */}
            <div
                className="md:max-xl:col-span-5 col-span-5 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${House1})`,
                }}
            ></div>

            <div
                className="md:max-xl:col-span-8 col-span-8 row-span-2 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${House3})`,
                }}
            ></div>
            <div
                className="md:max-xl:col-span-3 col-span-3 row-span-2 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${House4})`,
                }}
            ></div>
            <div
                className="md:max-xl:col-span-8 col-span-8 row-span-2 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${House5})`,
                }}
            ></div>
            <div
                className="md:max-xl:col-span-5 col-span-5 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${House2})`,
                }}
            ></div>
            {/* row 2 */}
            <div
                className="md:max-xl:col-span-4 col-span-4 row-span-2 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${House6})`,
                }}
            ></div>
            <div
                className="md:max-xl:col-span-8 col-span-8 row-span-2 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${House7})`,
                }}
            ></div>
            <div
                className="md:max-xl:col-span-8 col-span-8 row-span-2 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${House8})`,
                }}
            ></div>
            <div
                className="md:max-xl:col-span-4 col-span-4 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${House9})`,
                }}
            ></div>
            <div
                className="md:max-xl:col-span-4 col-span-4 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${House10})`,
                }}
            ></div>
        </div>
    );
}
