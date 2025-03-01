import { useEffect } from "react";
import { stickyNav } from "../../utils";
import Header1 from "./Header1";
const Header = ({ header }) => {
  useEffect(() => {
    stickyNav();
  }, []);

      return <Header1 />;  
};
export default Header;
