import { useEffect, useState } from "react";

export default function useFetchData() {
  const [data, setData] = useState({});
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch("/api", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();
      if ("last-updated" in responseData) {
        delete responseData["last-updated"];
      }
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err as Error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, loading };
}
