import { useRouter } from 'next/router';

const Detail = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <h1>
      The Detail Page
    </h1>
  );
};

export default Detail;