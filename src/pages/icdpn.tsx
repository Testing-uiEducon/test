// pages/go/[destination].tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const icdpn = () => {
  const router = useRouter();
  const { destination } = router.query;

  useEffect(() => {
        window.location.href = 'https://www.icdpn-conf.com';
  }, []);

  return <p>Redirecting...</p>;
};

export default icdpn;
