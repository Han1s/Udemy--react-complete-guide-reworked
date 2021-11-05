import React, { Fragment } from 'react';
import { useParams, Route } from 'react-router';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!'},
  { id: 'q2', author: 'Maxmilian', text: 'Learning React is great!'},
]


const QuoteDetails = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => {
    return quote.id === params.quoteId;
  })

  if (!quote) {
    return <p>No quote found!</p>;
  }

  console.log(params.quoteId);

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;