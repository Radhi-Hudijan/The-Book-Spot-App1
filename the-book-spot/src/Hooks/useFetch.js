import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await fetch(
          `${url}&key=${process.env.REACT_APP_GOOGLE_API_KEY2}&maxResults=15`
        );
        const data = await response.json();
        setData(data.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
