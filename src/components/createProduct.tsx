import React, { useState } from 'react';
import { IProduct } from '../models';
import axios from 'axios';
import { ErrorMessage } from './error';

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}
export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
      rate: 0,
      count: 0,
    },
  };

  const SubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    if (value.trim().length === 0) {
      setError('enter valid title');
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>(
      'https://fakestoreapi.com/products',
      productData
    );
    onCreate(response.data);
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={SubmitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mp-2  w-full outline-0 "
        placeholder="enter product name"
        value={value}
        onChange={changeHandler}
      />
      {error && <ErrorMessage error={error} />}
      <button
        type="submit"
        className="border py-2 px-4 bg-yellow-400 hover:bg-cyan-800"
      >
        Create
      </button>
    </form>
  );
}
