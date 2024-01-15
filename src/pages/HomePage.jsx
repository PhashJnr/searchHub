import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <main className="main h-screen flex justify-center content-center bg-[#1b4242]">
        <div className="mainContainer m-auto text-center flex-col px-4">
          {/* <p className="text-textSize text-homeTextColor">
            Welcome to search Hub
          </p> */}
          <h1 className=" text-headerFontSize text-xl text-headerColor">
            Search for products from popular online stores across the world.
          </h1>

          <Link to="/productpage">
            <Button
              buttonText="Start Searching"
              customClasses=" bg-[#fff] mt-[3rem] "
            />
          </Link>
        </div>
      </main>
      <Footer customClasses="m-0" />
    </>
  );
}

export default HomePage;
