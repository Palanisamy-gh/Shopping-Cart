import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../../components/cart/CartTile";

function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div className=" mt-2 h-96 rounded flex justify-center">
      {cart && cart.length ? (
        <div className="grid md:grid-cols-3">
          <div className=" min-h-[80vh] max-w-6xl grid md:grid-cols-2  mx-auto col-span-2">
            <div className="flex flex-col items-center w-96 p-3">
              {cart.map((cartItem) => (
                <CartTile key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
          </div>

          <div className="bg-white/75 max-w-6xl mx-auto  p-8 space-y-5">
            <div className="font-bold text-lg text-red-800 ml-12">
              <h1 className="text-3xl font-bold mb-4">Cart summery</h1>
              <p className="">
                <span className="text-gray-800 text-2xl font-bold">
                  Total Items :{" "}
                </span>
                <span className="text-xl font-bold">{cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 text-2xl font-bold">
                  Total Amount :{" "}
                </span>
                <span className="text-xl font-bold">{totalCart}</span>
              </p>
              <button className="bg-yellow-600 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-500 mt-4">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col  items-center justify-center mt-2">
          <p className="text-gray text-2xl font-bold tracking-wider">
            Your cart is empty!
          </p>
          <button className="bg-yellow-500 text-gray-800 text-xl font-semibold px-4 py-2 mt-4 rounded  ">
            <Link to={"/"}>Browse Products</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
