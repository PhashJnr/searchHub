import Button from "../components/Button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="main h-screen flex justify-center content-center bg-background">
      <div className="mainContainer m-auto text-center flex-col">
        <p className="text-textSize text-homeTextColor">
          Welcome to search Hub
        </p>
        <h1 className="font-headerFont text-headerFontSize text-xl text-headerColor">
          Looking for something?
        </h1>

        <Link to="/productpage">
          <Button
            buttonText="Start Searching"
            customClasses="hover:bg-homeTextColor hover:text-buttonColor"
          />
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
