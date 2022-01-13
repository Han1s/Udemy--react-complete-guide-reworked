import Link from 'next/link';
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>
        The News Page
      </h1>
      <ul>
          <Link href='news/whatever'>
            <li>Next.js is great framework</li>
          </Link>
        <li>something else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;