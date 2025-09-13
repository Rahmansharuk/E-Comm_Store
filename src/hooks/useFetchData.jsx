import { useEffect, useState } from "react";

const useFetchData = () => {

  // Local State Variable
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("productData:", productData);

  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []); // [] - only one time on Initial Render

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProductData(data.products); // Re-render Component
      setLoading(false);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };
  return { productData, loading };
}

export default useFetchData