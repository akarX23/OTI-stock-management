'use client';

import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const CreateSupplier = () => {
  const [supplierName, setSupplierName] = useState('');
  const [image, setImage] = useState<string>('');

  const handleSupplierNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSupplierName(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : '';
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ supplierName, image });
  };

  return (
    <form onSubmit={handleSubmit} className="margin-alignment mt-8">
      <div className="mb-4">
        <label
          htmlFor="supplierName"
          className="mb-2 block font-bold text-gray-700"
        >
          Supplier Name
        </label>
        <input
          type="text"
          id="supplierName"
          value={supplierName}
          onChange={handleSupplierNameChange}
          className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="images" className="mb-2 block font-bold text-gray-700">
          Image
        </label>
        <div className="flex items-center justify-center border-2 border-dashed border-gray-400">
          <label
            htmlFor="fileInput"
            className="flex w-full cursor-pointer items-center justify-center py-2"
          >
            <FaCamera className="mr-2 text-gray-500" />
            <span className="text-gray-500">Click to upload image</span>
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        {image && (
          <div className="mt-2 flex items-start justify-between">
            <img
              src={image}
              alt="Supplier"
              className="mx-auto mb-2 h-72 rounded"
            />
            <button
              type="button"
              onClick={() => setImage('')}
              className="focus:shadow-outline rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600 focus:outline-none"
            >
              Remove
            </button>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:bg-blue-800"
      >
        Save Supplier details
      </button>
    </form>
  );
};

export default CreateSupplier;
