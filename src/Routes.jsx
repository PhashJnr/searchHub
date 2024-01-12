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
  onDeleteWishList,
  alert,
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
              alert={alert}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlists
              wishList={wishList}
              onDeleteWishList={onDeleteWishList}
              alert={alert}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesLink;
