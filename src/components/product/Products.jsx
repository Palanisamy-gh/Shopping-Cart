/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

import { addToCart, removeFromCart } from "../../store/slices/cartSice";

function Products({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    // console.log("removed");
    dispatch(removeFromCart(product.id));
  }

  return (
    <div className="">
      <div className="group flex flex-col gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl items-center border border-black ">
        <div className="h-[180px]">
          <img
            className="object-cover h-full w-full"
            src={product?.image}
            alt={product?.title}
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-800 text-xl font-semibold">
            {product?.title}
          </h1>
        </div>
        <div>
          <p className="text-xl font-bold">
            Price :<span className=""> {product?.price} ₹</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-yellow-600 text-white text-lg font-semibold px-4 py-2 rounded hover:bg-yellow-500"
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
