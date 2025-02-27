import { useEffect } from 'react';
import { useRouter } from 'next/router';

function ToSql(_props) {
  const router = useRouter();

  useEffect(() => {
    router.push('https://keithstolte.io/toSql');
  }, [router]);

  return null;
}

export default ToSql;
