function Footer({ customClasses }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${customClasses} bg-navBg/[0.9] py-5 `}>
      <div className="text-center text-[#fff]">
        <p>&copy; {currentYear} searchHub. All rights reserved. </p>
      </div>
    </footer>
  );
}

export default Footer;
