"use client"; // Next.js App Router ke liye zaroori hai agar hooks use kar rahe ho

import Link from "next/link";
import { useEffect, useState } from "react";

const Menu = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // LocalStorage se check karega ki admin-token available hai ya nahi
    const adminToken = localStorage.getItem("admin-token");
    if (adminToken) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <nav className="main-menu">
      <ul>
        <li className="menu-item has-children style">
          <Link href="/">Home</Link>
        </li>

        <li className="menu-item has-children style">
          <Link href="/aboutUs">About</Link>
        </li>

        <li className="menu-item has-children">
          <a href="#">
            Services
            <span className="dd-trigger">
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu">
             {/* Our Services dropdown with 6 items */}
             <li className="has-children">
              <a href="#">Our Services</a>
              <ul className="sub-menu">
                <li>
                  <Link legacyBehavior href="/service1">
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/service2">
                    Service 2
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/service3">
                    Service 3
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/service4">
                    Service 4
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/service5">
                    Service 5
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/service6">
                    Service 6
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link legacyBehavior href="/thirdParty">
                Third Party manufacturer
              </Link>
            </li>

           
          </ul>
        </li>

        <li className="menu-item has-children style">
          <Link href="/products">Products</Link>
        </li>

        <li className="menu-item has-children style">
          <Link href="/ourDivision">Our Divisions</Link>
        </li>

        <li className="menu-item has-children style">
          <Link href="/gallery">Gallery</Link>
        </li>

        <li className="menu-item has-children style">
          <Link href="/nabl_lab">NABL Lab</Link>
        </li>

        {/* Admin Panel ko sirf Admin ke liye dikhane ka logic */}
        {isAdmin && (
          <li className="menu-item has-children style">
            <Link href="/admin">Admin Panel</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
