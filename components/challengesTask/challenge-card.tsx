import React, { useState } from "react";
import Image from "next/image";
import CupLogo from "@/public/coffee-cup.svg";
import { Badge } from "../ui/badge";
import { MdKeyboardArrowRight } from "react-icons/md";
import ChallengeModal from "./challenge-modal";


interface ChallengeDataProps {
  challengeData: {
    id: number;
    title: string;
    description: string;
    detailedDescription: string;
    duration: string;
    logo: string;
  }[];
}

const ChallengeCard = ({ challengeData }: ChallengeDataProps) => {
  const [showDetailModal, setShowDetailModal] = useState<number | null>(null);

  const handleShowDetailModal = (challengeId: number) => {
    setShowDetailModal(challengeId);
  };

  const handleCloseModal = () => {
    setShowDetailModal(null);
  };

  return (
    <div className="grid grid-cols-2 gap-4 items-center justify-center">
      {challengeData.map((item) => (
        <div key={item.id} className="w-full">
          <div className="w-full bg-black text-white rounded-full shadow flex gap-4 items-center">
            <div className="w-36 h-auto p-5 bg-white rounded-full flex items-center justify-center">
              <Image src={CupLogo} alt="Cup Logo" />
            </div>
            <div className="py-3">
              <div className="flex items-center gap-4">
                <h4 className="text-lime-300 text-md font-bold">
                  {item.title}
                </h4>
                <Badge>{item.duration}</Badge>
              </div>
              <p className="text-xs">{item.description}</p>
            </div>
            <div onClick={() => handleShowDetailModal(item.id)} className="cursor-pointer">
              <MdKeyboardArrowRight className="font-bold text-lime-700 h-10 w-10" />
            </div>
          </div>

          {showDetailModal === item.id && (
            <ChallengeModal
              key={item.id}
              challenge={item}
              onClose={handleCloseModal}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ChallengeCard;
