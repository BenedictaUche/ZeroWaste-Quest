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


const AddChallengeModal: React.FC<ChallengeModalProps> = ({ isOpen, onClose, onAddChallenge, }) => {
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
    console.log(formData);
    onClose();
  };


  return (
    <div
      className={`fixed bg-white shadow-md px-10 py-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter a title of the challenge"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter a detailed description of your challenge"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            name="duration"
            placeholder="7 days"
            value={formData.duration}
            onChange={handleChange}
          />
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
