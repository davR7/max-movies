import { useState, useEffect } from "react";

const useHttp = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => setData({ error: err.message }))
  }, [url])

  return [data]
};

export default useHttp;