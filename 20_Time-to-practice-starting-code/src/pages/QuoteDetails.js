import React, { Fragment } from 'react';
import { useParams, Route } from 'react-router';
import Comments from '../components/comments/Comments';



const QuoteDetails = () => {
  const params = useParams();

  console.log(params.quoteId);

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;