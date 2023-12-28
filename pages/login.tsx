import { useRef, useEffect } from "react";

import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from "@/config/firebase";

import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { LoginFormData, formSchema } from "@/types/globals";

interface LoginProps {}


// const inputsRef = useRef<HTMLInputElement>(null);

const Login: React.FC<LoginProps> = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {};


  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      console.log("Form data:", data); // Log form data

      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);

      console.log("Logged in successfully");
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log("User is signed in");
  //     router.push("/dashboard");
  //   } else {
  //     console.log("User is not signed in");
  //   }
  // });



  return (
    <div className="bg-gray-100 h-screen p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4">zerowaste-quest</h2>
      <p>Continue the quest</p>

      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px]"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState, formState }) => (
              <FormItem>
                <FormLabel htmlFor="emaii">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    // ref={inputsRef}
                    id="email"
                    placeholder="Enter email"
                    className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage>{formState.errors.email?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState, formState }) => (
              <FormItem>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="password"
                    placeholder="Enter password"
                    type="password"
                    className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage>{formState.errors.password?.message}</FormMessage>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-background hover:bg-green-300 text-white"
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
