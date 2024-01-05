// hooks/useChallenges.ts
import { useQuery } from 'react-query';
import { db } from '@/config/firebase';
import { getDocs, collection } from 'firebase/firestore';

const useChallenges = () => {
  const fetchChallenges = async () => {
    const querySnapshot = await getDocs(collection(db, 'challenges'));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  return useQuery('challenges', fetchChallenges);
};

export { useChallenges };
