import { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    // let prevScrollPos = window.pageYOffset;
    // window.onscroll = function () {
    //   let navbar = document.getElementById("navbar");
    //   let currentScrollPos = window.pageYOffset;
    //   prevScrollPos < currentScrollPos
    //     ? (navbar.style.top = "0")
    //     : (navbar.style.top = -navbar.clientHeight);
  
    //   prevScrollPos = currentScrollPos;
    // };

    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);

      //Show navbar if it was previously hidden in the last page
      let navbar = document.getElementById("navbar");
      navbar.style.top = "0";
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);