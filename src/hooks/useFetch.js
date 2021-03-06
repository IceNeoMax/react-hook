import { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:3001';
// TODO: need to add error handler for useFetch
export const useFetch = (url, method, params, headers) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let mounted = true;
    (async () => {
      const res = await fetch(`${baseUrl}${url}`, {
        method,
        headers,
        body: params,
      });

      const data = await res.json();
      if (mounted) {
        setLoading(false);
        setData(data);
      }
    })();
    const cleanup = () => { mounted = false; };
    return cleanup;
  }, [url, params, method, headers]);
  return [data, loading];
};

