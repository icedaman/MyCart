import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  // scroll bar logic
  useEffect(() => {
    const handler = () => {
      const documentElement = document.documentElement;
      // get the scroll top position
      const scrolled = documentElement.scrollTop;

      // calculate the max height of the document
      const maxHeight =
        documentElement.scrollHeight - documentElement.clientHeight;

      // calculate the percentage
      const scrollPercent = (scrolled / maxHeight) * 100;

      // update state
      setScroll(scrollPercent);
    };
    // add event listener
    window.addEventListener("scroll", handler);

    // remove event listener on unmount
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="bg-coral-red fixed top-0 h-1 w-screen z-50">
      <div
        className="bg-orange-300 h-full"
        style={{ width: scroll + "%" }}
      ></div>
      {/* <p>scroll: {scroll}</p> */}
    </div>
  );
};
export default ScrollIndicator;