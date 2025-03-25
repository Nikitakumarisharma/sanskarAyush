import Link from "next/link";

const Menu = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li className="menu-item has-children style">
          <a href="/">
            Home
            <span className="dd-trigger"></span>
          </a>
        </li>

        <li className="menu-item has-children style">
          <Link href="/aboutUs">About</Link>
        </li>

        <li className="menu-item has-children style">
          <Link href="/service-details">Services</Link>
        </li>
        {/* <li className="menu-item has-children style">
          <Link  href="/products">
            Products
          </Link>
        </li> */}
        <li className="menu-item has-children style">
          <Link  href="/ourDivision">
            Our Division
          </Link>
        </li>

        <li className="menu-item has-children style">
          <Link  href="gallery">
            Gallery
          </Link>
        </li>
        <li className="menu-item has-children style">
          <Link  href="/nabl_lab">
            NABL Lab
          </Link>
        </li>
       

      </ul>
    </nav>
  );
};
export default Menu;
