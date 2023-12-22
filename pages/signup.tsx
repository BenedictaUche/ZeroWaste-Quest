// "use client"

import { useState, useEffect } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  username: z
    .string()
    .min(9)
    .max(20, "Username must be between 9 and 20 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  goal: z.string(),
  interest: z.enum([
    "recycling",
    "renewableEnergy",
    "sustainableLiving",
    "plasticFreeLiving",
    "zeroKitchenWaste",
  ]),
  avatar: z.string(),
});

interface SignupProps {
    // types

}

const Signup: React.FC<SignupProps> = () => {
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        fullName: "",
        email: "",
        username: "",
        password: "",
        goal: "",
        interest: "recycling" || "renewableEnergy" || "sustainableLiving" || "plasticFreeLiving" || "zeroKitchenWaste",
        avatar: "",
    },
});

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }


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
                    <Select {...field}
                    id="interest"
                    onChange={(e) => form.setValue("interest", e.target.value)}
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

            <FormField
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
            />
          </div>

          <Button
            type="submit"
            className="bg-background hover:bg-background-300"
          >
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
