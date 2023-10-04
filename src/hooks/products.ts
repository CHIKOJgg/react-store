import { useEffect, useState } from 'react';
import { IProduct } from '../models';
import axios, { AxiosError } from 'axios';

export function useProducts() {
  const [Products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  function addProduct(Product: IProduct) {
    setProducts((prev) => [...prev, Product]);
  }

  async function fetchProducts() {
    try {
      setError('');
      setLoading(true);
      const responce = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products?limit=5'
      );
      setProducts(responce.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return { Products, error, loading, addProduct };
}
