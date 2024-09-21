"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { LOGO_URL } from "@/app/utils/constants/constants";

const RestaurantHeader = () => {
  const [restaurantDetails, setRestaurantDetails] = useState();
  const router = useRouter();
  const pathname = usePathname();

  const logout = () => {
    localStorage.removeItem("restaurantUser");
  };

  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && pathname === "/restaurant/dashboard") {
      router.push("/restaurant");
    } else if (data && pathname === "/restaurant") {
      router.push("/restaurant/dashboard");
    } else {
      setRestaurantDetails(JSON.parse(data));
    }
  }, []);

  return (
    <div className="header-wrapper">
      <div className="logo">
        <img
          style={{ width: 100 }}
          src={LOGO_URL}
          alt={"restaurant-logo"}
        />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {restaurantDetails ? (
          <li>
            <Link onClick={() => logout()} href="/">
              Logout
            </Link>
          </li>
        ) : (
          <li>
            <Link href="/">Login/SignUp</Link>
          </li>
        )}

        <li>
          <Link href="/">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantHeader;
