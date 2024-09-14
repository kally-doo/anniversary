'use client';
import moment from "moment";
import CountUp from "react-countup";
const DayCount = () => {

    const startDate = moment('16-09-2022', 'DD-MM-YYYY');
    const currentDate = moment();
    const days = currentDate.diff(startDate, 'days');

    return (
            <div className="bg-[url('/image/heart.png')] bg-cover bg-center w-96 h-96 rounded-full flex flex-col justify-between items-center font-extrabold text-white py-16">
                <p className="text-2xl text-center w-1/3 font-[family-name:var(--font-jetBrainsMono)]">Bên nhau</p>
                <CountUp
                className="text-9xl font-[family-name:var(--font-handjet)]"
                    end={days}
                    duration={5}
                />
                <p className="text-2xl w-1/3 text-center font-[family-name:var(--font-jetBrainsMono)]">Ngày</p>
        </div>
    );
}

export default DayCount;