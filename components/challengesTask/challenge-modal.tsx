import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { PiX } from "react-icons/pi";
import { updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { addDays, getUnixTime } from 'date-fns';
import { db } from '@/config/firebase';

interface ChallengeModalProps {
  challenge: {
    id: number;
    title: string;
    description: string;
    detailedDescription: string;
    duration: string;
    logo: string;
  };
  onClose: () => void;
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({ challenge, onClose, }) => {

  const [ isJoined, setIsJoined ] = useState(false);

  const handleJoinChallenge = async () => {
    try {
      // Update user data in Firebase to indicate they have joined the challenge
      // For example, assuming you have a 'users' collection
      await updateDoc(doc(db, 'users', userId), {
        joinedChallenges: {
          [challenge.id]: {
            joinedAt: serverTimestamp(),
          },
        },
      });
      setIsJoined(true);

      setTimeout(() => {
        onClose();
      }, 3000); // Close after 3 seconds

      // Start a 7-day countdown for the challenge
      const challengeEndTime = addDays(new Date(), 7);
      const challengeEndTimestamp = getUnixTime(challengeEndTime);

      // Save the challenge end timestamp in Firebase
      await updateDoc(doc(db, 'challenges', challenge.id), {
        endTime: challengeEndTimestamp,
      });
    } catch (error) {
      console.error('Error joining challenge:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-100 w-1/2 rounded-lg p-10 relative">
        <div className="flex items-center gap-4">
          <div className="w-36 h-auto p-5 bg-white rounded-full flex items-center justify-center">
            <Image src={challenge.logo} alt="Cup Logo" />
          </div>
          <div className="py-3">
            <div className="flex items-center gap-4">
              <h4 className="text-lime-400 text-3xl font-bold">{challenge.title}</h4>
              <Badge>{challenge.duration}</Badge>
            </div>
            <p className="text-sm font-medium">{challenge.detailedDescription}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-5">
          <Button
            className="bg-lime-500 text-white rounded-full px-5 py-2"
            onClick={handleJoinChallenge}
          >
            Join Challenge
          </Button>
          <Button
            className=" bg-lime-700 text-white rounded-full px-5 py-2"
            onClick={onClose}
            variant={"outline"}
          >
            Share
          </Button>
        </div>
        <div>
            <PiX className="absolute top-5 right-5 cursor-pointer h-7 w-7" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default ChallengeModal;
