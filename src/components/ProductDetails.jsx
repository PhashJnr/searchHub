import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Button from "./Button";
import { useLocalStorage } from "../hooks/useLocaleStorage";

const KEY = process.env.REACT_APP_API_KEY;

function ProductDetails({ selectedProdId, onAddWishList, wishList }) {
  const [product, setProduct] = useLocalStorage({}, "product");
  const [prodRating, setProdRating] = useState(0);
  const [additionalInfo, setAdditionalInfo] = useLocalStorage({}, "infos");
  const [photo, setPhoto] = useLocalStorage([], "photo");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const isButtonDisabled = true;

  console.log("wishList", wishList);

  console.log("productID", product.product_id);

  function handleAddWishList(id) {
    const isProductInWishlist = wishList.some(
      (product) => product.productID === id
    );

    if (!isProductInWishlist) {
      const newWishList = {
        productID,
        photo,
        title,
        price,
        shipping,
        ratingFromProduct,
        storeName,
      };
      onAddWishList(newWishList);
    }
  }

  function handleSetPhoto(index) {
    setSelectedImageIndex(index);
  }

  const {
    product_id: productID,
    product_title: title,
    product_description: description,
    product_rating: ratingFromProduct,
    product_num_reviews: reviewNum,
    product_reviews_page_url: reviewURL,
    offer,
    typical_price_range: priceRange,
  } = product || {};

  console.log("prduct id", productID);

  const {
    store_name: storeName,
    offer_page_url: offerPageURL,
    shipping,
    price,
  } = offer || {};

  const isWishListed = wishList.some(
    (product) => product.productID === productID
  );

  useEffect(() => {
    if (ratingFromProduct !== undefined) {
      const convertedRating = Number(ratingFromProduct);
      setProdRating(convertedRating);
    }
  }, [ratingFromProduct]);

  const handleRatingChange = (newValue) => {
    setProdRating(newValue);
  };

  useEffect(() => {
    async function productDetail() {
      try {
        const res = await fetch(
          `https://real-time-product-search.p.rapidapi.com/product-details?product_id=${selectedProdId}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": KEY,
              "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
            },
          }
        );

        const data = await res.json();

        setProduct(data.data.product);

        const productPhotos = data.data.product.product_photos || [];
        setPhoto(Array.isArray(productPhotos) ? productPhotos : []);
        setAdditionalInfo(data.data.product.product_attributes);
      } catch (err) {
        console.error(err.message);
      }
    }

    productDetail();
    setSelectedImageIndex(0);
  }, [selectedProdId, setAdditionalInfo, setPhoto, setProduct]);

  return (
    <div className="productDetailsContainer mx-auto object-contain  flex items-center flex-col justify-center  lg:w-[1200px] ">
      {!title ? (
        ""
      ) : (
        <div className="flex flex-col lg:flex-row gap-[50px] p-9 lg:mt-[3rem]">
          <div className="productDetailsImage w-[250px] sm:w-[450px]  flex-none grow">
            <div className="overflow-hidden rounded-[15px]">
              <img
                className="mx-auto object-contain h-full w-full "
                src={photo[selectedImageIndex]}
                alt={title}
              />
            </div>
            <ProductImages images={photo} onSetPhotos={handleSetPhoto} />
          </div>

          <div className="productDetailsTexts flex-initial lg:px-[50px]  sm:p-0 grow-0 ">
            <h2 className="font-productFont text-[23px]  font-bold mb-[1rem]">
              {title}
            </h2>
            <div className="flex gap-2 ">
              <Rating
                name="half-rating-read"
                value={prodRating}
                onChange={(event, newValue) => handleRatingChange(newValue)}
                precision={0.1}
                readOnly
              />
              <strong>{prodRating}</strong>
              <p>
                <a className="underline  mr-1 " href={reviewURL}>
                  ({reviewNum})
                </a>
                reviews
              </p>
            </div>

            {priceRange && (
              <h1 className="font-semibold text-[18px] ml-[9px] sm:ml-0 mt-[15px]">
                Price range
                <span className="ml-[7px] text-[26px]">
                  {priceRange[0]} - {priceRange[1]}
                </span>
              </h1>
            )}

            <div>
              <p>
                Available now on{" "}
                <span className="font-semibold">{storeName}</span> for{" "}
                <strong>{price}</strong>
              </p>

              <a href={offerPageURL} target="_blank" rel="noopener noreferrer">
                <Button
                  customClasses={
                    "bg-[#191919] text-[#fff] my-[1rem]  px-[28px]   hover:text-[#fff]  rounded-[6px] font-productFont hover:bg-[#5B5B5B]"
                  }
                  buttonText={"Buy Now"}
                />
              </a>

              {isWishListed ? (
                <Button
                  customClasses={
                    "bg-[#9EC8B9] text-[#fff] ml-[20px] border-solid border rounded-[6px] border-[#191919] font-productFont  "
                  }
                  buttonText={"Wishlisted"}
                  disabled={isButtonDisabled}
                />
              ) : (
                <Button
                  customClasses={
                    "bg-[#ffffff] text-[#191919] ml-[20px] border-solid border rounded-[6px] border-[#191919] font-productFont  hover:text-[#fff] hover:bg-[#191919]"
                  }
                  buttonText={"Add to Wishlist"}
                  onClick={() => handleAddWishList(product.product_id)}
                />
              )}

              <p className="opacity-50 mt-[-9px]">
                {shipping === "Free delivery"
                  ? "This product is available for free shipping"
                  : "Free shipping not available"}
              </p>
            </div>

            <p className="font-productFont text-[14px] mt-[3rem] sm:p-0 opacity-70">
              {description}
            </p>
          </div>
        </div>
      )}

      <ProductAttributes additionalInfo={additionalInfo} />
    </div>
  );
}

function ProductImages({ onSetPhotos, images }) {
  const [activeDiv, setActive] = useState(null);

  function handleActiveDiv(index) {
    setActive(index);
  }

  return (
    <div className="productImageScroll  gap-3  object-contain z-10 mt-5 mb-[10px] pb-[6px] ">
      <div className="flex gap-[15px]">
        {images.map((imageURL, index) => (
          <div
            className={`h-[50px] flex-shrink-0 w-[50px] cursor-pointer ${
              index === activeDiv ? "activeDiv" : ""
            } `}
            key={index}
            onClick={() => {
              onSetPhotos(index);
              handleActiveDiv(index);
            }}
          >
            <img className="object-contain" src={imageURL} alt="products" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductAttributes({ additionalInfo }) {
  return (
    <div className="additionalInfo pl-[28px] self-start">
      {additionalInfo && (
        <>
          {Object.keys(additionalInfo).length > 0 && <h1>Additional Info</h1>}
          <ul>
            {Object.entries(additionalInfo).map(([key, value]) => (
              <li key={key}>
                <strong>{key}: </strong>
                {value}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
