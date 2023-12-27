import React from "react";
import Image from "next/image";
import CupLogo from "@/public/coffee-cup.svg";
import { Badge } from "../ui/badge";
import { PiArrowArcRightBold } from "react-icons/pi";

interface ChallengeDataProps {
  challengeData: {
    title: string;
    description: string;
    duration: string;
    logo: string;
  }[];
}

const ChallengeCard = ({ challengeData }: ChallengeDataProps) => {
  return (
    <div className="grid grid-col-2">
      {challengeData.map((item, index) => (
        <div className="h-20 w-1/2 bg-black text-white rounded-[100px] shadow">
          <div className="w-20 h-20 bg-white rounded-full">
            <Image src={CupLogo} alt="Cup Logo" />
          </div>
          <div>
            <div className="inline-flex items-center gap-4">
              <h4>{item.title}</h4>
              <Badge>{item.duration}</Badge>
            </div>
            <h4>{item.duration}</h4>
          </div>
          <div>
            <PiArrowArcRightBold className='font-bold text-lime-700'/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChallengeCard;
