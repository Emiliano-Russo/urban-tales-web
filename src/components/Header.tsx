import { useEffect, useState } from "react";

const logo = require("../assets/official-logo-white.png");

export const Header = () => {
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del evento
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      style={{
        width: "100%",
        height: "13%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={logo} style={{ width: "25%", maxWidth: "100px" }} />
    </header>
  );
};
