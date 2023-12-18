import React from "react";

// const buttonStyle = {
//   // backgroundColor: "blue",
//   // borderRadius: "8px",
//   // border: "1px solid #191919",
//   // padding: "12px 16px",
// };

function Button({ buttonText, customClasses, onClick, disabled }) {
  // const buttonDisabled = false;
  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <>
      <button
        onClick={handleClick}
        // style={buttonStyle}
        className={`bg-buttonColor rounded-[6px] px-[16px] py-[7px] ${customClasses}`}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </>
  );
}

export default Button;
