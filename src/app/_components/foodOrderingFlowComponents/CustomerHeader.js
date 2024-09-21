import { LOGO_URL } from "@/app/utils/constants/constants";
import Link from "next/link";

const CustomerHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img style={{ width: 100 }} src={LOGO_URL} alt={"restaurant-logo"} />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Login In</Link>
        </li>
        <li>
          <Link href="/">Sign Up</Link>
        </li>
        <li>
          <Link href="/">Cart(0)</Link>
        </li>
        <li>
          <Link href="/">Add Restaurant</Link>
        </li>
      </ul>
    </div>
  );
};

export default CustomerHeader;
