'use client';

import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [sku, setSku] = useState('');

  const handleProductNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setProductName(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handleSkuChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSku(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imagesArray = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setImages((prevImages) => [...prevImages, ...imagesArray]);
      //   Array.from(files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ productName, category, images });
  };

  return (
    <form onSubmit={handleSubmit} className="margin-alignment mt-8">
      <div className="mb-4">
        <label
          htmlFor="productName"
          className="mb-2 block font-bold text-gray-700"
        >
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={handleProductNameChange}
          className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="mb-2 block font-bold text-gray-700"
        >
          SKU
        </label>
        <input
          type="text"
          id="sku"
          value={sku}
          onChange={handleSkuChange}
          className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="mb-2 block font-bold text-gray-700"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
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
          {images.map((image) => (
            <li key={image} className="mx-2 mt-2 flex flex-col items-center">
              <img
                src={image}
                alt="Product"
                className="mr-2 mb-2 h-20 rounded"
              />
              <button
                type="button"
                onClick={() => setImages(images.filter((img) => img !== image))}
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
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:bg-blue-800"
      >
        Save Product
      </button>
    </form>
  );
};

export default CreateProduct;
