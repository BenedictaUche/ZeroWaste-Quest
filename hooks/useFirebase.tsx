// // src/hooks/useFirebase.ts
// import { useEffect, useState } from 'react';
// import firebase from 'firebase/app';
// import { auth } from '@/config/firebase';
// import { Firestore } from 'firebase/firestore';
// import { firebaseConfig } from '@/config/firebase';

// export interface Firebase {
//   auth: firebase.auth.Auth;
//   firestore: firebase.firestore.Firestore;
// }

// export const useFirebase = (): Firebase => {
//   const [firebaseInstance, setFirebaseInstance] = useState<Firebase | null>(null);

//   useEffect(() => {
//     const app = firebase.initializeApp(firebaseConfig);
//     const firestore = app.firestore();
//     setFirebaseInstance({ auth, firestore });

//     return () => {
//       auth.signOut();
//       app.delete();
//     };
//   }, []);

//   return firebaseInstance!;
// };
