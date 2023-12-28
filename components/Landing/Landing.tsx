import { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageOne from "../../public/image1.png";
import ImageTwo from "../../public/image2.png";
import ImageThree from "../../public/man1.png";
import ImageFour from "../../public/woman1.png";
import ImageFive from "../../public/man2.png";

const Landing = () => {
  const warriors = [
    {
      name: "Stephen",
      image: ImageThree,
      description: "Chief Green-Ninja",
    },
    {
      name: "Benedicta",
      image: ImageFour,
      description: "Eco Warrior Princess",
    },
    {
      name: "Emmanuel",
      image: ImageFive,
      description: "Sir Sustainability",
    },
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const dayName = days[today.getDay()];
  const monthName = months[today.getMonth()];
  const dayNumber = today.getDate();
  const year = today.getFullYear();

  const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${ImageTwo.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
  };

  const overlayStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="text-center text-sm text-lime-950 font-normal tracking-[1rem] py-10">
          {dayName}, {monthName} {dayNumber}, {year}
        </h3>
        <h1 className="text-lime-950 text-[100px] md:text-5xl lg:text-6xl font-normal text-center">
          zerowaste-quest
        </h1>
        <p className="text-center text-lime-950 text-lg md:text-base lg:text-lg xl:text-xl font-medium w-full md:w-[600px] lg:w-[800px]">
          Join our whimsical ship sailing towards a greener future, reduce waste
          and become an Eco-Warrior. Dive headfirst into exciting challenges
          that take you closer to a sustainable lifestyle, one small step at a
          time.
        </p>
        <button className="w-[250px] h-[2.7em] text-2xl bg-black rounded-[10px] mt-5 text-white">
          <Link href="/signup">Start Adventure</Link>
        </button>
        <Image
          src={ImageOne}
          alt="Black and white picture of nature"
          className="w-full md:w-[1100px] h-[500px] py-10"
        />
      </div>
      <div style={backgroundStyle}>
        <h2 className="text-center text-white text-8xl md:text-4xl lg:text-5xl font-normal tracking-widest">
          Waste not, want what&apos;s not.
        </h2>
        <div
          className="bg-[#2C3C24CC] bg-opacity-80"
          style={overlayStyle}
        ></div>
      </div>
      <div className="bg-[#2A3C24] px-[8%] flex flex-col gap-8">
        <div className=" pt-16">
          <h2 className="text-white text-4xl font-normal py-8">
            Challenges galore!
          </h2>
          <div className="text-white font-normal text-base flex justify-between">
            <p className="w-[476px]">
              From recycling rubbish to adopting renewable energy, our
              challenges cater to every eco-warrior&apos;s ambition. Scroll through,
              select and set personal goals. Saving Earth just became more fun
              and satisfying!
            </p>
            <p className="w-[476px]">
              From recycling rubbish to adopting renewable energy, our
              challenges cater to every eco-warrior&apos;s ambition. Scroll through,
              select and set personal goals. Saving Earth just became more fun
              and satisfying!
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center py-[10%]">
          {warriors.map((warrior) => {
            return (
              <div key={warrior.name}>
              <div className="flex flex-col items-center">
                <Image src={warrior.image} alt="Picture of a person" />
                <h3 className="text-lime-400 text-base font-normal">
                  {warrior.name}
                </h3>
                <p className="text-white text-base font-normal">
                  {warrior.description}
                </p>
              </div>
              </div>
            );
          })}
        </div>
        <div>
            <h2>got curly questions?</h2>
        </div>
        <div>
            <p className="text-lime-200 text-base font-bold">©2023 EcoChallenge. All (green) rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Landing;
