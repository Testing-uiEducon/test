// pages/go/[destination].tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const icain = () => {
  const router = useRouter();
  const { destination } = router.query;

  useEffect(() => {
    if (destination) {
      // Define your redirections here
      const redirects: { [key: string]: string } = {
        'icain': 'https://www.icain-conf.com',
        'icdpn': 'https://www.icdpn-conf.com',
        // Add more as needed
      };

      const targetUrl = redirects[destination as string];

      if (targetUrl) {
        window.location.href = targetUrl;
      } else {
        router.push('/');
      }
    }
  }, [destination, router]);

  return <p>Redirecting...</p>;
};

export default icain;
