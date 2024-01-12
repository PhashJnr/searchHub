import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Wishlists({ wishList, onDeleteWishList, alert }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const { title } = wishList;

  console.log("title", title);
  return (
    <>
      <Navbar></Navbar>
      <main className="wishlist relative ">
        {alert ? (
          <Alert
            sx={{
              width: "fit-content",
              position: "fixed",
              top: "10px",
              left: 0,
              zIndex: 10,
              right: 0,
              margin: "auto",
            }}
            severity="success"
          >
            Item has been removed from your wishlist.
          </Alert>
        ) : (
          ""
        )}

        <div className="wishlistContainer mt-5 max-w-[1200px] mx-auto px-5 ">
          <Button
            customClasses="px-[16px] py-[7px]  rounded-[6px] border"
            variant="primary"
            onClick={() => navigate("/productpage")}
            buttonText="&larr; Back"
          />
          <div className="wishlistContent ">
            {wishList.length > 0 ? (
              <Wishlist
                wishList={wishList}
                onDeleteWishList={onDeleteWishList}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
            ) : (
              <h1 className="text-[#191919] text-center  text-[30px] mt-[15px]">
                Your Wishlist is empty, add an item to the wishlist.
              </h1>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

function Wishlist({ wishList, onDeleteWishList, setIsOpen, isOpen }) {
  console.log("wishlist", wishList);
  return (
    <div className="mt-10">
      {wishList.map((item) => (
        <>
          <div className="flex flex-col sm:flex-row  gap-9  border-l-[2px] border-l-navBg rounded-[16px] p-6 sm:py-7 sm:px-6 shadow-md mb-[3rem] ">
            <div className="h-[250px]   max-w-[350px]">
              <img
                className="h-full w-full object-contain"
                src={item.photo}
                alt={item.title}
              />
            </div>
            <div className="self-start flex flex-col gap-7   max-w-[500px] ">
              <div className="flex flex-col gap-3">
                <p className="text-xl font-medium">{item.title}</p>
                <p className="text-[1.1rem] font-medium text-black-/[0.6] ">
                  {item.price}
                </p>
                <h3>Store: {item.storeName}</h3>
                <h4>{item.shipping}</h4>
                <h5>{item.description}</h5>
              </div>

              <div className="wishlistButton flex justify-between  ">
                <Button
                  // onClick={() => onDeleteWishList(item.productID)}
                  onClick={() => setIsOpen(true)}
                  buttonText="Remove"
                  customClasses="border bg-[#D80032] text-[#fff] "
                />
                <Button
                  buttonText="Buy Now"
                  customClasses="bg-[#000] text-[#fff] "
                />
              </div>
            </div>
          </div>

          {/* MODAL */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } modaloverlay fixed h-[100vh] w-[100vw]  top-0 left-0 flex items-center justify-center px-4  bg-[#fff]/[0.5] backdrop-blur-[1px] `}
          >
            <div className=" m-auto inset-0 max-w-[500px] px-[2rem] py-[3rem] bg-[#fff] rounded-[12px] shadow-md ">
              <div className=" text-center ">
                <p>Are you sure you want remove item from your wishlist?</p>

                <div className="flex justify-between mt-[2rem]">
                  <Button
                    buttonText="Cancel"
                    customClasses="bg-[#D80032] text-[#fff] "
                    onClick={() => setIsOpen(false)}
                  />
                  <Button
                    onClick={() => {
                      onDeleteWishList(item.productID);
                      setIsOpen(false);
                    }}
                    buttonText="Remove"
                    customClasses="bg-[#000] text-[#fff] "
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Wishlists;
