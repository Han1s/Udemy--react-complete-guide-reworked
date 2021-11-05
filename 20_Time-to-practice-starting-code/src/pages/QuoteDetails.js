import React from 'react';
import { useParams } from 'react-router';

const QuoteDetails = () => {
  const params = useParams();

  console.log(params.quoteId);

  return (
    <h1>Quote Detail Page</h1>
  );
};

export default QuoteDetails;