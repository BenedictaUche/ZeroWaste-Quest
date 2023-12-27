import React from 'react';
import Navbar from '@/components/nav';
import ChallengeCard from '@/components/challengesTask/challenge-card';
import CupLogo from '@/public/coffee-cup.svg'
import CutleryLogo from '@/public/fork-kitchen.svg'

interface ChallengeData {
    title: string;
    description: string;
    duration: string;
    logo: any;
}

const challengeData: ChallengeData[] = [
    {
        title: 'Plastic Free Week Challenge',
        description: 'Participants commit to eliminating single-use plastics from their daily lives for a week. This includes using reusable containers, bags, and water bottles.',
        duration: '7 days',
        logo: CupLogo,
    },
    {
        title: 'Zero-Waste Kitchen Challenge',
        description: 'Participants focus on reducing kitchen waste by composting, using reusable containers, and minimizing food packaging. The challenge aims to create a zero-waste kitchen environment.',
        duration: '7 days',
        logo: CutleryLogo,
    },
    {
        title: 'Digital detox challenge',
        description: 'Participants reduce their digital footprint by limiting online activities. This includes minimizing electronic waste and encouraging offline interactions.',
        duration: '7 days',
        logo: CupLogo ,
    },
    {
        title: 'Green community challenge',
        description: 'Participants pledge to use eco-friendly transportation alternatives for a week, such as walking, cycling, carpooling, or using public transportation.',
        duration: '7 days',
        logo: CutleryLogo ,
    }
]


const Challenges = () => {
    return (
        <div className='bg-gray-100 h-screen'>
            <Navbar />
            <div>
                <h4>Your Challenges</h4>
                <ChallengeCard challengeData={challengeData} />
            </div>
        </div>
    );
};

export default Challenges;
