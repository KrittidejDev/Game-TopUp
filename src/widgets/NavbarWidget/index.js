import { useRouter } from "next/router";
import React from "react";
import { NavbarWidgetStyles } from "./styled";
import Link from "next/link";
import { Icons } from "@/components";

const NavbarWidget = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <NavbarWidgetStyles>
      <div className="nav_container">
        <Link className="logo_wrap" href={"/"}>
          <img src="/images/icons/logo.png" alt="logo" />
        </Link>
        <div className="nav_menu_list">
          {MENU_LIST.map((e, i) => (
            <Link
              key={i}
              className={`menu_item ${
                currentPath === e.routePath ? "active" : ""
              }`}
              href={e.routePath}
            >
              {e.label}
              <div className="menu_icon">
                <Icons.NavbarIcon
                  color={currentPath === e.routePath ? "#C0621B" : "#151515"}
                />
              </div>
            </Link>
          ))}
        </div>
        <div>avartar</div>
      </div>
    </NavbarWidgetStyles>
  );
};

const MENU_LIST = [
  {
    label: "Home",
    routePath: "/",
  },
  {
    label: "Event",
    routePath: "/event",
  },
  {
    label: "Promotion",
    routePath: "/promotion",
  },
  {
    label: "Contact Us",
    routePath: "/contact-us",
  },
];

export default NavbarWidget;
