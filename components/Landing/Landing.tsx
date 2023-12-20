import { CSSProperties } from 'react';
import Image from 'next/image';
import ImageOne from '../../public/image1.png';
import ImageTwo from '../../public/image2.png';

const Landing = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const today = new Date();
  const dayName = days[today.getDay()];
  const monthName = months[today.getMonth()];
  const dayNumber = today.getDate();
  const year = today.getFullYear();

  const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${ImageTwo.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="text-center text-sm text-lime-950 font-normal tracking-[1rem] py-10">
          {dayName}, {monthName} {dayNumber}, {year}
        </h3>
        <h1 className="text-lime-950 text-[200px] font-normal text-center">
          zerowaste-quest
        </h1>
        <p className="text-center text-lime-950 text-xl font-medium w-[600px]">
          Join our whimsical ship sailing towards a greener future, reduce waste
          and become an Eco-Warrior. Dive headfirst into exciting challenges
          that take you closer to a sustainable lifestyle, one small step at a
          time.
        </p>
        <button className="w-[250px] h-[2.7em] text-2xl bg-black rounded-[10px] mt-5 text-white">
          Start Adventure
        </button>
        <Image
          src={ImageOne}
          alt="Black and white picture of nature"
          className="w-[1100px] h-[500px] py-10"
        />
      </div>
      <div style={backgroundStyle}>
        <h2 className="text-center text-white text-8xl font-normal tracking-widest">
          Waste not, want what's not.
        </h2>
      </div>
    </>
  );
};

export default Landing;
