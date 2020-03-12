import {useState, useEffect} from 'react';

function useFetch(url) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchData() {
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    {console.log(url)};
  }, [])

  return [data, loading];
}

export {useFetch};
