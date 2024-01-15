import Navbar from "../components/Navbar";
import ProductDetails from "../components/ProductDetails";
import SearchInput from "../components/SearchInput";
import WishSectionIcon from "../components/WishSectionIcon";

function ProductSearchPage({
  searchQuery,
  setSearchQuery,
  error,
  isLoading,
  products,
  selectedProdId,
  onSelectProduct,
  wishList,
  onAddWishList,
  alert,
  setAlert,
}) {
  function closeSearchResult() {
    setSearchQuery("");
  }

  return (
    <>
      <Navbar>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          error={error}
          isLoading={isLoading}
          products={products}
          onSelectProduct={onSelectProduct}
        />
        <WishSectionIcon wishList={wishList} setAlert={setAlert} />
      </Navbar>

      <main
        onClick={closeSearchResult}
        className="bg-productPageBg bg-cover relative h-[100vh] sm:p-0 overflow-x-hidden "
      >
        <ProductDetails
          selectedProdId={selectedProdId}
          onAddWishList={onAddWishList}
          wishList={wishList}
          alert={alert}
          setAlert={setAlert}
        />
      </main>
    </>
  );
}

export default ProductSearchPage;
