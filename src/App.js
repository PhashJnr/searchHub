import { useEffect, useState } from "react";
import RoutesLink from "./Routes";
import "./index.css";
import { useLocalStorage } from "./hooks/useLocaleStorage";

// const KEY = "6da65c7bb0msh33cfd919db7a4a9p17e247jsn5c507f80144a";
const KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProdId, setSelectedProdId] = useState("null");
  const [wishList, setWishList] = useLocalStorage([], "wish");
  const [alert, setAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSelectedProduct(id) {
    setSelectedProdId((selectedId) => (id === selectedId ? null : id));
  }

  function handleAddWishList(product) {
    setWishList((wishlist) => [...wishlist, product]);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  function handleRemoveWishList(id) {
    const updatedWishList = wishList.filter(
      (product) => product.productID !== id
    );

    setWishList(updatedWishList);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  useEffect(() => {
    function handleClick() {
      setSelectedProdId(null);
      setSearchQuery("");
    }

    document.body.addEventListener("click", handleClick);

    return document.body.removeEventListener("click", handleClick);
  }, [setSelectedProdId, setSearchQuery]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://real-time-product-search.p.rapidapi.com/search?q=${searchQuery}&limit=10`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": KEY,
              "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
            },
            signal: controller.signal,
          }
        );

        if (!res) return;

        if (!res.ok) {
          throw new Error("Network response was not ok!");
        }

        const data = await res.json();

        setProducts(data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      } catch (err) {
        setTimeout(() => {
          setError(err.message);
        }, 3000);
      }
    }

    if (searchQuery.length < 1) return;

    fetchData();

    return function cleanup() {
      controller.abort();
    };
  }, [searchQuery]);

  return (
    <RoutesLink
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      error={error}
      products={products}
      onSelectProduct={handleSelectedProduct}
      selectedProdId={selectedProdId}
      wishList={wishList}
      onAddWishList={handleAddWishList}
      onDeleteWishList={handleRemoveWishList}
      alert={alert}
      setAlert={setAlert}
      isLoading={isLoading}
    />
  );
}

export default App;
