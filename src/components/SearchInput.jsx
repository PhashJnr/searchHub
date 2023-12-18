// import React, { useEffect } from "react";

function SearchInput({
  searchQuery,
  setSearchQuery,
  products,
  onSelectProduct,
}) {
  return (
    <div className="searchContainer shrink w-[450px] relative flex justify-center">
      <input
        className=" border-none mx-auto pl-[6px] py-[6px]  focus:outline-1 rounded-[6px] w-[80%] "
        type="text"
        placeholder="search product"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {searchQuery.length > 3 && (
        <div className="searchResult w-full h-[300px] shadow-md bg-[#fff] z-20 absolute mt-[50px] border-none rounded-[8px]">
          {products.map((product) => (
            <SearchResult
              product={product}
              key={product.product_id}
              onSelectProduct={onSelectProduct}
              setSearchQuery={setSearchQuery}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SearchResult({ product, onSelectProduct, setSearchQuery }) {
  const truncatedTitle = product.product_title.slice(0, 35);
  const displayTitle =
    product.product_title.length > 40 ? truncatedTitle + "..." : truncatedTitle;
  // console.log(products);
  return (
    <div
      className="product h-fit flex bg-[#fff] hover:bg-searchResultHover cursor-pointer  "
      title={product.product_title}
      onClick={() => {
        onSelectProduct(product.product_id);
        setSearchQuery("");
      }}
    >
      <div className=" w-[64px] mr-[20px] border-b-[2px] ">
        <img
          className="object-fit"
          src={product.product_photos[0]}
          alt={product.product_title}
        />
      </div>
      <div className="grow flex flex-col justify-between">
        <p>{displayTitle}</p>
        {product.product_rating && (
          <p>
            ⭐<strong>{product.product_rating}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
