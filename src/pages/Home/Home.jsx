import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import Products from "../../components/product/Products";
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);

      if (data) {
        setLoading(false);
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29, 29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length ? (
            products.map((productItem) => (
              <Products key={productItem.id} product={productItem} />
            ))
          ) : (
            <h1>No Products to show</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
