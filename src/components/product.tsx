import { IProduct } from '../models';
import React, { useState } from 'react';
interface ProductProps {
  Product: IProduct;
}

export function Product({ Product }: ProductProps) {
  const [details, setDetails] = useState(false);
  const btnBgClassname = details ? 'bg-yellow-400' : 'bg-blue-400';
  const btnClasses = ['border py-2 px-4', btnBgClassname];
  return (
    <div className="border py-2 px-4 rounded display flex flex-col items-center mb-2 ">
      <img src={Product.image} className="w-1/5" alt={Product.title} />
      <p>{Product.title}</p>
      <span className="font-bold">{Product.price}</span>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Hide details' : 'Show details'}
      </button>

      {details && (
        <div>
          <p>{Product.description}</p>

          <p>
            Rate:{' '}
            <span style={{ fontWeight: 'bold' }}>{Product?.rating?.rate}</span>
          </p>
        </div>
      )}
      <p></p>
    </div>
  );
}
