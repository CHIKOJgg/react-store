import React from 'react';
interface ErrorMessageProps {
  error: string;
}
export function ErrorMessage({ error }: any) {
  return <p className="text-center">{error}</p>;
}
