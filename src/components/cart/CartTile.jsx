/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cartSice";

function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem.id));
  };

  return (
    <div className="bg-gray-100 flex justify-between  p-5 mt-2 mb-2">
      <div className="flex p-3  ">
        <img className="size-28" src={cartItem.image} alt={cartItem.title} />
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-lg">{cartItem.title}</h1>
          <p className="text-lg font-bold">Price : {cartItem.price}</p>
          <div>
            <button
              className="bg-gray-600 text-white text-lg font-semibold px-4 py-2 rounded hover:bg-gray-700"
              onClick={handleRemoveFromCart}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTile;
