import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchProduct = () => {

  const dataId = useParams()

  const [data, setData] = useState(); // -> 1 - {}
  const [loading, setLoading] = useState(true); // -> 2

  // -> 5
  const fetchData = async () => {
    try {
      setLoading(true); // Loading on - true --> 6
      const res = await fetch(`https://dummyjson.com/products/${dataId.product_id}`); // {} 1.Dot Notition & 2.Bracket Notiotion
      const data = await res.json();
      setData(data); // API DATA Saving to State Variable --> 7

      setLoading(false); // Loading off - false --> 8
    } catch (err) {
      console.log(err);
    }
  };

  console.log("data:", data);

  useEffect(() => {
    fetchData(); // -> 4
  }, [dataId.product_id]);

  return { data, loading };
}

export default useFetchProduct;