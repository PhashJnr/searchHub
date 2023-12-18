import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductSearchPage from "./pages/ProductSearchPage";
import Wishlists from "./pages/Wishlists";

function RoutesLink({
  searchQuery,
  setSearchQuery,
  products,
  onSelectProduct,
  selectedProdId,
  wishList,
  onAddWishList,
}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/productpage"
          element={
            <ProductSearchPage
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              products={products}
              onSelectProduct={onSelectProduct}
              selectedProdId={selectedProdId}
              wishList={wishList}
              onAddWishList={onAddWishList}
            />
          }
        />
        <Route path="/wishlist" element={<Wishlists wishList={wishList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesLink;
