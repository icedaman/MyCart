import { useEffect, useState } from "react";

const ScrollToTopBtn = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(()=> {
    const handleScroll = () => {
      const documentElement = document.documentElement;
      
      // get the scroll top position
      const scrolled = documentElement.scrollTop;

      // calculate the max height of the document
      const maxHeight =
        documentElement.scrollHeight - documentElement.clientHeight;

      // calculate the percentage
      const scrollPercent = (scrolled / maxHeight) * 100;

      // update state
      setScrollPosition(scrollPercent);
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    if(scrollPosition > 15){
      setShowScrollBtn(true)
    }else{
      setShowScrollBtn(false)
    }

    // remove event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, [scrollPosition])

  const setScrollToTop = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      {showScrollBtn ? (
        <button id="to-top-button" onClick={setScrollToTop} title="Go To Top"
          className=" fixed z-50 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-coral-red text-white text-3xl font-bold">
          &uarr;
        </button>
      ) : null }
    </>
  )
}

export default ScrollToTopBtn