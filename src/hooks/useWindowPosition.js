import { useLayoutEffect, useState } from "react";

export default function useWindowPosition(id) {
  //  const [animation, setAnimation] = useState(false);
  const [headerAnimation, setHeaderAnimation] = useState(false);
  const [aboutAnimation, setAboutAnimation] = useState(false);
  const [portfolioAnimation, setPortfolioAnimation] = useState(false);
  const [contactAnimation, setContactAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      //    const offsetHeight = window.document.getElementById(id).offsetHeight;
      // console.log("offsetHeight", offsetHeight);
      if (window.pageYOffset < 600) {
        setHeaderAnimation(true);
      }
      if (window.pageYOffset > 600) {
        setAboutAnimation(true);
      }
      if (window.pageYOffset > 1550) {
        setPortfolioAnimation(true);
      }
      if (window.pageYOffset > 2300) {
        setContactAnimation(true);
        setHeaderAnimation(false);
      }
      if (window.pageYOffset === 0) {
        setAboutAnimation(false);
        setPortfolioAnimation(false);
        setContactAnimation(false);
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
  }, [id]);
  return {
    headerAnimation,
    aboutAnimation,
    portfolioAnimation,
    contactAnimation,
  };
}
