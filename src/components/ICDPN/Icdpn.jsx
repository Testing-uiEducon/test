import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Icdpn() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://www.icdpn-conf.com/');
  }, [router]);

  return null;
}