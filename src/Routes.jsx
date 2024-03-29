import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductSearchPage from "./pages/ProductSearchPage";
import Wishlists from "./pages/Wishlists";

function RoutesLink({
  searchQuery,
  setSearchQuery,
  error,
  products,
  onSelectProduct,
  selectedProdId,
  wishList,
  onAddWishList,
  onDeleteWishList,
  alert,
  setAlert,
  isLoading,
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
              error={error}
              isLoading={isLoading}
              products={products}
              onSelectProduct={onSelectProduct}
              selectedProdId={selectedProdId}
              wishList={wishList}
              onAddWishList={onAddWishList}
              alert={alert}
              setAlert={setAlert}
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
              setAlert={setAlert}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesLink;
