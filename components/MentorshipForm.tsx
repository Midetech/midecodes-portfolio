import { ArrowRight } from "lucide-react";
import React from "react";
import { RainbowButton } from "./ui/rainbow-button";

const MentorshipForm = ({
  handleSubmit,
  handleInputChange,
  formData,
}: {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    role: string;
    interest: string;
  };
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
    >
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block mb-2 dark:text-white">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="email" className="block mb-2 dark:text-white">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="070 311 234 1779"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block mb-2 dark:text-white">
            Current Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          >
            <option value="">Select Your Role</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="tester">Software Tester</option>
            <option value="pm">Product Manager</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="interest" className="block mb-2 dark:text-white">
          Mentorship Interests
        </label>
        <textarea
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleInputChange}
          rows={4}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
          placeholder="Tell us about your mentorship goals..."
        ></textarea>
      </div>

      <RainbowButton className="flex justify-center items-center gap-4  h-[47px]">
        <button
          type="submit"
          className="w-full  transition flex items-center justify-center"
        >
          Submit Application
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </RainbowButton>
    </form>
  );
};

export default MentorshipForm;
