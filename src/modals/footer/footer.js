// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

export function Footer() {
  //   const location = useLocation();
  //   const [backgroundColor, setBackgroundColor] = useState("");

  //   useEffect(() => {
  //     if (
  //       location.pathname.includes("/dictionary") ||
  //       location.pathname.includes("/recommend") ||
  //       location.pathname.includes("/training")
  //     ) {
  //       return setBackgroundColor("#f8f8f8");
  //     }
  //     if (
  //       location.pathname.includes("/register") ||
  //       location.pathname.includes("/login")
  //     ) {
  //       return setBackgroundColor("#fcfcfc");
  //     } else {
  //       return setBackgroundColor("#85aa9f");
  //     }
  //   }, [location]);
  return (
    <footer
      style={{
        position: "absolute",
        left: "50px",
        bottom: "10px",
      }}
    >
      <a
        style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
        href="https://github.com/gritchin-artur"
      >
        © made by Hrytchyn Artur
      </a>
    </footer>
  );
}
