import React from "react";

function Navbar({ children }) {
  return (
    <nav className="navbar py-3 bg-navBg">
      <div className="navContainer flex justify-between items-center px-7">
        <Logo />

        {children}
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <>
      <h1 className="text-headerColor shrink text-[24px] hidden sm:block ">
        searchHub
      </h1>
      <h1 className="text-headerColor shrink text-[24px] sm:hidden ">sH</h1>
    </>
  );
}

export default Navbar;
