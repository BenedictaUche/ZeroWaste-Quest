import { useState } from "react";
import Navbar from "@/components/nav";
import ChallengeCard from "@/components/challengesTask/challenge-card";
import CupLogo from "@/public/coffee-cup.svg";
import CutleryLogo from "@/public/fork-kitchen.svg";
import Leaderboard from "@/components/leaderboard";


interface ChallengeData {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  duration: string;
  logo: any;
}

export const challengeData: ChallengeData[] = [
  {
    id: 1,
    title: "Plastic Free Week Challenge",
    description:
      "Participants commit to eliminating single-use plastics from their daily lives for a week. This includes using reusable containers, bags, and water bottles.",
    detailedDescription:
      "The Plastic Free Week Challenge is designed to raise awareness about the environmental impact of single-use plastics. Participants are encouraged to go beyond the basics and explore creative ways to reduce plastic consumption. This challenge is not just about avoiding plastic straws and bags; it's about rethinking our daily routines to create a lasting impact on the planet. Join us in this journey to discover sustainable alternatives and make a positive change!",
    duration: "7 days",
    logo: CupLogo,
  },
  {
    id: 2,
    title: "Zero-Waste Kitchen Challenge",
    description:
      "Participants focus on reducing kitchen waste by composting, using reusable containers, and minimizing food packaging. The challenge aims to create a zero-waste kitchen environment.",
    detailedDescription:
      "The Zero-Waste Kitchen Challenge invites participants to transform their kitchens into eco-friendly spaces. Beyond the basics of composting and using reusable containers, this challenge encourages participants to explore creative ways to reduce food waste. Learn about smart meal planning, effective storage solutions, and innovative recipes that make the most of every ingredient. Join us on a journey to create a kitchen that not only produces delicious meals but also minimizes environmental impact!",
    duration: "7 days",
    logo: CutleryLogo,
  },
  {
    id: 3,
    title: "Digital Detox Challenge",
    description:
      "Participants reduce their digital footprint by limiting online activities. This includes minimizing electronic waste and encouraging offline interactions.",
    detailedDescription:
      "In the Digital Detox Challenge, participants embark on a week-long journey to break free from the constant digital chatter. Beyond just reducing screen time, this challenge encourages participants to rediscover the joys of offline activities. From engaging in face-to-face conversations to exploring the outdoors without the distraction of devices, this challenge aims to promote a healthier balance between the digital and real world. Join us in unplugging and recharging for a more mindful and connected life!",
    duration: "7 days",
    logo: CupLogo,
  },
  {
    id: 4,
    title: "Green Community Challenge",
    description:
      "Participants pledge to use eco-friendly transportation alternatives for a week, such as walking, cycling, carpooling, or using public transportation.",
    detailedDescription:
      "The Green Community Challenge is a call to action for participants to rethink their daily commute and contribute to a greener planet. Beyond the individual impact, participants are encouraged to inspire their communities to embrace eco-friendly transportation alternatives. Whether it's organizing group walks, promoting bike-sharing programs, or advocating for improved public transportation, this challenge is about fostering a sense of collective responsibility for the environment. Join us in creating a green and sustainable community!",
    duration: "7 days",
    logo: CutleryLogo,
  },
];

const Challenges = () => {

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="px-10">
        <h4 className="font-bold text-2xl text-lime-700 py-4">
          Your Challenges
        </h4>
        <ChallengeCard challengeData={challengeData} />
      </div>
      <Leaderboard />
    </div>
  );
};

export default Challenges;
