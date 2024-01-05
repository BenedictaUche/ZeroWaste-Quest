"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CupLogo from "@/public/coffee-cup.svg";
import { Badge } from "@/components/ui/badge";
import { MdKeyboardArrowRight } from "react-icons/md";
import ChallengeModal from "@/components/challengesTask/challenge-modal";
import AddChallengeModal from "@/components/challengesTask/addChallengeModal";
import { PiPlus } from "react-icons/pi";
import { db } from "@/config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

type ChallengeFormData = {
  title: string;
  description: string;
  duration: string;
};

interface ChallengeDataProps {
  challenge: any;
  pageSize: number;
  onClose: () => void;
}

const AvailableChallenges: React.FC<ChallengeDataProps> = () => {
  const [showDetailModal, setShowDetailModal] = useState<number | any>(null);
  const [challenges, setChallenges] = useState<
    { [x: string]: any; id: string }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const challengesPerPage = 3;

  const handleShowDetailModal = (challengeId: number) => {
    setShowDetailModal(challengeId);
  };

  const handleCloseModal = () => {
    setShowDetailModal(null);
  };

  const indexOfLastChallenge = currentPage * challengesPerPage;
  const indexOfFirstChallenge = indexOfLastChallenge - challengesPerPage;
  const currentChallenges = challenges.slice(indexOfFirstChallenge, indexOfLastChallenge);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);



  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const challengesRef = collection(db, "challenges");
        const challengesSnapshot = await getDocs(challengesRef);
        const challengesData = challengesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setChallenges(challengesData);
        console.log(challenges);
      } catch (error) {
        console.error("Error fetching challenges from Firestore:", error);
      }
    };

    fetchChallenges();
  }, []);

  return (
    <div className="flex flex-col gap-6 px-8 mt-[7%] mb-10">
      <h4 className='text-black font-bold text-4xl py-4'>Available Challenges</h4>
      <div className="grid grid-cols-1 gap-4 items-center justify-center">
        {currentChallenges.map((item) => (
          <div key={item.id} className="w-full">
            <div className="w-full bg-black text-white rounded-full shadow flex gap-4 items-center">
              <div className=" w-28 h-auto p-5 bg-white rounded-full flex items-center justify-center">
                <Image src={CupLogo} alt="Cup Logo" />
              </div>
              <div className="py-3">
                <div className="flex items-center gap-4">
                  <h4 className="text-lime-300 text-md font-bold">
                    {item.challenge.title}
                  </h4>
                  <Badge>{item.challenge.duration}</Badge>
                </div>
                <p className="text-xs">{item.challenge.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <div
                  onClick={() => handleShowDetailModal(Number(item.id))}
                  className="cursor-pointer"
                >
                  <MdKeyboardArrowRight className="font-bold text-lime-700 h-10 w-10" />
                </div>
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
      <div className="flex justify-center items-center space-x-4 mt-4">
        {Array.from({ length: Math.ceil(challenges.length / challengesPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded-full ${currentPage === index + 1 ? 'bg-lime-500 text-white' : 'bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvailableChallenges;
