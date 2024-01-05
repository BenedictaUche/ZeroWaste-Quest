import React, { useState } from "react";
import { PiX } from "react-icons/pi";
import { Button } from "@/components/ui/button";

type ChallengeFormData = {
  title: string;
  description: string;
  duration: string;
};

type ChallengeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddChallenge: (challenge: ChallengeFormData) => void;
};

const AddChallengeModal: React.FC<ChallengeModalProps> = ({isOpen,onClose,onAddChallenge,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddChallenge(formData);
    onClose();
  };

  return (
    <div
      className={`fixed bg-white shadow-md p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter a title of the challenge"
            value={formData.title}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-green-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter a detailed description of your challenge"
            value={formData.description}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-green-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="duration" className="block text-sm font-semibold text-gray-700">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            placeholder="7 days"
            value={formData.duration}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-green-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="logo" className="block text-sm font-semibold text-gray-700">
            Logo
          </label>
          <input type="file" id="logo" name="logo" className="mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-green-300 hover:file:bg-gray-200" />
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit">Add Challenge</Button>
        </div>
        <div className="absolute top-0 right-0 p-4">
          <button onClick={onClose}>
            <PiX className="font-bold text-2xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddChallengeModal;
