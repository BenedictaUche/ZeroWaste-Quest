import { useState, useEffect, useRef } from "react";

import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from '@/config/firebase';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SignupFormData, formSchema } from "@/types/globals";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";

interface SignupProps {}


const Signup: React.FC<SignupProps> = () => {
  const form = useForm<SignupFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      username: "",
      password: "",
      goal: "",
      interest: "recycling",
      avatar: "",
    },
  });

  // const inputRef = React.forwardRef<HTMLInputElement>((props, ref) => (
  //   <input {...props} ref={ref} />
  // ));

  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // const handleFileChange = async (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const fileInput = e.target;
  //   const selectedFile = fileInput.files?.[0];

  //   if (selectedFile) {
  //     // You can upload the file to Firebase Storage here
  //     const storageRef = ref(storage, `avatars/${selectedFile.name}`);
  //     await uploadBytes(storageRef, selectedFile);

  //     // Set the avatar field to the URL or storage reference
  //     form.setValue("avatar", storageRef);
  //   }
  // };

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    try {
      const { email, password, fullName, goal, interest } = data;
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, { displayName: fullName });
        console.log(user);
        router.push("/challenges");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="bg-gray-100 h-screen p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4">zerowaste-quest</h2>
      <p>Join the quest</p>

      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      ref={inputRef}
                      id="fullName"
                      placeholder="Enter full name"
                      className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="email"
                      placeholder="johndoe@example.com"
                      className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="username"
                      placeholder="johndoe_99"
                      className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="password"
                      className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="goal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Waste reduction goal</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    id="goal"
                    className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Waste reduction interest</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      id="interest"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        form.setValue("interest", e.target.value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue>
                          {field.value ? field.value : "Select an interest"}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recycling">Recycling</SelectItem>
                        <SelectItem value="renewableEnergy">
                          Renewable Energy
                        </SelectItem>
                        <SelectItem value="sustainableLiving">
                          Sustainable Living
                        </SelectItem>
                        <SelectItem value="plasticFreeLiving">
                          Plastic Free Living
                        </SelectItem>
                        <SelectItem value="zeroKitchenWaste">
                          Zero Kitchen Waste
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="avatar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avatar</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="avatar"
                      type="file"
                      className="bg-gray-100 p-2  shadow-md placeholder:text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>

          <Button
            type="submit"
            className="bg-background hover:bg-background-300"
          >
            Sign Up
          </Button>
        </form>
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-background underine">
            Sign in
          </Link>{" "}
          to continue quest
        </p>
      </Form>
    </div>
  );
};

export default Signup;
