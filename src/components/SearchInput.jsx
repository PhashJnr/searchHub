import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

function SearchInput({
  searchQuery,
  setSearchQuery,
  products,
  onSelectProduct,
  isLoading,
  error,
}) {
  return (
    <div className="searchContainer shrink sm:w-[450px] relative flex justify-center">
      <input
        className="border-none mx-auto pl-[18px] py-[6px]  focus:outline-1 focus:outline-[#3D9696] rounded-[6px] sm:w-full h-[40px] bg-[#fff] shadow-md"
        type="text"
        placeholder="search product"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {searchQuery && (
        <div className="searchResult w-full h-[300px] shadow-md bg-[#fff] z-20 absolute mt-[50px] border-none rounded-[8px]">
          {products.map((product) => (
            <SearchResult
              product={product}
              key={product.product_id}
              onSelectProduct={onSelectProduct}
              setSearchQuery={setSearchQuery}
              isLoading={isLoading}
            />
          ))}

          {error === "The user aborted a request." || error === null ? (
            ""
          ) : (
            <div className="h-full flex justify-center items-center ">
              <p className="text-center text-[#D80032]">
                {/* {error ? error : "Unable to load search results"} */}
                Unable to load search results❗❗❗. Try later....
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SearchResult({ product, onSelectProduct, setSearchQuery, isLoading }) {
  const truncatedTitle = product.product_title.slice(0, 35);
  const displayTitle =
    product.product_title.length > 40 ? truncatedTitle + "..." : truncatedTitle;
  // console.log(products);
  return (
    <>
      {isLoading ? (
        <Stack
          style={{
            display: "flex",
            gap: "7px",
            width: "100%",
            flexDirection: "row",
            marginBottom: "6px",
            padding: "6px 9px",
            height: "65px",
          }}
        >
          <Skeleton
            variant="square"
            style={{ height: 65, width: 65, borderRadius: "6px" }}
          />
          <Skeleton
            variant="rectangular"
            style={{
              height: "65px",
              width: "fit",
              borderRadius: "6px",
              flex: 1,
            }}
          />
        </Stack>
      ) : (
        <div
          className="product h-fit flex bg-[#fff] hover:bg-searchResultHover cursor-pointer  border-b-[2px]"
          title={product.product_title}
          onClick={() => {
            onSelectProduct(product.product_id);
            setSearchQuery("");
          }}
        >
          <div className="w-[64px] h-[64px] mr-[20px]">
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
      )}
    </>
  );
}

export default SearchInput;
