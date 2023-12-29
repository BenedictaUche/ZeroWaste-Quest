// pages/challenges/[id].tsx
import { useRouter } from 'next/router';
import Image from 'next/image';
import CupLogo from '@/public/coffee-cup.svg';
import { Badge } from '../../components/ui/badge'; // Adjust the path as needed
import { challengeData } from '../challenges';

const ChallengeDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the challenge with the specified id
  const challenge = challengeData.find((c) => c.id === parseInt(id as string));

  if (!challenge) {
    return <p>Challenge not found</p>;
  }

  return (
    <div>
      <h1>{challenge.title}</h1>
      <div>
        <div>
          <Image src={CupLogo} alt="Cup Logo" />
        </div>
        <div>
          <div>
            <h4>{challenge.title}</h4>
            <Badge>{challenge.duration}</Badge>
          </div>
          <p>{challenge.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
