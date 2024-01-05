'use client'

import React, { useState } from "react";
import Image from "next/image";
import CupLogo from "@/public/coffee-cup.svg";
import { Badge } from "../ui/badge";
import { MdKeyboardArrowRight } from "react-icons/md";
import ChallengeModal from "./challenge-modal";
import AddChallengeModal from "./addChallengeModal";
import { PiPlus } from "react-icons/pi";
import { db } from "@/config/firebase";
import { collection, addDoc } from "firebase/firestore";


type ChallengeFormData = {
  title: string;
  description: string;
  duration: string;
};

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
  const [isChallengeModalOpen, setChallengeModalOpen] = useState(false);

  const handleShowDetailModal = (challengeId: number) => {
    setShowDetailModal(challengeId);
  };

  const handleCloseModal = () => {
    setShowDetailModal(null);
  };

  const handleOpenChallengeModal = () => {
    setChallengeModalOpen(true);
  };

  const handleCloseChallengeModal = () => {
    setChallengeModalOpen(false);
  };

  const handleAddChallenge = async (challenge: ChallengeFormData) => {
    try {
      // Add the challenge to Firestore
      const challengesRef = collection(db, 'challenges');
      await addDoc(challengesRef, { challenge });
      console.log(`Added challenge to Firestore: ${challenge}`);
    } catch (error) {
      console.error('Error adding challenge to Firestore:', error);
    } finally {
      handleCloseChallengeModal();
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-md bg-transparent p-4 h-36 w-full border-2 border-dashed border-lime-600 flex items-center justify-center">
        <button
          onClick={handleOpenChallengeModal}
          className="inline-flex items-center gap-3 font-bold text-2xl text-gray-500 hover:text-lime-700"
        >
          <span>
            <PiPlus className=''/>
          </span>{" "}
          Add Challenge
        </button>
      </div>
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
              <div
                onClick={() => handleShowDetailModal(item.id)}
                className="cursor-pointer"
              >
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
      {/* Challenge Modal */}
      <AddChallengeModal
        isOpen={isChallengeModalOpen}
        onClose={handleCloseChallengeModal}
        onAddChallenge={handleAddChallenge}
      />
    </div>
  );
};

export default ChallengeCard;
