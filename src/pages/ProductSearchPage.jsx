import Navbar from "../components/Navbar";
import ProductDetails from "../components/ProductDetails";
import SearchInput from "../components/SearchInput";
import WishSectionIcon from "../components/WishSectionIcon";

function ProductSearchPage({
  searchQuery,
  setSearchQuery,
  products,
  selectedProdId,
  onSelectProduct,
  wishList,
  onAddWishList,
}) {
  return (
    <>
      <Navbar>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          products={products}
          onSelectProduct={onSelectProduct}
        />
        <WishSectionIcon wishList={wishList} />
      </Navbar>

      <main className="bg-productPageBg bg-cover  sm:p-0 overflow-x-hidden ">
        <ProductDetails
          selectedProdId={selectedProdId}
          onAddWishList={onAddWishList}
          wishList={wishList}
        />
      </main>
    </>
  );
}

export default ProductSearchPage;
