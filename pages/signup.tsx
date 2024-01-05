import { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import { auth, db } from "@/config/firebase";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { useAuth } from "@/context/AuthContext";
import {
  createUserWithEmailAndPassword,
  User,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { ref, uploadBytes, getStorage } from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";


interface SignupFormData {
  fullName: string;
  email: string;
  username: string;
  password: string;
  goal: string;
  interest: string;
  avatar: string;
}

const Signup: React.FC = () => {
  const { setUser } = useUser();
  const { auth } = useAuth();
  const toast = useToast();

  const [formData, setFormData] = useState<SignupFormData>({
    fullName: "",
    email: "",
    username: "",
    password: "",
    goal: "",
    interest: "recycling",
    avatar: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const storage = getStorage();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userId = user.uid;

        // Use the UID to fetch user data from Firestore
        const userDoc = await getDoc(doc(db, "users", userId));
        const userData = userDoc.data();

        console.log("User data:", userData);
      } else {
        console.log("User not signed in");
      }
    });

    return () => unsubscribe(); // Cleanup the listener when component unmounts
  }, [auth]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFormData((prevData) => ({ ...prevData, avatar: selectedFile.name }));
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { email, password, fullName, goal, interest, avatar } = formData;
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user && file) {
        const userDocRef = doc(db, "users", user.uid);
        await setDoc(userDocRef, {
          fullName,
          email,
          goal,
          interest,
          avatar: "",
        });
        await updateProfile(user, { displayName: fullName });

        // Upload avatar logic
        const avatarRef = ref(storage, `avatars/${user.uid}/${avatar}`);
        await uploadBytes(avatarRef, file);

        toast.toast({
          title: "Account created successfully",
          description: "Welcome to the quest!",
        });

        router.push("/challenges");

        setUser({
          uid: user.uid,
          username: fullName,
          email,
          fullName,
          goal,
          interest,
          avatar: "",
        });
      }

      if (user&&file) {
        const userDocRef = doc(db, "users", user.uid);
        await setDoc(userDocRef, {
          fullName,
          email,
          goal,
          interest,
          avatar: "",
        });
        await updateProfile(user, { displayName: fullName });

        // Upload avatar logic
        const avatarRef = ref(storage, `avatars/${user.uid}/${avatar}`);
        await uploadBytes(avatarRef, file);

        toast.toast({
          title: "Account created successfully",
          description: "Welcome to the quest!",
        });

        router.push("/challenges");
      }
    } catch (error) {
      console.log(error);
      toast.toast({
        variant: "destructive",
        title: "Signup failed",
        description: "Please try again",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <div className="bg-gray-100 h-screen p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4">zerowaste-quest</h2>
      <p>Join the quest</p>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 w-full md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            ref={inputRef}
            id="fullName"
            name="fullName"
            onChange={handleChange}
            placeholder="Enter full name"
            className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
          />
          <Input
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="johndoe@example.com"
            className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="username"
            id="username"
            onChange={handleChange}
            placeholder="johndoe_99"
            className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
          />

          <Input
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Enter password"
            className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
          />
        </div>

        <Textarea
          name="goal"
          id="goal"
          onChange={handleChange}
          placeholder="Waste Reduction Goal"
          className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select name="interest" id="interest" onChange={handleChange}>
            <option value="recycling">Recycling</option>
            <option value="renewableEnergy">Renewable Energy</option>
            <option value="sustainableLiving">Sustainable Living</option>
            <option value="plasticFreeLiving">Plastic Free Living</option>
            <option value="zeroKitchenWaste">Zero Kitchen Waste</option>
          </select>

          <Input
            type="file"
            id="avatar"
            name="avatar"
            onChange={handleFileChange}
            className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-background hover:bg-lime-500 w-1/4"
          >
            Sign Up
          </Button>
        </div>
      </form>
      <p className="pt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-lime-500 hover:underline">
          Sign in
        </Link>{" "}
        to continue quest
      </p>
    </div>
  );
};

export default Signup;
