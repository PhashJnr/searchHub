import WishIcon from "../assets/icons/wish-icon.svg";
import { Link } from "react-router-dom";

function WishPage({ wishList }) {
  return (
    <Link to="/wishlist">
      <div className="wishicon relative border-2 rounded-[50%]  border-[#fff] p-[4px]">
        <img
          className="w-[24px]  my-auto h-[24px]"
          src={WishIcon}
          alt="favorite list icon"
        />

        <span className="absolute p-2 top-[-5px] right-[-5px] w-4 h-4 rounded-full bg-[#fff] text-[#191919] inline-flex items-center justify-center ">
          {wishList.length}
        </span>
      </div>
    </Link>
  );
}

export default WishPage;
