import React from 'react'
import MaleFace from '@/public/male_face.png'
import FemaleFace from '@/public/female_face.png'
import GoldMedal from '@/public/gold_medal.png'
import SilverMedal from '@/public/silver_medal.png'
import BronzeMedal from '@/public/bronze_medal.png'
import Image from 'next/image'


const data = [
  {
    name: 'John Doe',
    avatar: MaleFace,
    username: 'johndoe',
    score: 100,
  },
  {
    name: 'Jane Doe',
    avatar: MaleFace,
    username: 'janedoe',
    score: 500,
  },
  {
    name: 'Benedicta Onyebuchi',
    avatar: MaleFace,
    username: 'benny_dicta',
    score: 900,
  },
  {
    name: 'Bella Schmurda',
    avatar: MaleFace,
    username: 'bella_schmurda',
    score: 600,
  },
  {
    name: 'Lydia Loveth',
    avatar: MaleFace,
    username: 'lydia120',
    score: 100,
  },
  {
    name: 'Anthony Joshua',
    avatar: MaleFace,
    username: 'anthonyjosh',
    score: 300,
  },
  {
    name: 'Lionel Doe',
    avatar: MaleFace,
    username: 'lioneldoe',
    score: 100,
  },
  {
    name: 'Lionel Petit',
    avatar: MaleFace,
    username: 'lionelpetit',
    score: 100,
  },
  {
    name: 'Xena Doe',
    avatar: MaleFace,
    username: 'xenadoe',
    score: 100,
  },
]

const Leaderboard = () => {

  // give the first three top scores medals and the rest none
  const sortedData = [...data].sort((a, b) => b.score - a.score);

  return (
    <div>
      {sortedData.map((item, index) => {
        let medalImage;

        // Determine the medal based on the index
        if (index === 0) {
          medalImage = GoldMedal;
        } else if (index === 1) {
          medalImage = SilverMedal;
        } else if (index === 2) {
          medalImage = BronzeMedal;
        }
        return (
          <div
          key={index}
          className="flex justify-between items-center py-2 px-4 border-b border-gray-200"
        >
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <Image src={item.avatar} alt="avatar" className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-700">{item.name}</p>
              <p className="text-xs text-gray-500">@{item.username}</p>
            </div>
          </div>
          <div className="flex items-center">
            {medalImage && (
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                  <Image src={medalImage} alt="medal" className="w-6 h-6" />
                </div>
              )}
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-700">{item.score}</p>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default Leaderboard
