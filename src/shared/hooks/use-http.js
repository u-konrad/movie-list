import { useState, useCallback } from "react";


const requestTimeoutMs = 8000;

const useHttp = () => {
  const [isLoading, setLoading] = useState(false);

  const fetchData = useCallback(async (url) => {
    const requestController = new AbortController();
    const requestTimeoutId = setTimeout(
      () => requestController.abort(),
      requestTimeoutMs
    );

    try {
      setLoading(true)
      const response = await fetch(url, {
        signal: requestTimeoutId.signal,
      });

      clearTimeout(requestTimeoutId);
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.error);
      }

      setLoading(false);
      return responseData;
    } catch (err) {
      setLoading(false);
      return err
    }
  }, []);

  return { isLoading, fetchData};
};

export default useHttp;
