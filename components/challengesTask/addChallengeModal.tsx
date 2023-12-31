"use client";

import React, { useState } from "react";
// import Modal from "react-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { PiX } from "react-icons/pi";

type ChallengeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddChallenge: (challenge: string) => void;
};

const formSchema = z.object({
  challenge: z.string().nonempty(),
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  detailedDescription: z.string().nonempty(),
  duration: z.string().nonempty(),
  logo: z.string().nonempty(),
  category: z.string().nonempty(),
});

const AddChallengeModal: React.FC<ChallengeModalProps> = ({
  isOpen,
  onClose,
  onAddChallenge,
}) => {
  const [challenge, setChallenge] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      detailedDescription: "",
      duration: "",
      logo: "",
      category: "",
    },
  });

const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        // Use onAddChallenge to handle adding the challenge to Firestore
        onAddChallenge(values.challenge); // Pass the challenge property instead of the entire values object
        onClose();
    } catch (error) {
        console.error('Error adding challenge to Firestore:', error);
    }
};

//   const handleAddChallenge = () => {
//     if (challenge.trim() !== "") {
//       onAddChallenge(challenge);
//       onClose();
//     }
//   };

  return (
    <div
      className={`fixed bg-white shadow-md px-10 py-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a title of the challenge"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your challenge public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a detailed description of your challenge"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter a detailed description of your challenge
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <FormControl>
                  <Input placeholder="7 days" {...field} />
                </FormControl>
                <FormDescription>
                  Enter the duration of this challenge
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a detailed description of your challenge"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter a detailed description of your challenge
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <div className="flex items-center justify-center">
          <Button type="submit">Add Challenge</Button>
          </div>
          <div className="absolute top-0 right-0 p-4">
          <button onClick={onClose}><PiX className='font-bold text-2xl'/></button>
          </div>

        </form>
        {/* <input type="text" placeholder="Logo" />
      <select name="category" id="category">
        <option value="">Plastic Free Challenge</option>
        <option value="">Zero waste kitchen challenge</option>
        <option value="">Digital Detox Challenge</option>
        <option value="">Green Community Challenge</option>
        <option value="">Eco-friendly transportation challenge</option>
        <option value="">Energy Saving challenge</option>
        <option value="">Sustainable food challenge</option>
      </select>
      </div> */}
      </Form>
    </div>
  );
};

export default AddChallengeModal;
