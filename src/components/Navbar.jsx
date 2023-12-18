import React from "react";

function Navbar({ children }) {
  return (
    <nav className="navbar py-2 bg-navBg">
      <div className="navContainer flex justify-between px-7">
        <Logo />

        {children}
      </div>
    </nav>
  );
}

function Logo() {
  return <h1 className="text-headerColor shrink text-[24px]">searchHub</h1>;
}

export default Navbar;
