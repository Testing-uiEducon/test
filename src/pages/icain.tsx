// pages/go/[destination].tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Icain = () => {
  const router = useRouter();
  const { destination } = router.query;

  useEffect(() => {
        window.location.href = 'https://www.icain-conf.com';
  }, []);

  return <p>Redirecting...</p>;
};

export default Icain;
