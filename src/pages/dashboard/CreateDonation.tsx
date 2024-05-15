import React, { FormEvent, useState } from "react";
import { usePostdonationMutation } from "../../redux/api/api";

// Define types for your input data
type FormData = {
  image: string;
  category: string;
  title: string;
  amount: number | string; // Assuming amount can also be a string
  description: string;
};

const CreateDonation = () => {
  // Initialize state with the FormData type
  const [formData, setFormData] = useState<FormData>({
    image: "",
    category: "",
    title: "",
    amount: "",
    description: "",
  });

  // Use the usePostdonationMutation hook to handle the API call
  const [postdonation] = usePostdonationMutation();

  // Handle changes in form inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Update formData state with the new value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Call the postdonation mutation with formData
      await postdonation(formData);
      console.log("Donation posted successfully");
      // Reset form fields after successful submission
      setFormData({
        image: "",
        category: "",
        title: "",
        amount: "",
        description: "",
      });
    } catch (error) {
      console.error("Error posting donation:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  return (
    <div className="text-xl">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-400 p-6 rounded-md h-auto grid gap-4 w-{700}"
      >
        <label className="input input-bordered flex items-center gap-4 m-2 bg-cyan-200">
          Image
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="grow"
            placeholder="Image URL"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 m-2 bg-cyan-200">
          Donation Category
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="grow"
            placeholder="Category"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 m-2 bg-cyan-200">
          Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="grow"
            placeholder="Title"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 m-2 bg-cyan-200">
          Amount
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="grow"
            placeholder="Amount"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 m-2 bg-cyan-200">
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="grow bg-cyan-200"
            placeholder="Description"
          ></textarea>
        </label>

        <button type="submit" className="btn bg-cyan-600 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateDonation;
