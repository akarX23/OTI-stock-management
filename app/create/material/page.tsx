'use client';

import React from 'react';
import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

interface MaterialProps {
  id?: string;
  name?: string;
  images?: string[];
}

const Material = ({ id = '', name = '', images = [] }: MaterialProps) => {
  const [material, setMaterial] = useState({ id, name });
  const [newImages, setNewImages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(material, newImages);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imagesArray = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setNewImages((prevImages) => [...prevImages, ...imagesArray]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="margin-alignment mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
          Material Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full rounded-md border px-3 py-2"
          value={material.name}
          onChange={(e) => setMaterial({ ...material, name: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="images" className="mb-2 block font-bold text-gray-700">
          Images
        </label>
        <div className="flex items-center justify-center border-2 border-dashed border-gray-400">
          <label
            htmlFor="fileInput"
            className="flex w-full cursor-pointer items-center justify-center py-2"
          >
            <FaCamera className="mr-2 text-gray-500" />
            <span className="text-gray-500">Click to upload images</span>
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            multiple
          />
        </div>
        <ul className="mt-2 flex">
          {newImages.map((image) => (
            <li key={image} className="mx-2 mt-2 flex flex-col items-center">
              <img
                src={image}
                alt="Material"
                className="mr-2 mb-2 h-20 rounded"
              />
              <button
                type="button"
                onClick={() =>
                  setNewImages(images.filter((img) => img !== image))
                }
                className="focus:shadow-outline rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600 focus:outline-none"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="submit"
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Material;
