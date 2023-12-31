import { useState } from "react";
import * as z from "zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginFormData, formSchema } from "@/types/globals";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { email, password } = formData;
      console.log("Form data:", formData);

      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        console.log(auth.currentUser);
      } else {
        console.log("No user");
      }

      console.log('Redirecting to /challenges');
      router.push("/challenges");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 h-screen p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4">zerowaste-quest</h2>
      <p>Continue the quest</p>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 w-full md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px]"
      >
        <div>
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-background hover:bg-lime-500 w-1/4"
            disabled={isLoading}
          >
            {isLoading ? 'Logging In...' : 'Login'}
          </Button>
        </div>
      </form>
      <p className="pt-4">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-lime-500 hover:underline">
          Create a new account
        </Link>
      </p>
    </div>
  );
};

export default Login;
