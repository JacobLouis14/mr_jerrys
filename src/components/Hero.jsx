import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Header from "./Header";
import BottleCanvas from "./canvas/Bottle1";

export default function Hero() {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    setisMobile(mediaQuery.matches);

    const mediaQueryChangeHandler = (event) => {
      setisMobile(event.matches);
    };
    mediaQuery.addEventListener("change", mediaQueryChangeHandler);

    return () => {
      mediaQuery.removeEventListener("change", mediaQueryChangeHandler);
    };
  }, []);

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <Header />
      <div className="row flex-grow-1">
        <div className="col  position-relative d-flex  justify-content-center align-items-center">
          <BottleCanvas />

          {/* <motion.img
            initial={{ opacity: 0, y: 10 }}
            whileInView={[
              { opacity: 1, transition: { duration: 1 } },
              { y: 0, transition: { duration: 1 } },
            ]}
            className=" bg-transparent"
            style={{
              maxWidth: "100%",
              width: "40%",
              position: "absolute",
              top: isMobile ? "60%" : "30%",
            }}
            src="https://www.jerryscocktails.com/assets/images/logos/jerrys_logo_light.svg"
            alt="logo"
            onContextMenu={(e) => e.preventDefault()}
          /> */}
        </div>
      </div>
    </div>
  );
}
