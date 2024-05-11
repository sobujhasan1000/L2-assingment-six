import React, { FormEvent, useState } from "react";
import { usePostdonationMutation } from "../../redux/api/api";

const CreateDonation = () => {
  const [formData, setFormData] = useState({
    image: "",
    category: "",
    title: "",
    amount: "",
    description: "",
  });

  const [postdonation, { data, isLoading, isError }] =
    usePostdonationMutation();
  console.log(data, isLoading, isError, "final data");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    postdonation(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-4 m-2">
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
        <label className="input input-bordered flex items-center gap-2 m-2">
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

        <label className="input input-bordered flex items-center gap-2 m-2">
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

        <label className="input input-bordered flex items-center gap-2 m-2">
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

        <label className="input input-bordered flex items-center gap-2 m-2">
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="grow"
            placeholder="Description"
          ></textarea>
        </label>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateDonation;
